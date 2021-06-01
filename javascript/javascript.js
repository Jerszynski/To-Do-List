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
          <li>
          ${task.content}
          </li>
          `;
    }
    document.querySelector(".js-taskList").innerHTML = htmlString;
  };

  const init = () => {
    render();
  };

  init();
}
