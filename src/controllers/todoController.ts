import { Request, Response } from "express";
import TodoService from "../services/todoServices";

class TodoController {
  private todoService: TodoService;

  constructor() {
    this.todoService = new TodoService();
    this.getTodos = this.getTodos.bind(this);
    this.getTodo = this.getTodo.bind(this);
  }

  public getTodos(_req: Request, res: Response): void {
    const todos = this.todoService.getTodos();
    res.status(200).json(todos);
  }

  public getTodo(req: Request, res: Response): void {
    const { id } = req.params;

    const todo = this.todoService.getTodo(+id);

    if (!todo) {
      throw new Error("Todo Not Found");
    }

    res.status(200).json(todo);
  }
}

export default new TodoController();
