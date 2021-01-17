import ChangeLanguage from "../helpers/change-language";

export default class ClickChangeLanguage {
    initEvent() {
        if (!document.querySelector('.setting-page')) {
            return;
        }

        const germanHTML = document.querySelector('#german'),
            englishHTML = document.querySelector('#english'),
            russianHTML = document.querySelector('#russian');

        const changeLang = new ChangeLanguage();
        germanHTML.addEventListener('click', () => changeLang.changeLang('de'));
        englishHTML.addEventListener('click', () => changeLang.changeLang('en'));
        russianHTML.addEventListener('click', () => changeLang.changeLang('ru'));
    }
}