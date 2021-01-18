import ChangeTheme from '../helpers/change-theme';

export default class ChangeThemeInitializer {
    constructor() {
        this.changeTheme = new ChangeTheme();
    }

    init() {
        this.changeTheme.changeTheme();
    }
}