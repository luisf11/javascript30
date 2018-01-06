const playAudio = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //Stop the function
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

//with function expresion this is the window object
function removeTransition(e){
    if(e.propertyName !== 'transform') return; //skip is not the event transform 
    this.classList.remove('playing');
};

//select all the keys 
const keys = document.querySelectorAll('.key');
//keys is node not an array
keys.forEach(key => key.addEventListener('transitionend',removeTransition));


window.addEventListener('keydown',playAudio);
