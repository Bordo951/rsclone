import {English} from "../data/english";
import {Russian} from "../data/russian";
import {Dutch} from "../data/dutch";
import ChangeLanguage from "./change-language";

export default class TranslationHelper {
    constructor() {
        this.changeLanguage = new ChangeLanguage();
    }

    translateByKey(key) {
        let language = this.changeLanguage.getLanguageFromLocalStorage(),
            translation = ''

        if (language === "en") {
            translation = English.english[key];
        }

        if (language === "ru") {
            translation = Russian.russian[key];
        }

        if (language === "de") {
            translation = Dutch.dutch[key];
        }

        return translation;
    }
}
