export default class PageLoading {
    initEvent() {
        window.onload = function () {
            const preloader = document.querySelectorAll('.preloader');
            preloader.forEach((e) => e.style.display = 'none');
        }
    }
}