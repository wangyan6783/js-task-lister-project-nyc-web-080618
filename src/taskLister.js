class TaskLister {
  render() {
    return `
      <form id="create-task-form">
        <label for="parent-list">Select List:</label>
        <select id="parent-list">

        </select>

        <label for="new-task-description">Task description:</label>
        <input required type="text" id="new-task-description" placeholder="description">

        <label for="new-task-priority">Priority level:</label>
        <input type="text" id="new-task-priority" placeholder="priority">
        <input type="submit" value="Create New Task">
      </form>
   `;
  }
}
