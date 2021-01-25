import ChangeLanguage from "./change-language";
import TranslationHelper from "./translation-helper";
import PlayAudio from "./play-audio";

export default class TaskManager {
    constructor() {
        this.changeLanguage = new ChangeLanguage();
        this.translationHelper = new TranslationHelper();
        this.playAudio = new PlayAudio();

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
        localStorage.removeItem('_trackers');
        this.playAudio.playAudio('delete-all-tasks');
    }

    updateTaskImportanceAndUrgency(title, isUrgent, isImportant) {
        let savedTasks = JSON.parse(localStorage.getItem('_tasks')) ?? [];

        savedTasks.forEach((item) => {
            if (item.title === title) {
                item.isImportant = (isImportant === 'true');
                item.isUrgently = (isUrgent === 'true');
            }
        })

        localStorage.setItem('_tasks', JSON.stringify(savedTasks));
    }
}
