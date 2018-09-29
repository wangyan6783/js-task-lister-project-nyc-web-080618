document.addEventListener('DOMContentLoaded', () => {
  let appContent = document.querySelector("#app-content");
  let taskForm = document.querySelector("#task-form");
  let lists = document.querySelector("#lists");

  document.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.target.id === "create-list-form") {
      let newListTitle = document.getElementById("new-list-title").value;
      if (allLists.some(list => list.title === newListTitle)) {
        alert("List titles must be unique");
      } else {
        let newList = new List(newListTitle);
        let newTaskForm = new TaskLister;
        taskForm.innerHTML = newTaskForm.render();
        lists.innerHTML += newList.render();
      }
    }

    if (e.target.id === "create-task-form") {
      let listTitle = document.querySelector("#parent-list").value;
      let newDescription = document.querySelector("#new-task-description").value;
      let newPriority = document.querySelector("#new-task-priority").value;
      let targetTasks = allTasks.filter(task => task.listTitle === listTitle);
      if (targetTasks.some(task => task.description === newDescription)) {
        alert("Description must be unique");
      } else {
        let newTask = new Task(listTitle, newDescription, newPriority);
        lists.innerHTML = allLists.map(list => list.render()).join("");
      }
    }
  })

  document.addEventListener("click", (e) => {
    if (e.target.className === "delete-task") {
      let taskDescription = e.target.dataset.taskName;
      let listTitle = e.target.dataset.listTitle;
      allTasks = allTasks.filter(task => task.listTitle !== listTitle || task.description !== taskDescription);
      lists.innerHTML = allLists.map(list => list.render()).join("");
    }

    if (e.target.className === "delete-list") {
      let listTitle = e.target.dataset.title;
      allLists = allLists.filter(list => list.title !== listTitle);
      allTasks = allTasks.filter(task => task.listTitle !== listTitle);
      lists.innerHTML = allLists.map(list => list.render()).join("");
      if (allLists.length === 0) {
        appContent.innerHTML = "";
      }
    }
  })
});
