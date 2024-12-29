import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();
export const POST = async (request) => {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    const user = await User.findOne({ email });
    if (!user) {
        return NextResponse.json({ error: "User does not exist" }, { status: 400 });
    }
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
        return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }
    //create token data
    const tokenData = {
        id: user._id,
        username: user.username,
        email: user.email,
    };
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "2m" });
    const response = NextResponse.json({ message: "Login successful", token, success: true }, { status: 200 });
    response.cookies.set("token", token, { httpOnly: true });
    return response;
};

