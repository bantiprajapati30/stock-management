import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Brand from "@/models/brandModel";

connect();
export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { name, parentValue } = reqBody;

        // Validate request body
        if (!name || typeof name !== "string") {
            return NextResponse.json(
                { error: "Invalid 'name' field" },
                { status: 400 }
            );
        }
        if (!parentValue || typeof parentValue !== "number") {
            return NextResponse.json(
                { error: "Invalid 'parentValue' field" },
                { status: 400 }
            );
        }

        // Check if brand already exists with the same name and parentValue
        const existingBrand = await Brand.findOne({ name: { $regex: `^${name}$`, $options: "i" }, parentValue });
        if (existingBrand) {
            return NextResponse.json(
                { error: "Brand already exists with the same category" },
                { status: 400 }
            );
        }

        // Get the highest existing refValueId
        const highestBrand = await Brand.findOne({}, { refValueId: 1 }).sort({ refValueId: -1 });
        const nextRefValueId = highestBrand ? highestBrand.refValueId + 1 : 1;

        // Create a new Brand
        const newBrand = new Brand({
            name,
            parentValue,
            refValueId: nextRefValueId
        });

        // Save brand to database
        const savedBrand = await newBrand.save();

        return NextResponse.json({
            message: "Brand created successfully",
            success: true,
            brand: savedBrand
        });

    } catch (error) {
        // Handle duplicate key error (E11000)
        if (error.code === 11000) {
            return NextResponse.json(
                { error: "Brand with the same name and parentValue already exists" },
                { status: 400 }
            );
        }

        // Generic error handling
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}
