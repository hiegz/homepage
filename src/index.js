import "bootstrap-icons/font/bootstrap-icons.css";

import $ from "jquery";
import clock from "./clock.js";

import login from "./login.js";
import iconGrid from "./icon-grid.js";
import folder from "./folder.js";

import "./style.css";

// import index.html so that webpack can watch and refresh the file whenever it is changed
if (process.env.NODE_ENV === "development") {
    import("./index.html");
}

window.addEventListener("load", async function () {
    $("#wallpaper").css("display", "initial");
    clock.start();

    await login();

    iconGrid.$view.appendTo("#desktop");
});
