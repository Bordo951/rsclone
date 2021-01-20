import SwitchSound from "../helpers/ switch-sound";
import ChangeLanguage from "../helpers/change-language";

export default class ClickOnSoundBtn {
    constructor() {
        this.switchSound = new SwitchSound();
        this.changeLanguage = new ChangeLanguage();
    }

    initEvent() {
        if (!document.querySelector('.setting-page')) {
            return;
        }
        const soundBtnHTML = document.querySelector('#sound-btn'),
            phraseHTML = document.querySelector('#sound-title'),
            turnOnHTML = document.querySelector('.turn-on');
        turnOnHTML.classList.add('active');
        phraseHTML.setAttribute('data-label-id', 'music_turn_on')
        soundBtnHTML.addEventListener('click', () => this.switchSound.switchSound(!this.switchSound.getSoundFromLocalStorage()));
    }
}
