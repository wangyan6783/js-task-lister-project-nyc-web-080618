class TaskLister {

  render() {
    let options = allLists.map(list => {
      return `
      <option value=${list.title} selected>
        ${list.title}
      </option>`
    })
    
    return `
    <div id="app-content">
      <form id="create-task-form">
        <label for="parent-list">Select List:</label>
        <select id="parent-list">
          ${options}
        </select>

        <label for="new-task-description">Task description:</label>
        <input required type="text" id="new-task-description" placeholder="description">

        <label for="new-task-priority">Priority level:</label>
        <input type="text" id="new-task-priority" placeholder="priority">
        <input type="submit" value="Create New Task">
      </form>
    </div>
   `;
  }
}
