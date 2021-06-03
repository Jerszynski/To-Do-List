{
  const tasks = [];

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
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

  const bindEvents = () => {
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
        `<button class="tasksList__button--done">✔</button>`;
      });
    });
  };

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
          <button class="tasksList__button--done js-done">${
            task.done ? "&check;" : ""
          }</button>
          <li class="tasksList__item${
            task.done ? " tasksList__item--done" : ""
          }">
          ${task.content}
          </li>
          <button class="tasksList__button--delete js-trash">&#9747;</button>
          `;
    }
    document.querySelector(".js-taskList").innerHTML = htmlString;

    bindEvents();
  };

  const clearInput = (newTaskField) => {
    newTaskField.value = "";
    newTaskField.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskField = document.querySelector(".js-input");
    const newTaskContent = document.querySelector(".js-input").value.trim();

    if (newTaskContent === "") {
      return;
    }

    addNewTask(newTaskContent);
    clearInput(newTaskField);
  };

  const init = () => {
    render();

    const newTaskField__form = document.querySelector(".js-form");

    newTaskField__form.addEventListener("submit", onFormSubmit);
  };

  init();
}
