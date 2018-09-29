let allTasks = [];
class Task {
  constructor(listTitle, description, priority){
    this.listTitle = listTitle;
    this.description = description;
    this.priority = priority;
    allTasks.push(this);
  }
}
