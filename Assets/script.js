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

const quoteApp = document.getElementById('quoteApp');

// Task list variables:
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskBtn = document.getElementById('taskBtn');
const toDoField = document.getElementById('toDoField');

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