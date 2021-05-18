const baseURL = 'https://superheroapi.com/api/280920687037884';
const key = '280920687037884'
const section = document.querySelector('section');
const searchTerm = document.querySelector('#heroName');
const searchForm = document.querySelector('form');
const picture = document.querySelector('.results')
let url;
searchForm.addEventListener('submit', fetchResults)
let start;

function step(timestamp) {
    if (start === undefined)
    start = timestamp;
    const elapsed = timestamp - start;
    
    // `Math.min()` is used here to make sure that the element stops at exactly 200px.
    //   element.style.transform = 'translateX(' + Math.min(0.1 * elapsed, 200) + 'px)';
    
    if (elapsed < 2000) { // Stop the animation after 2 seconds
        window.requestAnimationFrame(step);
    }
}

window.requestAnimationFrame(step);



function fetchResults() {
    event.preventDefault();
    let characterName = searchTerm.value
    console.log(characterName);
    url = `${baseURL}/search/${characterName}`;
    console.log(url);
    fetch(url, {
  })
    .then((results) => {
      console.log(results);
      return results.json();
    })
    .then((json) => {
    console.log(json.results[0].image);
      displayResults(json.results[0].image);
    })

    .catch((err) => console.log(err));
  
}

  function displayResults(imageOne) {
    while (picture.firstChild)
    //while is a loop. while it clears out that section articles while the new search results are added. (while section has a firstChild)
    {
       picture.removeChild(picture.firstChild); // removes previous search data (removes firstChild)
   }
    let image = document.createElement('img')
    picture.appendChild(image)
   // let imageOne = json.results[0].image.url
     image.src = imageOne.url
   //  event.preventDefault();
//console.log('displayResults', image);
    
 }