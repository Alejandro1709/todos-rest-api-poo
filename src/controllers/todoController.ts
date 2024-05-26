import { Request, Response } from "express";
import TodoService from "../services/todoServices";

class TodoController {
  private todoService: TodoService;

  constructor() {
    this.todoService = new TodoService();
    this.getTodos = this.getTodos.bind(this);
    this.getTodo = this.getTodo.bind(this);
    this.createTodo = this.createTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  public async getTodos(_req: Request, res: Response) {
    const todos = await this.todoService.getTodos();
    res.status(200).json(todos);
  }

  public async getTodo(req: Request, res: Response) {
    const { id } = req.params;

    const todo = await this.todoService.getTodo(id);

    if (!todo) {
      throw new Error("Todo Not Found");
    }

    res.status(200).json(todo);
  }

  public async createTodo(req: Request, res: Response) {
    const { text } = req.body;

    const todo = await this.todoService.createTodo(text);

    res.status(201).json(todo);
  }

  public async completeTodo(req: Request, res: Response) {
    const { id } = req.params;

    const todo = await this.todoService.completeTodo(id);

    res.status(200).json({ message: "Todo Completed" });
  }

  public async editTodo(req: Request, res: Response) {
    const { id } = req.params;
    const { text } = req.body;

    const updatedTodo = await this.todoService.editTodo(id, text);

    res.status(200).json(updatedTodo);
  }

  public async deleteTodo(req: Request, res: Response) {
    const { id } = req.params;

    const todos = await this.todoService.deleteTodo(id);

    res.status(200).json(todos);
  }
}

export default new TodoController();
