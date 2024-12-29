import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Category from "@/models/categoryModel";

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { name, description } = reqBody;

        // Check if category already exists
        const existingCategory = await Category.findOne({ name });
        if (existingCategory) {
            return NextResponse.json(
                { error: "Category already exists" },
                { status: 400 }
            );
        }

        // Get the highest existing refValueId
        const highestCategory = await Category.findOne().sort('-refValueId');
        const nextRefValueId = highestCategory ? highestCategory.refValueId + 1 : 1;

        // Create new category
        const newCategory = new Category({
            name,
            description,
            refValueId: nextRefValueId
        });

        // Save category to database
        const savedCategory = await newCategory.save();

        return NextResponse.json({
            message: "Category created successfully",
            success: true,
            category: savedCategory
        });

    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}
