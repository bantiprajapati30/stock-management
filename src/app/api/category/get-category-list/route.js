import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Category from "@/models/categoryModel";

connect();

export async function GET() {
    try {
        // Fetch all categories from the database
        const categories = await Category.find({});

        if (!categories) {
            throw new Error("Failed to fetch categories");
        }

        return NextResponse.json({
            message: "Categories fetched successfully",
            success: true,
            categories
        });

    } catch (error) {
        console.error("Error fetching categories:", error);
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}
