import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Brand from "@/models/brandModel";

connect();

export async function GET(request) {
    try {
        // Fetch all categories from the database
        const { searchParams } = new URL(request.url);
        const parentValue = searchParams.get("parentValue");

        const brands = await Brand.find(parentValue ? { parentValue: Number(parentValue) }:{});
        const categories = brands.map((brand) => brand.categoryName);
        const data =categories.map((category) => {
            let finalArray = [];
            const categoryBrands = brands.filter((brand) => brand.categoryName === category);
            brands.map((brand) => {
                if (brand.categoryName === category) {
                    finalArray.push(brand.name);
                }
            })
            return {[category]: finalArray};
        })
        if (!brands.length) {
            return NextResponse.json(
                { message: "No brands found for the specified parentValue", success: false },
                { status: 404 }
            );
        } else {
            if(!parentValue) {
                return NextResponse.json({
                    message: "Brands fetched successfully",
                    success: true,
                    data:{categories: categories, brands: data}
                });
            } else {
                return NextResponse.json({
                    message: "Brands fetched successfully",
                    success: true,
                    brands
                });
            }
        }

    } catch (error) {
        console.error("Error fetching brands:", error);
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}
