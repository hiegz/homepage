var alertTimeout = null;

function alert(message, timeout) {
    let popup = document.getElementById("popup")
    let content = document.getElementById("popup-content")

    content.innerHTML = message
    popup.style.opacity = "100%"
    popup.style.top = "2vh";

    if (alertTimeout) {
        clearTimeout(alertTimeout)
        alertTimeout = null;
    }

    alertTimeout = setTimeout(() => {
        popup.style.top = "1vh"
        popup.style.opacity = "0%"
    }, timeout);
}

function copyEmailToClipboard() {
    navigator.clipboard.writeText("hello@hiegz.com")
    alert("Email has been copied to clipboard", 2000)
}
