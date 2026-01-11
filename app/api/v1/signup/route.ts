import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/db";

export async function POST(req: NextRequest) {
    const data = await req.json();

    
    await prisma.user.create({
        data: {
            name: data.name,
            username: data.username,
            password: data.password

        }
    })
    return (
        NextResponse.json({
            msg: "User SignedUp!!"
        })
    )
}