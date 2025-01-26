
 const todoInput = document.getElementById("todoInput");
 const addBtn = document.getElementById("addBtn");
 const todoList = document.getElementById("todoList");

 // Add Task
 addBtn.addEventListener("click", () => {
  const task = todoInput.value.trim();
  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  // Create List Item
  const listItem = document.createElement("li");

  // Task Content
  const taskContent = document.createElement("span");
  taskContent.textContent = task;

  // Task Buttons Container
  const taskButtons = document.createElement("div");
  taskButtons.classList.add("task-buttons");

  // Quantity Counter
  let quantity = 1;
  const quantityText = document.createElement("span");
  quantityText.textContent = quantity;
  quantityText.classList.add("quantity");

  // Increment Button
  const incrementBtn = document.createElement("button");
  incrementBtn.textContent = "+";
  incrementBtn.classList.add("add-btn");
  incrementBtn.addEventListener("click", () => {
    quantity++;
    quantityText.textContent = quantity;
  });

  // Decrement Button
  const decrementBtn = document.createElement("button");
  decrementBtn.textContent = "-";
  decrementBtn.classList.add("del-btn");
  decrementBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantityText.textContent = quantity;
    }
  });

  // Save Button
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.classList.add("save-btn");
  saveBtn.addEventListener("click", () => {
    alert(`Saved task: "${task}" with quantity: ${quantity}`);
  });

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("del-btn");
  deleteBtn.addEventListener("click", () => {
    todoList.removeChild(listItem);
  });

  // Append Elements
  taskButtons.appendChild(decrementBtn);
  taskButtons.appendChild(quantityText);
  taskButtons.appendChild(incrementBtn);
  taskButtons.appendChild(saveBtn);
  taskButtons.appendChild(deleteBtn);

  listItem.appendChild(taskContent);
  listItem.appendChild(taskButtons);

  todoList.appendChild(listItem);

  // Clear Input
  todoInput.value = "";
 });

 // Add Task with Enter Key
 todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
 });
