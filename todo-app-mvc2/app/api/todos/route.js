//GET e POST
import {getTodos, createTodos} from '@/controllers'
import {NextResponse } from "next/server";

//GET
export async function GET(){
    try{
        const todos = await getTodos();
        return NextResponse.json({
            success:true,
            data:todos
        });
    }catch(err){
        return NextResponse.json({
            success:false,
            status: 400
        })
    }
}

//POST
