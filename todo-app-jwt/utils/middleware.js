import { NextResponse } from "next/server";

export async function middleware(request) {

if (!token){
    const token = request.headers.get('Authorization')?.split('')[1];
},
}