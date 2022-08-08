/*const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        `
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})*/


const API_KEY = 'api_key=d9fc1e5bbb29a3884b67af5b83ad821a';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+ API_KEY;
const IMG_URL  = 'https://image.tmdb.org/t/p/w500';
const SearchURL = BASE_URL + '/search/movie?' + API_KEY;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getmovies(API_URL);

function getmovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showmovies(data.results);
    })
}

function showmovies(data) {
    main.innerHTML = '';
   
    
    data.forEach(movie  => {
        const {title,poster_path,vote_average,overview} = movie;
        const movieEl = document.createElement('div');
     movieEl.classList.add('movie');
      movieEl.innerHTML = `
        
        <img src="${IMG_URL+poster_path}" 
        alt="${title}">
        
        <div class="movie-info">
           <h3>${title}</h3>
           <span class="${getcolor(vote_average)}">${vote_average}</span>
       </div>

       <div class="overview">

           <h3>Overview</h3>
              ${overview}

       </div>
        
     `
      main.appendChild(movieEl);

    })
}


function getcolor(vote) {
    if(vote >= 8){
        return 'green';
    }else if (vote >= 5){
        return 'orange';
    }else{
        return 'red';
    }
}

form.addEventListener('submit' , (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm){
        getmovies(SearchURL + '&query=' + searchTerm); 
    }else{
        getmovies(API_URL);
    }
})