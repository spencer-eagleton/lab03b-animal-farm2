// import functions and grab DOM elements
const hothImg = document.getElementById('hoth');
const catSound = document.getElementById('cat-sound');

const mouthImg = document.getElementById('mouth');
const dogSound = document.getElementById('dog-sound');

const rancorImg = document.getElementById('rancor');
const horseSound = document.getElementById('horse-sound');
// initialize global state

// set event listeners 
hothImg.addEventListener('click', ()=>{
    catSound.play();
    hothImg.style.transform = 'rotate(360deg)';
    hothImg.style.transition = '1s ease';
});

mouthImg.addEventListener('click', ()=>{
    dogSound.play();
    mouthImg.style.transform = 'rotate(-360deg)';
    mouthImg.style.transition = '1s ease';

});

rancorImg.addEventListener('click', ()=>{
    horseSound.play();
    rancorImg.style.transform = 'rotate(-360deg)';
    rancorImg.style.transition = '1s ease';
});



  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
