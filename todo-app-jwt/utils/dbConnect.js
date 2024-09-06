import mongoose from "mongoose";
const dataBaseUrl = process.env.DATABASE_URL;

if(!dataBaseUrl) {
    throw new Error("Env não preenchido");
}

const connectMongo = async()=>{
    if (mongoose.connection.readyState>0) {
        return; //já estou conectado
    }else{
        mongoose.connect(dataBaseUrl) //vou fazer a conexão
        .then("MongoDB Conectado")
        .catch(err=>console.error(err));
    }
}

export default connectMongo;