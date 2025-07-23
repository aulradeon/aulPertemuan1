import { getBlogByID } from "@/app/lib/datafetch";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    {params} : { params: Promise<{ id: string }> }
) {
    const { id } = await params
    const data = await getBlogByID(id)
    return NextResponse.json(data)
}