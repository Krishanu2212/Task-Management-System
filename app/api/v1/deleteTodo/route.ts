import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
    const data = await req.json();
    console.log(data);
    const response = await prisma.todos.delete({
        where: {
            id: data.id
        }
    })

    return NextResponse.json({
        msg: "Todo Deleted"
    })
}