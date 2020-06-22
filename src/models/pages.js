import uuid from '../helpers/uuid';

class Page {
  constructor(title) {
    this.id = uuid();
    this.title = title;
    this.todos = [
      {
        id: '95aa5bd2-a8b4-4200-a142-123db865fd29',
        todo: '1',
        dueDate: '2020-06-25T07:37:13.049Z',
        status: 'Work in progress',
        owners: [],
        priority: '',
      },
      {
        id: '95aa5bd2-a8b4-4200-a142-123db865fd39',
        todo: '2',
        dueDate: '2020-06-25T07:37:13.049Z',
        status: 'sdad',
        owners: [],
        priority: '',
      },
      {
        id: '95aa5bd2-a8b4-4200-a142-123db865fd259',
        todo: '3',
        dueDate: '2020-06-25T07:37:13.049Z',
        status: '',
        owners: [],
        priority: '',
      },
    ];
    this.owners = [];
    this.status = [
      'Work In progress',
      'Done',
      'Critical',
      'Stuck',
      'Waiting for Review',
    ];
    this.priority = ['Urgent', 'Medium', 'Low', 'High'];
    this.todoHeaders = [
      'Things To do',
      'Owner',
      'Status',
      'Due date',
      'Priority',
    ];
  }
}

export default Page;
