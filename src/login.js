import $ from "jquery";
import delay from "./delay.js";
import viewHtml from "./login/view.html";
import dotHtml from "./login/dot.html";

export default async function () {
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
