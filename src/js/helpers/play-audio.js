import SwitchSound from "./ switch-sound";

export default class PlayAudio {
    constructor() {
        this.switchSound = new SwitchSound();
    }

    playAudio(name) {
        if (name !== undefined && this.switchSound.getSoundFromLocalStorage() === true) {
            new Audio(`assets/sounds/${name}.mp3`).autoplay = true;
        }
    }
}