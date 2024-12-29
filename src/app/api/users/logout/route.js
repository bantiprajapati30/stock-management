import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
connect();
export async function GET(request) {
    try {
        const response = NextResponse.json({ message: "Logout successful", success: true }, { status: 200 });
        response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
        return response;
    } catch (error) {
        return NextResponse.json({ message: "Logout failed", success: false }, { status: 500 });
    }
}
