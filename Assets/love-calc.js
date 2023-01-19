// START OF LOVE CALC API CODE

const loveCalc = document.getElementById('loveCalc');

function generateLoveCalc() {
    // need to validate modal input to make sure there is at least 1 letter in each box
    // then remove any spaces from user input using [...].value.trim();
const nameValue1 = document.getElementById("modalNameInput1").value.trim();
console.log(nameValue1); 

const nameValue2 = document.getElementById("modalNameInput2").value.trim();
console.log(nameValue2);

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
    
}) .catch(error => console.error(error);
};
loveCalc.addEventListener("click", generateLoveCalc); // dont need parentheses that execute fcn in event listener!

// END OF LOVE CALC API CODE
