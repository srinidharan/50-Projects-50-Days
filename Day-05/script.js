const loadingtext =document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

var load = 0;
var int = setInterval(blurring,30);



function blurring(){
  load++;
  if(load>99){
    clearInterval(int);
  }
  loadingtext.innerHTML = `${load}%`;
  loadingtext.style.opacity = scale(load,0,100,1,0);
  bg.style.filter = `blur(${scale(load,0,100,20,0)}px)`
  
}
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}