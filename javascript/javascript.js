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

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
          <li class="tasksList__item${
            task.done ? " tasksList__item--done" : ""
          }">
          ${task.content}
          </li>
          `;
    }
    document.querySelector(".js-taskList").innerHTML = htmlString;
  };

  const addNewTask = (newTaskItem) => {
    tasks.push({
      content: newTaskItem,
    });
    render();
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
