import Todo from "../models/todo";

export default class TodoService {
  private todos: Todo[] = [];

  public getTodos(): Todo[] {
    return this.todos;
  }

  public getTodo(id: number): Todo | undefined {
    return this.todos.find((t) => t.id === id);
  }
}
