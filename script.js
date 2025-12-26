window.addEventListener("scroll", () => {
    document.querySelectorAll(".fade").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.style.opacity = 1;
        }
    });
});
