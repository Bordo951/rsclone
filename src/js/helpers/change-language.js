import {English} from "../data/english";
import {Russian} from "../data/russian";
import {Dutch} from "../data/dutch";

export default class ChangeLanguage {
    changeLang(lang = this.getLanguageFromLocalStorage() ?? 'en') {
        this.setLanguageToLocalStorage(lang);
        switch (lang) {
            case 'en':
                this.currentLanguagePhrases = English.english;
                break

            case 'ru':
                this.currentLanguagePhrases = Russian.russian;
                break

            case 'de':
                this.currentLanguagePhrases = Dutch.dutch;
                break
        }
        for (let key in this.currentLanguagePhrases) {
            let phraseHTML = document.querySelectorAll(`[data-label-id=${key}]`);
            phraseHTML.forEach(htmlElement => {
                htmlElement.innerHTML = this.translate(key)
            });
        }
        this.changeFlag(lang);
    }

    changeFlag(lang) {
        if (document.querySelector('.setting-page')) {
            const itemHTML = document.querySelector('.language'),
                flag = document.querySelector('.flag'),
                flagImgHTML = document.createElement('img');
            if (flag) {
                itemHTML.removeChild(flag);
            }
            itemHTML.appendChild(flagImgHTML);
            flagImgHTML.classList.add('settings__menu-list-content-img');
            flagImgHTML.src = 'assets/' + lang + '-flag.svg';
            flagImgHTML.classList.add('flag');
        }
    }

    translate(phrase) {
        return this.currentLanguagePhrases[phrase];
    }

    setLanguageToLocalStorage(lang) {
        localStorage.setItem('_currentLang', lang);
    }

    getLanguageFromLocalStorage() {
        return localStorage.getItem('_currentLang')
    }
}
