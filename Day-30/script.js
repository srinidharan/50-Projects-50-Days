const textel = document.getElementById('text');
const speedel = document.getElementById('speed');

const text = 'we love programming';
 let idx =1;
 let speed= 300 / speedel.value;


 writetext() 

 function writetext() {
    textel.innerHTML = text.slice(0,idx);
    idx++;

    if(idx > text.length){
        idx = 1;
    }

    setTimeout(writetext,speed);
 }


 speedel.addEventListener('input' , (e) => speed = 300/e.target.value)