// ********** MODAL CODE START **********

// Get the modal
var modal = document.getElementById("modal1");

// Get the button that opens the modal
var modalBtn = document.getElementById("modalBtn");

// Get the span X element that closes the modal
var span = document.getElementsByClassName("closeModal")[0];

// When the user clicks on the loveCalc button, open modal
modalBtn.addEventListener("click", function(){
    modal.style.display = "block";
    document.getElementById("response").textContent = "";
});
    
// When the user clicks on span X, close modal
span.addEventListener("click", function(){
    modal.style.display = "none";
});
    
// When user clicks anywhere outside of modal, close it
window.addEventListener("click", function(event){
      if (event.target == modal) {
        modal.style.display = "none";
      }
});

// ********** MODAL CODE END **********


// ********** QUOTE API CODE START **********

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

// let's grab the html div that will contain the quote API:
const quoteApp = document.getElementById('quoteApp');

// Let's generate a random quote + author:
function generateRandomQuote() {
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

// Let's call the previously defined fcn:
generateRandomQuote();

// ********** QUOTE API CODE END **********


// ********** TASK LIST CODE START **********

// Now let's dynamically create our task input fields and checkable-list & store locally:

// Task list variables:
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskBtn = document.getElementById('taskBtn');
const toDoField = document.getElementById('toDoField');

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
    // now let's save an array of user tasks to local storage:
     let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    // add new tasks to array:
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

// CONFETTI CODE:
    const checkbox = labelInput;
    const confettiContainer = document.getElementById("confetti-container");
    const colors = ["red", "purple", "pink", "blue", "green", "yellow", "orange"];

    checkbox.addEventListener("change", function(){
        if (this.checked) {
            for (let i = 0; i < 400; i++) {
                const confetti = document.createElement("div");
                confetti.classList.add("confetti");
                confettiContainer.appendChild(confetti);

                // make confetti a random color from the color array; see CSS for colors:
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

// Gotta add an event listener to the Create Task button:
taskBtn.addEventListener("click", createTask);

// ********** RENDER TASKS FROM LOCAL STORAGE START **********

window.onload = function() {
    // get tasks out of local storage:
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    // render them on the page:
    tasks.forEach(function(task) {
        const pastTask = document.createElement("div");
        pastTask.innerText = task;
        toDoField.append(pastTask);
    })
};

// ********** RENDER TASKS FROM LOCAL STORAGE END **********

// ********** RICH PERSON CODE START **********

let tableEl = document.querySelector('.table');


//let toggleButton = document.querySelector('.toggle-btn');
let getresultEl = document.querySelector ('.getresult');
//tableEl.style.display = "none";
getresultEl.addEventListener('click', function(){
 
  window.open("./rich.html",'_blank')

});
/*toggleButton.addEventListener("click", function(){

if (tableEl.style.display === "none") {
   
  tableEl.style.display = "table";
}else {
 tableEl.style.display = "none";
  }
 }); */
