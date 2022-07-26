const sounds = ['applause','boo','gasp','tada','victory','wrong'];

sounds.forEach(sound => {
    const btn =document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () =>{
    stopplaying();
    document.getElementById(sound).play();
  })
  
  document.getElementById('buttons').append(btn);
  
})
function stopplaying() {
  sounds.forEach(sound  => {
    const audio =document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  })
}