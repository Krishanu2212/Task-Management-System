import prisma from "@/app/lib/db"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const data = await req.json();

    const response = await prisma.user.findFirst({
        where: {
            username: data.username,
            password: data.password
        },
    })

    if(response) {
        return (
            NextResponse.json({
                id: response.id
            })
        )
    }
    return (
        NextResponse.json({
            msg: "user not found"
        })
    )

}