const selectElement = (Element) => document.querySelector(Element);

const header = selectElement(`header`);
const mainContent = selectElement(`main`);

selectElement(`.hamburger`).addEventListener(`click`, () => {
    header.classList.toggle(`active`)
});