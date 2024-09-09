//CRUD

import Todo from '@/models/Todo';
import connectMongo from '@/utils/dbConnect';

//carregar Todos
export const getTodos = async (req, res) => {
    await connectMongo();
    try {
       const todos = await Todo.find({UserId: req.user.id});
       res.status(200).json({todos});
    }catch (error) {
        res.status(500).json({ error});
    }
}

//criar tarefa
export const addTodo =  async (req, res) => {
    const { title } = req.body;
    await connectMongo();
    try {
        const newTodo = new Todo ({
            title,
            userId: req.user._id, // associa a tarefa ao usuário logado
        });
        await newTodo.save();
        res.status(201).json({ todo : newTodo });
    } catch (error) {
        res.status(500).json({ message : 'Erro ao adicionar tarefa'});
    }
};

//Atualizar Tarefa
export const updateTodo = async (req, res) => {
    const {id} = req.query;
    const data = req.body;
    await connectMongo();

    try {
        const updateTodo = await Todo.findOneUpdate(
            {_id: id, userId: req.user._id},
            {data},
            {new: true }
        );
        if (!updateTodo) return res.status(404).json({
            message : 'tarefa não encontrada' });
        res.status(200).json({ todo: updateTodo });    
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar tarefa'});
    }
};

// delete Tarefa
export const deleteTodo = async (req, res) => {
    const { id } = req.query;
    await connectMongo();


    try {
        const deletedTodo = await Todo.findOneAndDelete({
            _id: id, userId: req.user.userId
        });
        if (!deletedTodo) return res.status(404).json({
            message: 'Tarefa não encontrada'
        });
        res.status(200).json({
            message: 'Tarefa deletada com sucesso'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Erro ao deletar tarefa'
        });
    }
};
