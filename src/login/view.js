import $ from "jquery";
import viewHtml from "./view.html";
import dotHtml from "./dot.html";

/**
 * --
 */
async function load() {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    const randomInBetween = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    $("body").append(viewHtml);

    await delay(500);

    // simulate typing
    for (let i = 0; i < 8; ++i) {
        await delay(randomInBetween(70, 150));
        $("#password-input").append(dotHtml);
    }

    $("#password-submit-button").removeAttr("disabled");
}

/* */

export default { load };
