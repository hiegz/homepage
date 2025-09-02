import $ from "jquery";
import clock from "./clock.js";

import login from "./login.js";

import "./style.css";

// import index.html so that webpack can watch and refresh the file whenever it is changed
if (process.env.NODE_ENV === "development") {
    import("./index.html");
}

window.addEventListener("load", async function () {
    $("#wallpaper").css("display", "initial");
    clock.start();

    await login.load();
});
