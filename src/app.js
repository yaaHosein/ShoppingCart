export class App {
  constructor() {
    this.toDos = [];
    this.toDoDescription = "";
  }

  addToDo() {
    this.toDos.push({ description: this.toDoDescription });
    this.toDoDescription = "";
  }

  removeToDo(toDo) {
    let index = this.toDos.indexOf(toDo);
    this.toDos.splice(index);
  }
}