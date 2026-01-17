import prisma from "@/app/lib/db"
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server"
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
    const data = await req.json();
    const session = await getServerSession(authOptions);

    const response = await prisma.todos.create({
        data: {
            title: data.title,
            description: data.description,
            done: false,
            userId: parseInt(session?.user?.id)
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