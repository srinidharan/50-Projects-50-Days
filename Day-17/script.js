const API_KEY = 'api_key=d9fc1e5bbb29a3884b67af5b83ad821a';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+ API_KEY;
const IMG_URL  = 'https://image.tmdb.org/t/p/w500';
const SearchURL = BASE_URL + '/search/movie?' + API_KEY;

const genres = [
     
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 99,
        "name": "Documentary"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 36,
        "name": "History"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 10402,
        "name": "Music"
      },
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 10770,
        "name": "TV Movie"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 10752,
        "name": "War"
      },
      {
        "id": 37,
        "name": "Western"
      },
    ]
  

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const tagsEL = document.getElementById('tags');

var selectedGenre =[];


   setGenre();

   function setGenre(){
    tagsEL.innerHTML = '';

    genres.forEach(genre => {

        const t =document.createElement('div');
        t.classList.add('tag');
        t.id = genre.id;
        t.innerText =genre.name;
        t.addEventListener('click', () => {
            if(selectedGenre.length == 0){
                selectedGenre.push(genre.id);
            }else{
                if(selectedGenre.includes(genre.id)){
                    selectedGenre.forEach((id,idx)  => {
                        if(id == genre.id){
                            selectedGenre.splice(idx,1);
                        }
                    })
                }else{
                    selectedGenre.push(genre.id);
                }
            }
            console.log(selectedGenre);
            getmovies(API_URL + '&with_genres=' + encodeURI(selectedGenre.join(',')))
            hightlightselection()
        })
        tagsEL.append(t);
    })
   }

//hightlight function


function hightlightselection() {

    const tags =document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.classList.remove('highlight');
    })
    
    clearbtn();

    if(selectedGenre.length !=0){
        selectedGenre.forEach(id => {
            const hightlightTag = document.getElementById(id);
            hightlightTag.classList.add('highlight');
        })
    }
}

function clearbtn(){
  let clearbtn =document.getElementById('clear');
  if(clearbtn){
    clearbtn.classList.add('highlight')
  }
  else{
    let clear =document.createElement('div');
    clear.classList.add('tag','hightlight');
    clear.id ='clear';
    clear.innerHTML = 'clear x';
    clear.addEventListener('click',() => {
      selectedGenre = [];
      setGenre();
      getmovies(API_URL);

    })
    tagsEL.append(clear);
  }

}

getmovies(API_URL);

function getmovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        if(data.results.length !== 0){
          showmovies(data.results);
        }else{
          main.innerHTML= `<h1 class="no-results"> No Result Found </h1>`
        }
        
        
        
    })
}

function showmovies(data) {
    main.innerHTML = '';
   
    
    data.forEach(movie  => {
        const {title,poster_path,vote_average,overview} = movie;
        const movieEl = document.createElement('div');
     movieEl.classList.add('movie');
      movieEl.innerHTML = `
        
        <img src="${IMG_URL + poster_path} " 
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
    selectedGenre=[];
    setGenre();

    if(searchTerm){
        getmovies(SearchURL + '&query=' + searchTerm); 
    }else{
        getmovies(API_URL);
    }
})