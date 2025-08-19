const EMAIL = "hello@hiegz.com";

let emailLabel = document.getElementById("email-address");
emailLabel.innerHTML = EMAIL;

/*
 * Flag used by the email button click handler to handle user clicks while the
 * button is still being animated.
 */
let animatingEmailButton = false;

/**
 * Email Button Click Handler
 */
async function onEmailButtonClick() {
    const STAGE_DURATION = 300;
    const STAGE_DELAY = 750;

    if (animatingCVDownloadButton) return;
    animatingCVDownloadButton = true;

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

    animatingCVDownloadButton = false;
}
