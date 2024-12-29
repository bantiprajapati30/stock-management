import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Size from "@/models/sizeModel";

connect();

export async function GET(request) {
    try {
        // Fetch all categories from the database
        const { searchParams } = new URL(request.url);
        const type = searchParams.get("type");
        if (!type) {
            return NextResponse.json(
                { error: "type query parameter is required" },
                { status: 400 }
            );
        }

        const size = await Size.find({type: Number(type)});
console.log(size, "test");
        if (!size.length) {
            return NextResponse.json(
                { message: "No size found for the specified type", success: false },
                { status: 204 }
            );
        }

        return NextResponse.json({
            message: "size fetched successfully",
            success: true,
            size
        });

    } catch (error) {
        console.error("Error fetching brands:", error);
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}
