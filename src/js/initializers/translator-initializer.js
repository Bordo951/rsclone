import {English} from '../data/english';
import ChangeLanguage from "../helpers/change-language";

export default class TranslatorInitializer {
    constructor() {
        this.currentLanguagePhrases = English.english;
    }

    init() {
        const changeLanguage = new ChangeLanguage();
        changeLanguage.changeLang();
    }
}
