
let tableEl = document.querySelector('.table');

(async function richPeople() {
    try {
    // Fetching API
    const res = await fetch("https://forbes400.onrender.com/api/forbes400/getAllBillionaires");
    const data = await res.json();

    // Creating the table
    for (let i = 0; i < data.length; i++) {

      const tr = document.createElement("tr");

      // Create img table data
      const imageTd = document.createElement("td");
      const imgEl = document.createElement("img");
      imageTd.appendChild(imgEl);
      imgEl.src = data[i].squareImage;
      tr.appendChild(imageTd);

      // Create rank table data
      const rankEl = document.createElement("td");
      const rankP = document.createElement("p");
      rankEl.innerText = `${data[i].rank}`;
      rankEl.appendChild(rankP);
      tr.appendChild(rankEl);

      // Create name table data
      const nameEl = document.createElement("td");
      nameEl.innerText = data[i].personName;
      tr.appendChild(nameEl);
      
      // Create networth table data
      const netWorthEl = document.createElement("td");
      const netNumEl = Math.floor(data[i].finalWorth);
      const netStr = netNumEl.toString();
      netWorthEl.innerText = `$${Number(netStr.slice(0,3))} Billion`;
      tr.appendChild(netWorthEl);

      // Create residence table data
      const residenceEl = document.createElement("td");
      residenceEl.innerText = data[i].countryOfCitizenship;
      tr.appendChild(residenceEl);

      // Create source table data
      const sourceEl = document.createElement("td");
      sourceEl.innerText = data[i].source;
      tr.appendChild(sourceEl);

      // Append all to table
      tableEl.appendChild(tr);
    }
  } catch (err) {
    console.error(err);
  }
})();

/// Create hide and reveal table 'toggle button '

let toggleButton = document.getElementById('.toggle-btn');

//tableEl.style.display = "none";

//toggleButton.addEventListener("click"), function() {
   // if (tableEl.style.display === "none") {
   
      //tableEl.style.display = "table";
   //} else {
   //  tableEl.style.display = "none";
  //  }
 // };
