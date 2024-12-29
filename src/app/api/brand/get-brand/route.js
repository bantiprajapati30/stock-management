import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Brand from "@/models/brandModel";

connect();

export async function GET(request) {
    try {
        // Fetch all categories from the database
        const { searchParams } = new URL(request.url);
        const parentValue = searchParams.get("parentValue");
        if (!parentValue) {
            return NextResponse.json(
                { error: "parentValue query parameter is required" },
                { status: 400 }
            );
        }

        const brands = await Brand.find({ parentValue: Number(parentValue) });

        if (!brands.length) {
            return NextResponse.json(
                { message: "No brands found for the specified parentValue", success: false },
                { status: 404 }
            );
        }

        return NextResponse.json({
            message: "Brands fetched successfully",
            success: true,
            brands
        });

    } catch (error) {
        console.error("Error fetching brands:", error);
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}
