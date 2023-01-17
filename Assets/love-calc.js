// START OF LOVE CALC API CODE

const loveCalc = document.getElementById('loveCalc');

function generateLoveCalc() {
    // need to validate modal input to make sure there is at least 1 letter in each box
    // then remove any spaces from user input,
    // THEN the 2 names need to appear below w/ the % + result sentence. Maybe heart icon btwn names.
// from modal code section:
const nameValue1 = document.getElementById("modalNameInput1").value;
console.log(nameValue1); 

const nameValue2 = document.getElementById("modalNameInput2").value;
console.log(nameValue2);

// const nameValue1 = 'Name 1';
// const nameValue2 = 'Name 2';

const optionsLove = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1aad9b257amsh8cea256130839a7p1e5326jsn1feba12d1c03',
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
	}
};

fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${nameValue1}&fname=${nameValue2}`, optionsLove)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        document.getElementById('response').textContent = `Love percentage between ${response.sname} and ${response.fname} is ${response.percentage}%. ${response.result}`;
    })
    // .then(data => {   // Update modal content with data from API
    //     console.log(data.sname);
    //     // document.getElementById('modal-body').innerHTML = "";
    //     // document.getElementById('modal-body').textContent = `Love percentage between ${nameValue1} and ${nameValue2} is ${data.percentage}%`;
    //   })
      .catch(error => console.error(error));
};

loveCalc.addEventListener("click", generateLoveCalc); // dont need parentheses that execute fcn in event listener!

// END OF LOVE CALC API CODE