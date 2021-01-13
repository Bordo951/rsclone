import {English} from '../data/english';
import {Russian} from '../data/russian';
import {Dutch} from '../data/dutch';

export default class TranslateInitializer {
    constructor() {
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
            let phraseHTML = document.querySelector(`[data-label-id=${key}]`);
            if (phraseHTML) {
                phraseHTML.innerHTML = this.translate(key);
            }
        }
    }

    translate(phrase) {
        return this.currentLanguagePhrases[phrase];
    }
}
