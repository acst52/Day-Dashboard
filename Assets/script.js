
// creating list of variables:

var mainEl= document.querySelector('.movies')

// To get data from the movie  API:
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f805aea8e8msh287a6a343eb8645p193cf8jsn9371158600c0',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};
//fetching data from the specified api URL //
fetch('https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1', options)
	.then(response => response.json())  //The API's response is expected to be in JSON format //
	.then(response => {
        let moviesEl = response.Search;
       moviesEl.map(data => {
       
    let name = data.Title;
    let year = data.Year;
    let poster = data.Poster;
    let imdb = data.imdbID;
        //console.log(poster)
        //console.log(year)
        //onsole.log(name)
        //console.log(imdb)
    var liEl = document.createElement('li')
    var imgEl= document.createElement('img')
    var hEl = document.createElement ('h3')
    var pEl = document.createElement ('p')
    var pEl2 = document.createElement('p')

      imgEl.setAttribute('src',poster)
      imgEl.setAttribute('alt',name)

      hEl.innerHTML=name
      pEl.innerHTML=year
      pEl2.innerHTML=imdb

   liEl.append(hEl)
   liEl.append(imgEl)
   liEl.append(pEl)
   liEl.append(pEl2)
   
   mainEl.appendChild(liEl)
    });
    })
    .catch(err => console.error(err));      //this method is used to handle any errors that occur//