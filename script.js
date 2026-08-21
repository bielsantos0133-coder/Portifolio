// MENU MOBILE

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// FECHAR MENU AO CLICAR EM UM LINK

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ANIMAÇÃO AO APARECER NA TELA

const elements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .about-card"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });
    },
    {
        threshold: 0.1
    }
);

elements.forEach(element => {
    element.classList.add("hidden");
    observer.observe(element);
});

