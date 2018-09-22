class Task {
  constructor(listTitle, description, priority){
    this.listTitle = listTitle;
    this.description = description;
    this.priority = priority;
    allData[listTitle].push(this);
  }
  render(){
    return `
        Task: ${this.description}
        <button data-list-title="${this.listTitle}" data-task-name="${this.description}" class="delete-task">
            X
        </button>
        <br>
        Priority: ${this.priority}
    `
  }
}
