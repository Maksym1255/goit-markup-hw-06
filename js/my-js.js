const footerBtn = document.querySelector(`.hero-button`);
const backdrop = document.querySelector(`.backdrop`);
const closeModal = document.querySelector(`.modal-close-btn`);
const mobailMenuIsOpen = document.querySelector(`.open-menu-btn`);
const mobailMenu = document.querySelector(`.mobile-menu`);
const mobileNavList = document.querySelector(`.mobile-nav`, `a`);
const mobileMenuCloseBtn = document.querySelector(`.mobile-menu-close-btn`);

footerBtn.addEventListener(`click`, () => {
    backdrop.classList.add(`is-open`);
})

closeModal.addEventListener(`click`, () => {
    backdrop.classList.remove(`is-open`);
})

mobailMenuIsOpen.addEventListener(`click`, (e) => {
    // e.preventDefault();
    mobailMenu.classList.add(`is-open`);
})

mobileNavList.addEventListener(`click`, (e) => {
    // e.preventDefault();
    mobailMenu.classList.remove(`is-open`);
})

mobileMenuCloseBtn.addEventListener(`click`, () => {
    mobailMenu.classList.remove(`is-open`);
})