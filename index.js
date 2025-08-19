let body = document.getElementById("body");

let header = document.querySelector("header"); // prettier-ignore
let main   = document.querySelector("main"); // prettier-ignore
let footer = document.querySelector("footer"); // prettier-ignore

// ---

const INTRO_DURATION = 1000;

for (let i = 0; i < header.children.length; ++i)
    header.children[i].style.opacity = 0;
main.style.opacity = 0;
for (let i = 0; i < footer.children.length; ++i)
    footer.children[i].style.opacity = 0;

window.onload = async function () {
    body.classList.add("loaded");

    (async () => {
        await transition(main, { opacity: 0 }, { opacity: 1 }, INTRO_DURATION);
        float(main);
    })();

    await delay(300);

    for (let i = 0; i < footer.children.length; ++i) {
        (async () => {
            await transition(
                footer.children[i],
                { opacity: 0, transform: "translateY(5px)" },
                { opacity: 1, transform: "translateY(0)" },
                INTRO_DURATION,
            );
            float(footer.children[i]);
        })();

        await delay(300);
    }

    for (let i = 0; i < header.children.length; ++i) {
        (async () => {
            await transition(
                header.children[i],
                { opacity: 0, transform: "translateY(-5px)" },
                { opacity: 1, transform: "translateY(0)" },
                INTRO_DURATION,
            );
            float(header.children[i]);
        })();

        await delay(300);
    }
};
