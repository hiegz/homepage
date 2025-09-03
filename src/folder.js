import $ from "jquery";
import { WindowComponent } from "./components/window.js";
import folderViewHtml from "./folder/view.html";
import fileViewHtml from "./folder/file.html";

function file(iconClassList, name, date, onclick) {
    const $fileView = $(fileViewHtml);
    for (let i = 0; i < iconClassList.length; ++i) {
        $fileView.find("i").addClass(iconClassList[i]);
    }
    $fileView.find(".file-name").text(name);
    $fileView.find(".file-date").text(date);
    $fileView.on("click", onclick);
    return $fileView;
}

const win = new WindowComponent();

win.title = "hiegz";
win.onclose = () => {
    win.detach();
};

const $folderView = $(folderViewHtml);
win.frame = $folderView;

$folderView
    .find("table tr")
    .last()
    .before(
        file(
            // prettier-ignore
            ["bi", "bi-github"],
            "GitHub",
            "03-Sep-25 12:23",
            (_) => {
                $("<a>")
                    .prop({
                        target: "_blank",
                        href: "https://github.com/hiegz",
                    })
                    .get(0)
                    .click();
            },
        ),
    );

$folderView
    .find("table tr")
    .last()
    .before(
        file(
            ["bi", "bi-linkedin", "text-[#0366c3]"],
            "LinkedIn",
            "03-Sep-25 14:53",
            (_) => {
                $("<a>")
                    .prop({
                        target: "_blank",
                        href: "https://linkedin.com/in/hiegz",
                    })
                    .get(0)
                    .click();
            },
        ),
    );

function open() {
    win.appendTo("#desktop");
    win.center();
}

function close() {}

export default { open };
