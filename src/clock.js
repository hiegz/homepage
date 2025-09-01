import $ from "jquery";

let timeout = null;

function updateTime() {
    const format = (original) => String(original).padStart(2, "0");

    const date = new Date();
    const month = date.toLocaleString("en-US", { month: "short" });
    const day = format(date.getDay());
    const hours = format(date.getHours());
    const minutes = format(date.getMinutes());

    $("#taskbar-time").html(
        `${month} ${day}` + "&nbsp;" + `${hours}:${minutes}`,
    );
}

function start() {
    updateTime();
    timeout = setTimeout(start, 1000 * 10);
}

export default { start };
