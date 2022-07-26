const progress= document.getElementById('progress');
const prev =document.getElementById('prev');
const next =document.getElementById('next');
const circles =document.querySelectorAll('.circle');

let currentactive = 1

next.addEventListener("click",() => {
  currentactive++
  
  if(currentactive > circles.length){
    currentactive = circles.length;
  }
  
   update()
  
})

prev.addEventListener("click",() => {
 
  currentactive--
  
  if(currentactive < 1){
    currentactive = 1
  }
   update()
  
})
function update(){
  circles.forEach((circle,index) => {
    if(index < currentactive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  })
  const actives =document.querySelectorAll('.active')
  console.log(actives.length / circles.length)

  progress.style.width = (actives.length -1)/(circles.length-1)* 100 + '%'
   if(currentactive === 1){
     prev.disabled = true
   }
  else if(currentactive===circles.length){
     next.disabled = true
   }
  else{
     next.disabled = false;
     prev.disabled = false;
   }
  
}

