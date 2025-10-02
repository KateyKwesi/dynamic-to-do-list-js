document.addEventListener(`DOMContentLoaded`, addTask);
const addButton = document.getElementById(`add-task-btn`);
const taskInput = document.getElementById(`task-input`);
const taskList = document.getElementById(`task-list`);

function addTask() {
  let taskText = taskInput.value.trim();
  taskText === `` ? alert(`Please enter a task`) : null;

  let li = document.createElement(`li`);
  li.textContent = taskText;
  let btnRemove = document.createElement(`button`);
  btnRemove.textContent = `Remove`;
  btnRemove.classList.add = `remove-btn`;
  btnRemove.addEventListener(`click`, () => {
    li.remove();
  });
  li.appendChild(btnRemove);
  taskList.appendChild(li);
  taskInput.value = ``;
}

addButton.addEventListener(`click`, addTask);

taskInput.addEventListener(`keypress`, (event) => {
  if (event.key === `Enter`) {
    addTask();
  }
});
