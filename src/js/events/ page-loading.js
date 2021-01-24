export default class PageLoading {
    initEvent() {
        window.onload = function () {
            document.body.classList.add('loaded');
        }
    }
}
