// to get when text is added to text area

// make the text into array

// every element of array in to a span 





const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')



textarea.addEventListener('keyup', (event) => {
    createtags(event.target.value)

    if(event.key === 'Enter') {
        setTimeout(() => {
            event.target.value ='';
        }, 10);
    

         randomselect();
    }

    
})

function createtags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    console.log(tags);

    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const t = document.createElement('span');
        t.classList.add('tag');
        t.innerText = tag;
        tagsEl.appendChild(t);
    })
}


// know when enter is pressed
// randomly pick a tag for sometime
// pick for final tag


function randomselect(){
    const times = 30;
    const int = 100;

    const interval = setInterval(() => {
        //randomly select a tag
        const randomtag = pickrandomtag();

        //highlight tag
        highlighttag(randomtag);
        
        
        //unhighlight tag
        setTimeout(() => {
            unhighlighttag(randomtag);
        }, int);
    
    }, int);

    setTimeout(() => {

        clearInterval(interval);

        setTimeout(() => {
            
             //randomly select a tag
        const randomtag = pickrandomtag();

        //highlight tag
        highlighttag(randomtag);

        }, int);
        
    }, int *  times);


}

function pickrandomtag(){
       const tags = document.querySelectorAll('.tag');
       return tags[Math.floor(Math.random() * tags.length)];
}


function highlighttag(tag) {
    tag.classList.add('highlight');
}


function unhighlighttag(tag) {
    tag.classList.remove('highlight');
}