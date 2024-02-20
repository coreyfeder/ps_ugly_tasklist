/*
 *  Describe
 */

console.log("Script running.")

const resetBtn = document.getElementById("reset-btn");
const taskBtn = document.getElementById("add-task-btn");
const taskTxt = document.getElementById("task-txt");

const reset = () => {
    console.log("Reset button clicked!");
    const tasklist = document.getElementById("tasklist");
    const tasks = tasklist.children;
    console.log('tasks: ' + tasks);
    while (tasklist.childElementCount > 0) {
        tasklist.firstChild.remove();
    }
    console.log("Earth scorched.");
};
resetBtn.addEventListener("click", reset)

// const yellow = document.querySelector('.yellow-background');
// console.log('taskBtn: ' + taskBtn);

function addTask() {
    console.log('taskTxt: ' + taskTxt);
    console.log('taskTxt.value: ' + taskTxt.value);
    
    if (taskTxt.value) {
        const li = document.createElement("li");
        li.textContent = taskTxt.value;
        changeColor(li);
        console.log(li);
        document.querySelector('ul').appendChild(li);
        taskTxt.value = "";
    } else {
        alert("You can't add Nothing to the list.");
    }
}

taskBtn.addEventListener("click", () => {
    console.log("Button clicked!");
    addTask();
});

// poor user experience when you can't hit Enter after typing.
taskTxt.addEventListener("keypress", (event) => {
    console.log("Key pressed...");
    if (event.key === "Enter") {
        console.log("Enter! We're off!");
        // Cancel the default action, if needed
        event.preventDefault();
        addTask();
    };
});

const changeColor = (elem) => {
    let newColor = 'rgb('
    + Math.floor(Math.random() * 256)
    + ','
    + Math.floor(Math.random() * 256)
    + ','
    + Math.floor(Math.random() * 256)
    + ')';
    elem.style.color = newColor;
    console.log(newColor);
}
