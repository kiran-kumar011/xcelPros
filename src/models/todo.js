import uuid from '../helpers/uuid';

class Todo {
  constructor({ todo, dueDay = 3 }) {
    this.id = uuid();
    this.todo = todo;
    this.dueDate = new Date(this.addDueDate(dueDay));
    this.status = '';
    this.owners = [];
    this.priority = '';
  }

  addDueDate(days) {
    let now = new Date();
    return now.setDate(now.getDate() + days);
  }
}

export default Todo;
