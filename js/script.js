    var link = document.querySelector(".form-button");
    var popup = document.querySelector(".form");

    link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if (popup.classList.contains("modal-show")) {
                popup.classList.remove("modal-show");
                }
        }
    });