import ChangeLanguage from "./change-language";
import TranslationHelper from "./translation-helper";

export default class TaskManager {
    constructor() {
        this.changeLanguage = new ChangeLanguage();
        this.translationHelper = new TranslationHelper();
    }

    removingAllTasksWithConfirmed() {
        let confirmMessage = this.translationHelper.translateByKey('confirmation_message_to_delete_all_tasks')
        let isDelete = confirm(confirmMessage);

        if (isDelete) {
            this.deleteAllTasks();
        }
    }

    deleteAllTasks() {
        localStorage.removeItem('_tasks');
    }
}
