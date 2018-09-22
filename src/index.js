document.addEventListener('DOMContentLoaded', () => {
  let appContent = document.getElementById("app-content");
  let taskForm = document.createElement("div");
  appContent.appendChild(taskForm);
  let lists = document.createElement("div");
  lists.id = "lists";
  appContent.appendChild(lists);

  let newListForm = document.getElementById("create-list-form");

  newListForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newListTitle = document.getElementById("new-list-title").value;
    if (allData[newListTitle]) {
      alert("List titles must be unique");
    } else {
      let newList = new List(newListTitle);
      let eachList = document.createElement("div");
      eachList.innerHTML = newList.render();
      eachList.id = newList.title;
      let listButton = eachList.querySelector("h2 button");
      listButton.addEventListener("click", () => {
        delete allData[newListTitle];
        eachList.remove();
        if (Object.keys(allData).length === 0){
          taskForm.innerHTML = "";
        }
      })
      lists.appendChild(eachList);

      let taskLister = new TaskLister();
      taskForm.innerHTML = taskLister.render();

      Object.keys(allData).forEach((listTitle) => {
        let option = document.createElement("option");
        option.value = listTitle;
        option.innerHTML = listTitle;
        let select = document.getElementById("parent-list");
        select.appendChild(option);
      })
    }

    let newTaskForm = document.getElementById("create-task-form");
    newTaskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let taskListTitle = document.querySelector("#parent-list").value;
      let taskDescription = document.querySelector("#new-task-description").value;
      let taskPriority = document.querySelector("#new-task-priority").value;
      if (allData[taskListTitle].some((task) => task.description === taskDescription)){
        alert("Task descriptions must be unique")
      } else {
        let newTask = new Task(taskListTitle, taskDescription, taskPriority);
        let eachTask = document.createElement("li");
        eachTask.innerHTML = newTask.render();
        let taskButton = eachTask.querySelector("button");
        taskButton.addEventListener("click", () => {
          eachTask.remove();
          allData[taskListTitle] = allData[taskListTitle].filter((task) => task.description !== taskDescription);
        });
        let ulList = document.querySelector(`#${taskListTitle} ul`);
        ulList.appendChild(eachTask);
      }
    })
  })
});
