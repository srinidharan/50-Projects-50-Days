const container = document.querySelector('.container');
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 10;

for(let i = 0; i < rows * 3; i++){
    const img = document.createElement('img');
    img.src = `${unsplashURL}${getrandomSize()}`;
    container.appendChild(img);
}



function getrandomSize() {
    return `${getrandomNr()}x${getrandomNr()}`
}

function getrandomNr() {
    return Math.floor(Math.random() * 10) + 300
}