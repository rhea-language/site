export default function isMobileBrowser() {
    const ua = navigator.userAgent;
    const hasTouch = (('ontouchstart' in window) ||
        (navigator.maxTouchPoints &&
            navigator.maxTouchPoints > 0));

    return (/Android/i.test(ua) ||
        /iPhone|iPad|iPod/i.test(ua) ||
        /Windows Phone/i.test(ua) ||
        /BlackBerry|BB10/i.test(ua) ||
        /Opera Mini/i.test(ua)) ||
        (
            hasTouch &&
            window.matchMedia("(max-width: 768px)").matches
        );
}
