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

