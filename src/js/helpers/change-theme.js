export default class ChangeTheme {
    changeTheme(theme = this.getThemeFromLocalStorage() ?? 'light') {
        this.setThemeToLocalStorage(theme);
        const bodyHTML=document.querySelector('body');
        bodyHTML.setAttribute('data-theme',`${theme}`)
    }

    setThemeToLocalStorage(theme) {
        localStorage.setItem('_currentTheme', theme);
    }

    getThemeFromLocalStorage() {
        return localStorage.getItem('_currentTheme')
    }
}