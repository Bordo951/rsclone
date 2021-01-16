import {English} from '../data/english';
import ChangeLanguage from "../helpers/change-language";

export default class TranslatorInitializer {
    constructor() {
        this.currentLanguagePhrases = English.english;
        this.changeLanguage = new ChangeLanguage();
    }

    init() {
        this.changeLanguage.changeLang();
    }
}
