/**
 * Flag used by the CV download button click handler to handle user clicks while the
 * button is still being animated.
 */
let animatingCVDownloadButton = false;

let cvDownloadButton = document.getElementById("cv-download-button");
let cvDownloadOptions = document.getElementById("cv-download-options");

cvDownloadOptions.classList.add("hidden");
for (let i = 0; i < cvDownloadOptions.children.length; ++i) {
    cvDownloadOptions.children[i].children[0].style.opacity = 0;
}

/**
 * CV download button click handler
 */
async function onCVDownloadButtonClick() {
    if (animatingCVDownloadButton) return;
    animatingCVDownloadButton = true;

    // ---

    cvDownloadButton.classList.add("clicked");

    await transition(
        cvDownloadButton.children[0],
        { opacity: 1 },
        { opacity: 0 },
        150,
    );
    cvDownloadButton.classList.add("hidden");
    cvDownloadButton.classList.remove("clicked");
    cvDownloadButton.children[0].style.opacity = 0;

    // ---

    cvDownloadOptions.classList.remove("hidden");

    await Promise.all([
        transition(
            cvDownloadOptions.children[0],
            { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
            { borderTopRightRadius: "10px", borderBottomRightRadius: "10px" },
            50,
        ),
        transition(
            cvDownloadOptions.children[1],
            { borderRadius: 0 },
            { borderRadius: "5px" },
            50,
        ),
        transition(
            cvDownloadOptions.children[2],
            { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
            { borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" },
            50,
        ),
    ]);

    await transition(cvDownloadOptions, { gap: 0 }, { gap: "10px" }, 50);

    await Promise.all([
        transition(
            cvDownloadOptions.children[0].children[0],
            { opacity: 0 },
            { opacity: 1 },
            150,
        ),
        transition(
            cvDownloadOptions.children[1].children[0],
            { opacity: 0 },
            { opacity: 1 },
            150,
        ),
        transition(
            cvDownloadOptions.children[2].children[0],
            { opacity: 0 },
            { opacity: 1 },
            150,
        ),
    ]);

    // ---

    animatingCVDownloadButton = false;
}

/**
 * CV download option click handler
 */
async function onCVDownloadOptionClick() {
    if (animatingCVDownloadButton) return;
    animatingCVDownloadButton = true;

    // ---

    cvDownloadOptions.classList.add("clicked");

    await Promise.all([
        transition(
            cvDownloadOptions.children[0].children[0],
            { opacity: 1 },
            { opacity: 0 },
            150,
        ),
        transition(
            cvDownloadOptions.children[1].children[0],
            { opacity: 1 },
            { opacity: 0 },
            150,
        ),
        transition(
            cvDownloadOptions.children[2].children[0],
            { opacity: 1 },
            { opacity: 0 },
            150,
        ),
    ]);

    await transition(cvDownloadOptions, { gap: "10px" }, { gap: 0 }, 50);

    await Promise.all([
        transition(
            cvDownloadOptions.children[0],
            { borderTopRightRadius: "10px", borderBottomRightRadius: "10px" },
            { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
            50,
        ),
        transition(
            cvDownloadOptions.children[1],
            { borderRadius: "5px" },
            { borderRadius: 0 },
            50,
        ),
        transition(
            cvDownloadOptions.children[2],
            { borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" },
            { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
            50,
        ),
    ]);

    cvDownloadOptions.classList.add("hidden");
    cvDownloadOptions.classList.remove("clicked");

    // ---

    cvDownloadButton.classList.remove("hidden");

    await transition(
        cvDownloadButton.children[0],
        { opacity: 0 },
        { opacity: 1 },
        150,
    );

    // ---

    animatingCVDownloadButton = false;
}
