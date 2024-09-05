import mongoose from "mongoose";

const TodoSchema =  new mongoose.Schema({
    title :{
        type : String,
        required : true
    },
    description: {
        type : String,
        required:false
    },
    status:{
        type : String,
        enum:['"A Fazer',"Fazendo", "Feito"],
        default: "A Fazer"
    }
})

const Todo = mongoose.models.Todo || mongoose.models("Todo", TodoSchema);

export default Todo;