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
    // for (let task of tasks) {
        // console.log("removing task " + task.value);
        // task.remove();
    // };
    console.log("Earth scorched.");
};
resetBtn.addEventListener("click", reset)

const yellow = document.querySelector('.yellow-background');
console.log('taskBtn: ' + taskBtn);

taskBtn.addEventListener("click", () => {
    console.log("Button clicked!");

    // get the user's text
    // const input = document.querySelector('input');
    // console.log('input: ' + input);
    // console.log('input.value: ' + input.value);
    console.log('taskTxt: ' + taskTxt);
    console.log('taskTxt.value: ' + taskTxt.value);
    
    if (taskTxt.value) {
        // input received
        // create the list item
        const li = document.createElement("li");
        // populate the line item
        li.textContent = taskTxt.value;
        console.log(li);
        // append the li to the ul
        document.querySelector('ul').appendChild(li);
        taskTxt.value = "";
    } else {
        alert("You can't add Nothing to the list.");
    }
});

const changeColor = (li) => {
    console.log(li)
}
