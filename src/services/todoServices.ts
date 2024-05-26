import Todo from "../models/todo";

export default class TodoService {
  private todos: Todo[] = [];

  public getTodos(): Todo[] {
    return this.todos;
  }

  public getTodo(id: number): Todo | undefined {
    return this.todos.find((t) => t.id === id);
  }

  public createTodo(id: number, text: string): Todo {
    const newTodo: Todo = {
      id,
      text,
      completed: false,
    };

    this.todos.push(newTodo);

    return newTodo;
  }

  public completeTodo(id: number): void {
    const updatedTodos: Todo[] = this.todos.map((t) =>
      t.id === id ? { ...t, completed: true } : { ...this.todos }
    );

    this.todos = updatedTodos;
  }

  public editTodo(id: number, text: string): Todo | undefined {
    const todo = this.todos.find((t) => t.id === id);
    todo?.text = text;

    return todo;
  }

  public deleteTodo(id: number): Todo[] {
    const filtered = this.todos.filter((t) => t.id !== id);
    this.todos = filtered;

    return filtered;
  }
}
