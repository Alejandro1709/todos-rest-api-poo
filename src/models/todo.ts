export default class Todo {
  public id: number;
  public text: string;
  public completed: boolean;

  constructor(id: number, text: string, completed: boolean = false) {
    this.id = id;
    this.text = text;
    this.completed = completed;
  }
}
