import "./style.css";

// import index.html so that webpack can watch and refresh the file whenever it is changed
if (process.env.NODE_ENV === "development") {
    import("./index.html");
}

window.addEventListener("load", async function () {});
