const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);
    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show-menu");
        });
    }
};
showMenu("nav-toggle", "nav-menu");

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav__menu a[href*=" + sectionId + ']').classList.add("active-link");
        } else {
            document.querySelector(".nav__menu a[href*=" + sectionId + ']').classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

function scrollHeader() {
    const header = document.getElementById('header');
    (this.scrollY >= 560) ?
    header.classList.add('scroll-header'):
        header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

function scrollTop() {
    const scrollTop = document.getElementById("scroll-top");
    this.scrollY >= 560 ?
        scrollTop.classList.add("show-scroll") :
        scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

const mixer = mixitup('.portofolio__container', {
    selectors: {
        target: '.portofolio__content'
    },
    animation: {
        duration: 400
    }
});


const linkPortofolio = document.querySelectorAll('.portofolio__item');

function activePortofolio() {
    linkPortofolio.forEach(L => L.classList.remove('active-portofolio'));
    this.classList.add('active-portofolio');
}
linkPortofolio.forEach(L => L.addEventListener('click', activePortofolio));

const swiper = new Swiper('.testimonial__container', {
    spaceBetween: 16,
    loop: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },

    }
});

gsap.from('.home__img', { opacity: 0, duration: 2, delay: .5, x: 60 })
gsap.from('.home__data', { opacity: 0, duration: 2, delay: .8, y: 25 })
gsap.from('.home__greeting, .home__name, .home__profession, .home__button', { opacity: 0, duration: 2, delay: 1, y: 25, ease: 'expo.out', stagger: .2 })

gsap.from('.nav__logo, .nav__toggle', { opacity: 0, duration: 2, delay: 1.5, y: 25, ease: 'expo.out', stagger: .2 })
gsap.from('.nav__item', { opacity: 0, duration: 2, delay: 1.8, y: 25, ease: 'expo.out', stagger: .2 })
gsap.from('.home__social-icon', { opacity: 0, duration: 2, delay: 2.3, y: 25, ease: 'expo.out', stagger: .2 })