import ChangeLanguage from "./change-language";

export default class SwitchSound {
    constructor() {
        this.changeLanguage = new ChangeLanguage();
    }

    switchSound(sound = this.getSoundFromLocalStorage() ?? 'true') {
        const turnOnHTML = document.querySelector('.turn-on'),
            phraseHTML = document.querySelector('#sound-title');
        this.setSoundToLocalStorage(sound);
        if (sound == true && turnOnHTML && phraseHTML ) {
            turnOnHTML.classList.remove('active');
            phraseHTML.setAttribute('data-label-id', 'music_turn_on');
            this.changeLanguage.changeLang();
        } else if (turnOnHTML && phraseHTML) {
            turnOnHTML.classList.add('active');
            phraseHTML.setAttribute('data-label-id', 'music_turn_off');
            this.changeLanguage.changeLang();
        }
    }

    setSoundToLocalStorage(sound) {
        localStorage.setItem('_sound', sound);
    }

    getSoundFromLocalStorage() {
        return JSON.parse(localStorage.getItem('_sound'));
    }
}