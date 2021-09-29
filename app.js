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

});

mouthImg.addEventListener('click', ()=>{
    dogSound.play();

});

rancorImg.addEventListener('click', ()=>{
    horseSound.play();
});



  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
