const slidercontainer = document.querySelector('.slider-container');
const slideright = document.querySelector('.right-slide');
const slideleft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slideslength = slideright.querySelectorAll('div').length;

let activeslideindex = 0;

slideleft.style.top = `-${(slideslength - 1) * 100}vh`

upButton.addEventListener('click', () => changeslide('up'));
downButton.addEventListener('click', () => changeslide('down'));


const changeslide = (direction) => {
    const sliderHeight = slidercontainer.clientHeight
    if(direction === 'up') {
        activeslideindex++;
        if(activeslideindex > slideslength - 1) {
            activeslideindex = 0;
        }
    } else if (direction === 'down') {
        activeslideindex--;
        if(activeslideindex < 0) {
            activeslideindex = slideslength - 1;
        }
    }

    slideright.style.transform = `translateY(-${activeslideindex * sliderHeight}px)`;
    slideleft.style.transform = `translateY(${activeslideindex * sliderHeight}px)`
     
}



