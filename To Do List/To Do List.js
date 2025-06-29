let addbtn = document.querySelector("#add");
let input = document.querySelector("input");
let taskList = document.createElement("ul");
document.body.appendChild(taskList);

addbtn.addEventListener("click", () => {
  let taskText = input.value.trim();
  
  if (taskText !== "") {
    let ListItem = document.createElement("li");
    ListItem.style.display = "flex";
    ListItem.style.alignItems = "center";
    ListItem.style.justifyContent = "space-between";
    ListItem.style.gap = "10px";

    // Task text element
    let taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.style.flex = "1";

    // Checkbox
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "custom-checkbox";
    checkBox.addEventListener("change", () => {
      taskSpan.style.textDecoration = checkBox.checked ? "line-through" : "none";
    });

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(ListItem);
    });

    // Assemble list item
    ListItem.appendChild(checkBox);
    ListItem.appendChild(taskSpan);
    ListItem.appendChild(deleteBtn);
    taskList.appendChild(ListItem);

    // Clear input
    input.value = "";
  }
});
