// Define the variables
let idea=document.getElementById("Idea")
console.log(idea)

function generateactivitiesIdea() {

    fetch("https://www.boredapi.com/api/activity/",{
cache: 'reload',
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
        idea.innerHTML= data.activity;
    } )
     
  .catch (err => console.error(err));
	

}

const activitesAPI =document.getElementById("activitybutton")
    // Fetch the data 
    // Display the data found 
  
  // We call the fonction
  generateactivitiesIdea()

    // create a event listner to refresh the activity 
    activitesAPI.addEventListener("click",generateactivitiesIdea )


