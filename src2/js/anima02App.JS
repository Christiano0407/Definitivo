const pelota = document.getElementById(`pelota`);

//buttons
const playButton = document.getElementById(`play`);
const stopButton = document.getElementById(`stop`);
const pauseButton = document.getElementById(`pause`);
const reverseButton = document.getElementById(`reverse`);

/* element.animate(keyframes = [], option = []) */
const animation = pelota.animate([
    //from
    {
     transform: `translateX(0)`
    },
    //To
    {
     transform: `translateX(50rem)`
    }
],{
   duration:1000,
   //delay: 1000,
   direction:`normal`,
   easing:`linear`,
   //iterations: Infinity,
   fill: `forwards`,
   iterationStart: .5,
   //endDelay: 5000
})

//buttons Events
playButton.addEventListener(`click`, (event) => {
animation.play();
});
pauseButton.addEventListener(`click`, (event) => {
animation.pause();
});
stopButton.addEventListener(`click`, (event) => {
animation.cancel();
});
reverseButton.addEventListener(`click`, (event) => {
animation.reverse();
});