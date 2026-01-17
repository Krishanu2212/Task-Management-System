import prisma from "@/app/lib/db"
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server"
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET(req: NextRequest) {
    const session = await getServerSession(authOptions);
    console.log("hi")

    const response = await prisma.todos.findMany({
        where: {
            userId: parseInt(session?.user?.id)
        },
    })

    if(response) {
        return (
            NextResponse.json({
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