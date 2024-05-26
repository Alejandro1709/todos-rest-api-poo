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

  public createTodo(req: Request, res: Response) {
    const { id, text } = req.body;

    const todo = this.todoService.createTodo(id, text);

    res.status(201).json(todo);
  }

  public completeTodo(req: Request, res: Response) {
    const { id } = req.params;

    this.todoService.completeTodo(+id);

    res.status(200).json({ message: "Todo Completed" });
  }

  public editTodo(req: Request, res: Response) {
    const { id } = req.params;
    const { text } = req.body;

    const updatedTodo = this.todoService.editTodo(+id, text);

    res.status(200).json(updatedTodo);
  }

  public deleteTodo(req: Request, res: Response) {
    const { id } = req.params;

    const todos = this.todoService.deleteTodo(+id);

    res.status(200).json(todos);
  }
}

export default new TodoController();
