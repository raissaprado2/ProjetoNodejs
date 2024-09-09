import { jwtMiddleware } from "@/utils/middleware";
import { getTodos, addTodo } from "@/controllers/TodoController";

// método GET - listar as tarefas do usu´rio
export async function GET(req, res) {
    return jwtMiddleware(async(req, res) => {
        await getTodos(req, res);
    }) (req, res);
}

// método POST - adicionar uma nova tarefa
export async function POST(req, res) {
    return jwtMiddleware(async(req, res) => {
        await addTodo(req, res);
    }) (req, res);
}

// Método PUT - Atualiza uma tarefa existente
export async function PUT(req, res) {
    return jwtMiddleware(async (req, res) => {
        await updateTodo(req, res);
    })(req, res);
}

// Método DELETE -  Deleta uma tarefa existente
export async function DELETE(req, res) {
    return jwtMiddleware(async (req, res) => {
        await deleteTodo(req, res);
    })(req, res);
}
