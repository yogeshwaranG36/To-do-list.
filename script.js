const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector("#wrapper input");
const tasksCountainer = document.querySelector("#tasks");
const error = document.querySelector("#error");
const countValue = document.querySelector(".count-value");
let taskCount = 0;
const displayCount = (taskCount) => {
    countValue.innerHTML = taskCount;
}
const addTask = () => {
    const taskName = newTaskInput.value.trim();
    error.style.display = "none";
    
    if (!taskName) {
        setTimeout(() => {
            error.style.display = "block";
        }, 100);
        return;
    }
    const task = `<div class="task">
    <span class="taskname">${taskName}</span>
    <button class="edit" type="submit">
    <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button class="delete" type="submit">
    <i class="fa-solid fa-trash-can"></i>
    </button>
    </div>`;
    tasksCountainer.insertAdjacentHTML("beforeend", task);
    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((button) => {
        button.onclick = () => {
            button.parentNode.remove();
            taskCount = taskCount - 1;
            displayCount(taskCount);
        };
    });
    const editButtons = document.querySelectorAll(".edit");
    editButtons.forEach((editBtn) => {
        editBtn.onclick = (e) => {
            let targetElement = e.target;
            if (!(e.target.className == "edit")) {
                targetElement = e.target.parentElement;
            }
            newTaskInput.value = targetElement.previousElementSibling?.innerHTML;
            targetElement.parentNode.remove();
            taskCount -= 1;
            displayCount(taskCount);
        };
    });
    const taskCheck = document.querySelectorAll("task-check");
    taskCheck.forEach((checkBox) => {
        checkBox.onChange = () => {
            checkBox.nextElementSibling.classList.toggle("completed");
            if (checkBox.checked) {
                taskCount -= 1;
            }
            else {
                taskCount += 1;
            }
            displayCount(taskCount);
        };
    });
    taskCount += 1;
    displayCount(taskCount);
    newTaskInput.value = "";
};
addBtn.addEventListener("click", addTask);
window.onload = () => {
    taskCount = 0;
    displayCount(taskCount);
    newTaskInput.value = "";
}

let d = new Date();
d = d.toString().split(" ");
d = d[1] + " " + d[2] + " " + d[3];
document.getElementById("p1").innerHTML = d;
