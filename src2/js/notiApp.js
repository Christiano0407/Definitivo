const button = document.getElementById(`button`);
const bell = document.getElementById(`notification`);

button.addEventListener(`click`, () => {
    const count = Number(bell.getAttribute(`data-count`)) || 0;
bell.classList.add(`show-count`);
} )