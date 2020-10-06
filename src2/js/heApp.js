const like = document.getElementById(`like`);
like.addEventListener(`click`, (event) => {
 //console.log(event);
 //like.classList.add(`is-liked`);
 //Agrega y quita
 like.classList.toggle(`is-liked`);
})