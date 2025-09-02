import $ from "jquery";
import html from "./view.html";

/**
 * --
 */
async function load() {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    const randomInBetween = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    $("body").append(html);

    await delay(500);

    // simulate typing
    for (let i = 0; i < 8; ++i) {
        const currentVal = $("#password-input").val();
        $("#password-input").val(currentVal + "-");
        await delay(randomInBetween(70, 150));
    }
}

/* */

export default { load };
