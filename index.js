window.onload = async function () {
    const sections = document.querySelectorAll("#body > *");

    // prepare for the intro animation
    sections.forEach((child, _) => {
        child.style.opacity = 0;
    });

    let body = document.getElementById("body");
    body.classList.add("loaded");

    // animate sections
    for (let i = 0; i < sections.length; ++i) {
        let child = sections[i];
        intro(child, 1000).then(() => float(child));
        await delay(300);
    }
};
