// Code retrieved from Rapid API
const from   = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd1aaec90b1mshff75ed502f8c1bap10c786jsnb6444f2aa8f8',
		'X-RapidAPI-Host': 'joke110.p.rapidapi.com'
	}
};

// Define the varialbles
let setup=document.getElementById("setup")
console.log(setup)
let punchline=document.getElementById("punchline")
console.log(punchline)
// Fonction that will fetch data from the API 
function generatejokes() {
    fetch('https://joke110.p.rapidapi.com/random_joke', from)
	.then(response => response.json())
	.then(data => { 
        console.log(data)
        setup.innerHTML= data.setup;
        punchline.textContent = "- " + data.punchline;
    } )

   
    
	.catch(err => console.error(err));
}
const jokeAPI = document.getElementById('Jokebutton');
// Html location for the data found
generatejokes()
// Event that  that generate new jokes by click
jokeAPI.addEventListener("click",generatejokes )