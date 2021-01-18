import ChangeTheme from '../helpers/change-theme';

export default class ClickChangeTheme {
    initEvent() {
        if (!document.querySelector('.setting-page')) {
            return;
        }
        const lightHTML = document.querySelector('#light'),
            bright = document.querySelector('#bright'),
            dark = document.querySelector('#dark')

        const changeTheme = new ChangeTheme();
        lightHTML.addEventListener('click', () => changeTheme.changeTheme('light'));
        bright.addEventListener('click', () => changeTheme.changeTheme('bright'));
        dark.addEventListener('click', () => changeTheme.changeTheme('dark'));
    }
}