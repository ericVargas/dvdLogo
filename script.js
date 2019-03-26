function bounce() {
    let logo = document.querySelector(".logo");
    let pos = 0;
    let id = setInterval(frame, 10);
    function frame() {
        if (pos == 450) {
            clearInterval(id);
        } else {
            pos++;
            logo.style.top = pos + "px";
            logo.style.left = pos + "px";
        }
    }
}