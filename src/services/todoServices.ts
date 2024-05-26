import { PrismaClient } from "@prisma/client";
import Todo from "../models/todo";

export default class TodoService {
  private todos: Todo[] = [];
  private prisma: PrismaClient = new PrismaClient();

  public async getTodos() {
    const todos = await this.prisma.todo.findMany({
      where: {
        completed: false,
      },
    });

    return todos;
  }

  public async getTodo(id: string) {
    const todo = await this.prisma.todo.findUnique({
      where: { id },
    });

    return todo;
  }

  public async createTodo(text: string) {
    const todo = await this.prisma.todo.create({
      data: {
        text: text,
      },
    });

    return todo;
  }

  public async completeTodo(id: string) {
    const updatedTodo = this.prisma.todo.update({
      where: { id },
      data: {
        completed: true,
      },
    });

    return updatedTodo;
  }

  public async editTodo(id: string, text: string) {
    const todo = this.prisma.todo.update({
      where: { id },
      data: {
        text,
      },
    });

    return todo;
  }

  public async deleteTodo(id: string) {
    const todo = this.prisma.todo.delete({
      where: { id },
    });

    return todo;
  }
}
