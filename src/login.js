import $ from "jquery";
import delay from "./delay.js";

export default async function () {
    const randomInBetween = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    // prettier-ignore
    const [{ default: viewHtml }, { default: dotHtml }] =
        await Promise.all([
            import("./login/view.html"),
            import("./login/dot.html"),
        ]);

    $("body").append(viewHtml);

    await delay(500);

    // simulate typing
    for (let i = 0; i < 8; ++i) {
        await delay(randomInBetween(70, 150));
        $("#password-input").append(dotHtml);
    }

    $("#password-submit-button").removeAttr("disabled");
}
