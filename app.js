const push = document.querySelector("#push");
const newTask = document.querySelector("#newTask input");
const task = document.querySelector("#task");

push.addEventListener("click", addItem);

function addItem() {
  if (newTask.value.length == 0) {
    alert("Hello");
  } else {
    task.innerHTML += `
        <div class ="task">
            <span id="taskname">
                ${newTask.value}
            </span>
            <button class="delete">
                <i class="fa fa-trash-alt"></i>
            </button>
        </div>
    `;

    let curentTask = document.querySelectorAll(".delete");
    for (let i = 0; i < curentTask.length; i++) {
      curentTask[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    let tasks = document.querySelectorAll(".task");
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }
    document.querySelector("#newtask input").value = "";
  }
}
