document.querySelectorAll('.accordion-header').forEach(item => {
    item.addEventListener('click', function () {
        let content = this.nextElementSibling;
        this.classList.toggle('active');

        if (content.style.height && content.style.height !== '0px') {
            content.style.height = '0';
            content.style.padding = "0 15px";
        } else {
            content.style.height = content.scrollHeight + "px"; // Плавно открывается на высоту контента
            content.style.padding = "15px";
        }
    });
});


// i
document.addEventListener("DOMContentLoaded", function() {
    const infoBtn = document.getElementById("info-btn");
    const modal = document.getElementById("info-modal");
    const closeBtn = modal.querySelector(".close");

    infoBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
