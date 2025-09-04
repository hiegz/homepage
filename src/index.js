import "./style.css";

import $ from "jquery";
import delay from "@/delay";

// import index.html so that webpack can watch and refresh the file whenever it is changed
if (process.env.NODE_ENV === "development") {
    import("./index.html");
}

window.addEventListener("load", async function () {
    // display the wallpaper
    $(".wallpaper").css("display", "");

    // =============
    //  Date & Time
    // =============
    (() => {
        const startClock = () => {
            refreshClock();
            setTimeout(startClock, 1000 * 10);
        };

        const refreshClock = () => {
            const format = (original) => String(original).padStart(2, "0");

            const date = new Date();
            const month = date.toLocaleString("en-US", { month: "short" });
            const day = format(date.getDay());
            const hours = format(date.getHours());
            const minutes = format(date.getMinutes());

            $(".date-and-time").text(
                `${month} ${day}` + " " + `${hours}:${minutes}`,
            );
        };

        startClock();
    })();

    // =======
    //  Login
    // =======
    await (async () => {
        const randomInBetween = (min, max) =>
            Math.floor(Math.random() * (max - min + 1) + min);

        const { default: html } = await import("@/views/login.html");

        const body = $("body");
        const view = $(html);
        const input = view.find(".password-input");
        const button = view.find(".password-submit-button");
        const isButtonDisabled = () => button.attr("disabled") != undefined;

        button.attr("disabled", true);

        /**
         * KeyDown event handler
         *
         * @param {KeyboardEvent} event
         */
        const onKeyDown = (event) => {
            if (event.key !== "Enter") return;

            if (!isButtonDisabled()) {
                button.addClass("!bg-[#335277]");
            }
        };

        /**
         * KeyUp event handler
         *
         * @param {KeyboardEvent} event
         */
        const onKeyUp = (event) => {
            if (event.key !== "Enter") return;

            if (!isButtonDisabled()) {
                button.removeClass("!bg-[#335277]");
                button.trigger("click");
            }
        };

        body.prepend(view)

        body.on("keydown", onKeyDown);
        body.on("keyup", onKeyUp);

        await delay(500);

        // simulate typing
        for (let i = 0; i < 8; ++i) {
            await delay(randomInBetween(70, 150));

            // prettier-ignore
            input.append($("<span class='w-[8px] h-[8px] rounded-full bg-black mt-[1px]'></span>"));
        }

        button.removeAttr("disabled");

        await new Promise((res) => {
            button.on("click", res);
        });

        view.remove();

        body.off("keydown", onKeyDown);
        body.off("keyup", onKeyUp);
    })();
});
