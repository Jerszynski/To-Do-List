{
  const tasks = [
    {
      content: "First task",
      done: false,
    },
    {
      content: "Second task",
      done: true,
    },
  ];

  const addNewTask = (newTaskItem) => {
    tasks.push({
      content: newTaskItem,
    });
    render();
  };

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  };

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
          <button class="tasksList__button--done js-done">✔</button>
          <li class="tasksList__item${
            task.done ? " tasksList__item--done" : ""
          }">
          ${task.content}
          </li>
          <button class="tasksList__button--delete js-trash">Trash</button>
          `;
    }
    document.querySelector(".js-taskList").innerHTML = htmlString;

    const removeButtons = document.querySelectorAll(".js-trash");

    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });

    const toggleDoneButtons = document.querySelectorAll(".js-done");

    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskItem = document.querySelector(".js-input").value.trim();

    if (newTaskItem === "") {
      return;
    }

    addNewTask(newTaskItem);
  };

  const init = () => {
    render();

    const newTaskField__form = document.querySelector(".js-form");

    newTaskField__form.addEventListener("submit", onFormSubmit);
  };

  init();
}
