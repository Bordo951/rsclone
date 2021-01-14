import {English} from '../data/english';
import {Russian} from '../data/russian';
import {Dutch} from '../data/dutch';

export default class TranslatorInitializer {
    constructor() {
        this.currentLanguagePhrases = English.english;
    }

    init() {
        let currentLanguage = localStorage.getItem('_currentLang');
        switch (currentLanguage) {
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
}
