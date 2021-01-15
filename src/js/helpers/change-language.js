import {English} from "../data/english";
import {Russian} from "../data/russian";
import {Dutch} from "../data/dutch";

export default class ChangeLanguage {
    changeLang(lang = this.getLanguageFromLocalStorage() ?? 'en') {
        console.log(lang)
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