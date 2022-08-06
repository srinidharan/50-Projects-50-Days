const smallcups = document.querySelectorAll('.small-cup');
const litres = document.getElementById('litres');
const remained = document.getElementById('remained');
const percentage =document.getElementById('percentage');


updatebigcup();

smallcups.forEach((cup ,idx) =>  {

    cup.addEventListener('click', () => { highlightcups(idx)});

})

 
function highlightcups(idx) {


    if(idx === 7 && smallcups[idx].classList.contains('full') ) idx--;

    else if(smallcups[idx].classList.contains('full') && !smallcups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }
    
    smallcups.forEach((cup,idx2) => {

        if(idx2 <= idx){
            cup.classList.add('full');
        }else{
            cup.classList.remove('full');
        }
    })
    updatebigcup();
    
}

function updatebigcup() {
    const fullcups =document.querySelectorAll('.small-cup.full').length;
    const totalcups = smallcups.length;

    if(fullcups === 0){
        percentage.style.visibility='hidden';
        percentage.style.height = 0;
    }else{
        percentage.style.visibility='visible';
        percentage.style.height = `${fullcups/totalcups * 330}px`;
        percentage.innerText = `${fullcups / totalcups * 100}%`
    }
    
    if(fullcups === totalcups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        litres.innerText = `${2 - (250 * fullcups / 1000)}L`
    }



}