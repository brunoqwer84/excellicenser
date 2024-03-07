/*import { NextResponse } from "next/server";

export async function GET() {
return NextResponse.json({
    id: 1,
    name: "jacare",
    licenca: "invalida"

});

}*/
import {sql} from '@vercel/postgres';
import { NextResponse} from 'next/server';

export async function GET(request:Request) {
    try {
        const result = 
            await sql `SELECT * FROM LICENCAS`;

            return NextResponse.json({result}, {status: 200});
    } catch (error){
      return NextResponse.json({error}, {status: 500});
    }
}