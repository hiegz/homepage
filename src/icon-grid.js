import $ from "jquery";
import iconGridViewHtml from "./icon-grid/view.html";
import iconViewHtml from "./icon-grid/icon.html";

import FolderIcon from "./icon-grid/folder-blue-icon.png";

/** @type {JQuery<HTMLElement>} */
const $view = $(iconGridViewHtml);

function icon(iconSrc, label) {
    const $icon = $(iconViewHtml);
    const $iconImg = $icon.children("img");
    const $iconLabel = $icon.children("p");

    $iconImg.attr("src", iconSrc);
    $iconLabel.text(label);

    return $icon;
}

const $folderIcon = icon(FolderIcon, "hiegz");
$folderIcon.appendTo($view.children().eq(7));

$folderIcon.on("click", async function (event) {
    const folder = (await import("@/folder")).default;
    folder.open();
});

export default { $view };
