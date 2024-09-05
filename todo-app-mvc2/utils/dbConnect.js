import mongoose from "mongoose";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl){
    throw new Error("DataBase não listado no .env.local")
}

const connectMongo = async()=>{
    if(mongoose.connection.readyState>0){
        return;
    }else{
        mongoose.connection(databaseUrl)
        .then("MongoDB Conectado")
        .cath(err=>console.error(err));
    }
}

export default connectMongo;