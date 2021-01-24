export default class ConfettiMaker {
    constructor() {
    }

    runConfetti() {
        let confettiDuration = Date.now() + (1 * 1000);
        const confettiColors = ['#EB654D', '#FBFF00', '#70EB1D', '#DF6FEB'];

        (function frame() {
            confetti({
                particleCount: 4,
                angle: 60,
                spread: 55,
                origin: {x: 0},
                colors: confettiColors
            });
            confetti({
                particleCount: 4,
                angle: 120,
                spread: 55,
                origin: {x: 1},
                colors: confettiColors
            });
            confetti({
                particleCount: 4,
                angle: 180,
                spread: 55,
                origin: {x: 2},
                colors: confettiColors
            });
            confetti({
                particleCount: 4,
                angle: 240,
                spread: 55,
                origin: {x: 3},
                colors: confettiColors
            });

            if (Date.now() < confettiDuration) {
                requestAnimationFrame(frame);
            }
        }());
    }
}
