import { createBucket } from "@/app/buckets/akave";
import { NextResponse } from "next/server";

const AKAVE_BACKEND_URL = process.env.AKAVE_BACKEND_URL;
// List all buckets
export async function POST(request: Request) {

    const body = await request.json();

    return NextResponse.json(
        { success: false, error: "Failed to fetch bucket details" },
        { status: 500 }
      );
}
