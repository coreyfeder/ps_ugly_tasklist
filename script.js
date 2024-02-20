/*
 *  Describe
 */

console.log("Script running.")

const resetBtn = document.getElementById("reset-btn");

const reset = () => {
    console.log("Reset button clicked! Scorch the earth!");
};

const taskButton = document.querySelector("#add-task");
const yellow = document.querySelector('.yellow-background');
console.log(taskButton);

taskButton.addEventListener("click", () => {
    console.log("Button clicked!");

    // get the user's text
    const input = document.querySelector('input');
    console.log(input);
    console.log(input.value);  // the actual text
    
    if (input.value) {
        // input received
        // create the list item
        const li = document.createElement("li");
        // populate the line item
        li.textContent = input.value;
        console.log(li);
        // append the li to the ul
        document.querySelector('ul').appendChild(li);
        input.textContent = "";
    } else {
        alert("You can't add Nothing to the list.");
    }
});

const changeColor = (li) => {
    console.log(li)
}
