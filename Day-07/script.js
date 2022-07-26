const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll',scrolling);

function scrolling() {
  const triggerbottom = window.innerHeight * (4/5);
  boxes.forEach(box => {
     const boxtop
       =box.getBoundingClientRect().top;
    if(triggerbottom > boxtop){
      box.classList.add('show');
    }else{
      box.classList.remove('show');
    }
  })
}