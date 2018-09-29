let allLists = [];
class List {
  constructor(title) {
    this.title = title;
    allLists.push(this);
  }

  render() {
    let targetTasks = allTasks.filter(task => task.listTitle === this.title)
    let renderTasks = targetTasks.map(task => {
      return `
        <li>
          Task: ${task.description}
          <button data-list-title=${this.title} data-task-name=${task.description} class="delete-task">
              X
          </button>
          <br>
          Priority: ${task.priority}
        </li>
      `
    }).join("")

    return `
      <div>
        <h2>${this.title}
          <button data-title=${this.title} class="delete-list">
            X
          </button>
        </h2>
        <ul>
        ${renderTasks}
        </ul>
      </div>
    `
  }
}
