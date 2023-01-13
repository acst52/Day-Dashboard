// Let's get the data from the Quotes API:
// Quote API variables:
const API_KEY = '1aad9b257amsh8cea256130839a7p1e5326jsn1feba12d1c03'
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'quotes15.p.rapidapi.com'
        }
    };
const API = document.getElementById ("API1")

const quoteApp = document.getElementById('quote');

// Task list variables:
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskBtn = document.getElementById('taskBtn');
const toDoField = document.getElementById('toDoField');

// Let's generate a random quote + author:
function generateRandomQuote() {
    quoteApp.innerHTML=""
    fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
        .then(response => response.json())
        .then(data => {
            console.log(data); // use the data returned from the API to update your page:
    const quoteText = document.createElement("p");
        quoteText.textContent = data.content;
        quoteApp.append(quoteText);
    const author = document.createElement("h4");
        author.textContent = "- " + data.originator.name;
        quoteApp.append(author);
            console.log(quoteText, author);})  // data is locally scoped inside .then fcn so have to be inside .then to use data
}
API1.addEventListener("click",generateRandomQuote )
// Let's call the previously defined fcn:
generateRandomQuote();

// Now let's dynamically create our task input fields and checkable-list & store locally:
function createTask(event) {
    event.preventDefault();  // prevented page refresh to fix bug of task immediately disappearing
    const task = taskInput.value;
            console.log(task);
    const label = document.createElement("label");
        label.setAttribute("for", "checkbox-nested");
    const labelInput = document.createElement("input");
        labelInput.setAttribute("type", "checkbox");
        labelInput.setAttribute("name", task);
        labelInput.checked = false;
        label.textContent = taskInput.value + " ";
        label.append(labelInput);
        toDoField.append(label);
            console.log(label);
    // want tasks to generate on separate lines / vertically, not horiz, every time the fcn runs i.e. every time a task is added
    const lineBr = document.createElement("br");
        toDoField.append(lineBr);
    // left to do in this fcn: save tasks + checked-or-not to local storage - not working
        // PRoblem may be that label is being added as a KEY
    localStorage.setItem("task", JSON.stringify(task));
    console.log(task);  // every time you add a new task, its pushed to a task array (name + checked status) - update that and set item again
    localStorage.setItem("isChecked", JSON.stringify(labelInput.checked));
    // if page is reloaded/refreshed, run refreshTasks fcn, otherwise stop here???

// CONFETTI CODE:
    const checkbox = labelInput;
    const confettiContainer = document.getElementById("confetti-container");
    const colors = ["red", "purple", "pink", "blue", "green", "yellow", "orange"];

    checkbox.addEventListener("change", function(){
        if (this.checked) {
            for (let i = 0; i < 100; i++) {
                const confetti = document.createElement("div");
                confetti.classList.add("confetti");
                confettiContainer.appendChild(confetti);

                // make confetti a random color from the color array:
                confetti.classList.add(colors[Math.floor(Math.random()*colors.length)]);
                confettiContainer.appendChild(confetti);
                
                // animate confetti falling:
                confetti.style.left = Math.random() * 100 + "vw";
                confetti.style.animation = `fall ${Math.random() + 1}s ease-in-out ${Math.random() * 3}s forwards`;
            }
        }
    })
// END OF CONFETTI CODE
};
