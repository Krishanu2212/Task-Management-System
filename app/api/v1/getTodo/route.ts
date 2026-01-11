import prisma from "@/app/lib/db"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const data = await req.json();

    const response = await prisma.todos.findMany({
        where: {
            userId: parseInt(data.userId)
        },
    })

    if(response) {
        return (
            NextResponse.json({
                msg: "todo created",
                todos: response
            })
        )
    }
    return (
        NextResponse.json({
            msg: "user not found"
        })
    )

}