let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.5 });

let elementos = document.querySelectorAll(".transition-element");

elementos.forEach((elemento) => {
    observer.observe(elemento);
});
