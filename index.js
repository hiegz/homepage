const EMAIL = "hello@hiegz.com";

/*
 * Flag used by the email button click handler to handle user clicks while the
 * button is still being animated.
 */
let animatingEmailButton = false;

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
 * Email Button Click Handler
 */
async function onEmailButtonClick() {
    const STAGE_DURATION = 300;
    const STAGE_DELAY = 750;

    if (animatingEmailButton) return;
    animatingEmailButton = true;

    let emailButton = document.getElementById("email-button");
    let emailLabel = document.getElementById("email-address");

    let originalBackground = window
        .getComputedStyle(emailButton, null)
        .getPropertyValue("background");

    await navigator.clipboard.writeText(EMAIL);

    /*
     * ==================
     *  START OF STAGE A
     * ==================
     */

    const a = transition(
        emailButton,
        { background: originalBackground },
        { background: "#4bb543" },
        STAGE_DURATION,
    );

    await transition(
        emailLabel,
        { opacity: 1 },
        { opacity: 0 },
        STAGE_DURATION / 2,
    );

    emailLabel.innerHTML = "Email Copied";
    emailLabel.classList.add("animated");

    await transition(
        emailLabel,
        { opacity: 0 },
        { opacity: 1 },
        STAGE_DURATION / 2,
    );

    await a;

    /*
     * ==================
     *   END OF STAGE A
     * ==================
     */

    await delay(STAGE_DELAY);

    /*
     * ==================
     *  START OF STAGE Z
     * ==================
     */

    const z = transition(
        emailButton,
        { background: "#4bb543" },
        { background: originalBackground },
        STAGE_DURATION,
    );

    await transition(
        emailLabel,
        { opacity: 1 },
        { opacity: 0 },
        STAGE_DURATION / 2,
    );

    emailLabel.innerHTML = EMAIL;
    emailLabel.classList.remove("animated");

    await transition(
        emailLabel,
        { opacity: 0 },
        { opacity: 1 },
        STAGE_DURATION / 2,
    );

    await z;

    /*
     * ==================
     *   END OF STAGE Z
     * ==================
     */

    animatingEmailButton = false;
}

window.onload = async function () {
    let emailLabel = document.getElementById("email-address");

    emailLabel.innerHTML = EMAIL;
    await transition(emailLabel, { opacity: 0 }, { opacity: 1 }, 500);
};
