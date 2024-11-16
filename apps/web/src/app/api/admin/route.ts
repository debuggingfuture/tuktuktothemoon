import { NextResponse } from "next/server";
import { setTextRecord } from '@ensdomains/ensjs/wallet';

import { batch, getName   } from '@ensdomains/ensjs/public';


export async function POST(request: Request) {

    // admin to accept contribution

    const body = await request.json();
    

    return NextResponse.json(
        { success: false, error: "Failed" },
        { status: 500 }
      );
}
