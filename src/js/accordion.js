window.addEventListener('load', function () {

    const accordion = document.getElementsByClassName("accordion");
    let i;

    if (!accordion) {
        return null;
    } else {
        for (i = 0; i < accordion.length; i++) {
            accordion[i].addEventListener("click", function () {
                this.classList.toggle("active");
                const panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    }
});
