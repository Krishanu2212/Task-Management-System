import prisma from "@/app/lib/db"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const data = await req.json();

    const response = await prisma.todos.create({
        data: {
            title: data.title,
            description: data.description,
            done: false,
            userId: parseInt(data.userId)
        },
    })

    if(response) {
        return (
            NextResponse.json({
                msg: "todo created"
            })
        )
    }
    return (
        NextResponse.json({
            msg: "user not found"
        })
    )

}