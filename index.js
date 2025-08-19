let body = document.getElementById("body");

let links   = document.querySelectorAll("#links > *"); // prettier-ignore
let profile = document.getElementById("profile"); // prettier-ignore
let cv      = document.getElementById("cv-container"); // prettier-ignore

// ---

const INTRO_DURATION = 1000;

profile.style.opacity = 0;
cv.style.opacity = 0;
links.forEach((child, _) => (child.style.opacity = 0));

window.onload = async function () {
    body.classList.add("loaded");

    (async () => {
        await transition(
            profile,
            { opacity: 0 },
            { opacity: 1 },
            INTRO_DURATION,
        );
        float(profile);
    })();

    await delay(300);

    (async () => {
        await transition(
            cv,
            { opacity: 0, transform: "translateY(5px)" },
            { opacity: 1, transform: "translateY(0)" },
            INTRO_DURATION,
        );
        float(cv);
    })();

    await delay(300);

    for (let i = 0; i < links.length; ++i) {
        (async () => {
            await transition(
                links[i],
                { opacity: 0, transform: "translateY(-5px)" },
                { opacity: 1, transform: "translateY(0)" },
                INTRO_DURATION,
            );
            float(links[i]);
        })();

        await delay(300);
    }
};
