const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragstart);
fill.addEventListener('dragend', dragend);

for(const empty of empties) {
    empty.addEventListener('dragover',dragover);
    empty.addEventListener('dragenter',dragenter);
    empty.addEventListener('dragleave',dragleave);
    empty.addEventListener('drop',dragdrop);


}


 function dragstart() {
    this.className += '  hold';
    setTimeout(() =>  this.className = 'invisible', 0)
    

    
 }
 
 function dragend() {
    this.className = 'fill'
 }
 
 function dragover(e) {
    e.preventDefault();
 }
 
 function dragenter(e) {
    e.preventDefault();
    this.className += ' hovered';
 }
 
 function dragleave() {
    this.className = 'empty';
 }
 
 function dragdrop() {
    this.className = 'empty';
    this.append(fill);
 }


