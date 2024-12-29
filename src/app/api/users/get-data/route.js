import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { getDataFromToken } from "@/helper/dataFromToken";

connect();

export const GET = async (request) => {
    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({ _id: userId }).select("-password");
        return NextResponse.json({ message: "User data fetched successfully", Data: user });


    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}