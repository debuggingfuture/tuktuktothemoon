// This endpoint should create a charge and return the response.
import { NextResponse } from "next/server";

// Trusted version (deposit to cc account)

const COINBASE_API_KEY = process.env.COINBASE_CC_API_KEY || '';

export async function POST(request: Request) {

    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CC-Api-Key': process.env.COINBASE_API_KEY // Replace this with your Coinbase Commerce API Key
        }
      };
     
      const response = await fetch('https://api.commerce.coinbase.com/charges', options);
   
      
    const body = await request.json();

    return NextResponse.json(
        { success: false, error: "Failed to fetch bucket details" },
        { status: 500 }
      );
}

