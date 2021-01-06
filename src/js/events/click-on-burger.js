export default class ClickOnBurgerEvent {
    initEvent() {
        const burgerHTML = document.querySelector('.navigation__burger'),
        blurHTML = document.querySelector('.blur');
        burgerHTML.addEventListener('click', this.toggleMenu);
        blurHTML.addEventListener('click', this.toggleMenu);
    }

    toggleMenu() {
        const bodyHTML = document.querySelector('body'),
            blurHTML = document.querySelector('.blur'),
            navigationHTML = document.querySelector('.navigation'),
            burgerHTML = document.querySelector('.navigation__burger'),
            textHTML = document.querySelectorAll('.navigation__list-text'),
            textActiveHTML = document.querySelector('.navigation__list-text-active');
        bodyHTML.classList.toggle('body-lock');
        blurHTML.classList.toggle('blur-active');
        burgerHTML.classList.toggle('navigation__burger-active');
        navigationHTML.classList.toggle('navigation-active');
        setTimeout(() => {
            textHTML.forEach((elem) => {
                elem.classList.toggle('navigation__list-text-active')
            })
        }, textActiveHTML ? 0 : 150);
    }
}