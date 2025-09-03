import $ from "jquery";
import viewHtml from "./window/view.html";

export class WindowComponent {
    /** @type {JQuery<HTMLElement>} */
    #$view;
    #$title;
    #$titleBar;
    #$closeButton;
    #$container;

    constructor() {
        this.#$view = $(viewHtml);
        this.#$titleBar = this.#$view.find(".title-bar");
        this.#$title = this.#$view.find(".title");
        this.#$closeButton = this.#$view.find(".close-button");
        this.#$container = this.#$view.find(".window-container");

        this.#$titleBar.on("mousedown", this.#onMouseDown);
        this.#$closeButton.on("mousedown", (event) => event.stopPropagation());
    }

    appendTo(parent) {
        this.#$view.appendTo(parent);
        $(window).on("resize", this.#onResize);
    }

    detach() {
        $(window).off("resize", this.#onResize);
        this.#$view.detach();
    }

    // prettier-ignore
    center() {
        const parent  = this.#$view.parent().get(0).getBoundingClientRect();
        const node    = this.#$view.get(0).getBoundingClientRect();
        const centerX = parent.width / 2;
        const centerY = parent.height / 2;

        const newX    = Math.max(parent.left, centerX - node.width / 2);
        const newY    = Math.max(parent.top,  centerY - node.height / 2);

        this.#$view.css("top", `${newY - parent.top}px`);
        this.#$view.css("left", `${newX - parent.left}px`);
    }

    /** @param {function(MouseEvent): void} callback */
    set onclose(callback) {
        this.#$closeButton.off("click").on("click", callback);
    }

    /** @param {string} value */
    set title(value) {
        this.#$title.text(value);
    }

    /** @param {any} value */
    set frame(value) {
        this.#$container.empty().append(value);
    }

    /* */

    #x;
    #y;

    // prettier-ignore
    /** @param {} event */
    #onResize = (_) => {
        const parent = this.#$view.parent().get(0).getBoundingClientRect();
        const node = this.#$view.get(0).getBoundingClientRect();

        let newX, newY;
        newX = node.left;
        newY = node.top;

        if (newX < parent.left)
            newX = parent.left;
        if (newY < parent.top)
            newY = parent.top;
        if (newX + node.width > parent.right)
            newX = parent.right - node.width;
        if (newY + node.height >= parent.bottom)
            newY = parent.bottom - node.height;

        this.#$view.css("top", `${newY - parent.top}px`);
        this.#$view.css("left", `${newX - parent.left}px`);
    };

    /** @param {MouseEvent} event */
    #onMouseDown = (event) => {
        this.#x = event.clientX;
        this.#y = event.clientY;

        this.#$view.parent().on("mouseup",   this.#onMouseUp); // prettier-ignore
        this.#$view.parent().on("mousemove", this.#onMouseMove);
    };

    // prettier-ignore
    /** @param {MouseEvent} event */
    #onMouseMove = (event) => {
        const parent = this.#$view.parent().get(0).getBoundingClientRect();
        const node   = this.#$view.get(0).getBoundingClientRect();

        const startX = this.#x;
        const   endX = event.clientX;
        const  diffX = endX - startX;
        const startY = this.#y;
        const   endY = event.clientY;
        const  diffY = endY - startY;

        this.#x      = endX;
        this.#y      = endY;

        let newX, newY;
        newX = node.left + diffX;
        newY = node.top  + diffY;

        if (newX < parent.left)
            newX = parent.left;
        if (newX + node.width > parent.right)
            newX = parent.right - node.width;
        if (newY < parent.top)
            newY = parent.top;
        if (newY + node.height >= parent.bottom)
            newY = parent.bottom - node.height;

        this.#$view.css("top",  `${newY - parent.top}px`);
        this.#$view.css("left", `${newX - parent.left}px`);
    }

    /** @param {MouseEvent} event */
    #onMouseUp = (_) => {
        this.#$view.parent().off("mouseup",   this.#onMouseUp); // prettier-ignore
        this.#$view.parent().off("mousemove", this.#onMouseMove);
    };
}

export default { WindowComponent };
