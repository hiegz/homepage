/**
 * Asynchronous Timer
 */
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

/**
 * Performs a stylistic transition on a given DOM element
 */
async function transition(element, from, to, duration, easing = "ease-in-out") {
    const animation = element.animate([from, to], {
        duration,
        easing,
        fill: "forwards",
    });

    await animation.finished;
    animation.commitStyles();
    animation.cancel();
}

/**
 * Makes a given DOM element float.
 */
function float(element) {
    const keyframes = [
        { transform: "translateY(0)" },
        { transform: "translateY(-2.5px)" },
    ];

    element.animate(keyframes, {
        duration: 1500,
        easing: "ease-in-out",
        direction: "alternate",
        iterations: Infinity,
    });
}
