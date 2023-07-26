function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.className = "task";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onchange = toggleTaskCompletion;

  const label = document.createElement("label");
  label.textContent = taskText;

  const removeButton = document.createElement("button");
  removeButton.textContent = "Completed";
  removeButton.className = "remove-button";
  removeButton.onclick = removeTask;

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(removeButton);

  taskList.appendChild(li);

  input.value = "";
}

function removeTask(event) {
  const taskList = document.getElementById("taskList");
  const li = event.target.parentElement;
  taskList.removeChild(li);
}

function toggleTaskCompletion(event) {
  const label = event.target.parentElement.querySelector("label");
  label.classList.toggle("completed");
}

document
  .getElementById("taskInput")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
