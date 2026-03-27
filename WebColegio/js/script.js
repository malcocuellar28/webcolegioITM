// =========================
// MENÚ HAMBURGUESA
// =========================
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const heroMainFrame = document.querySelector(".hero-image-frame");
const heroMainImage = document.getElementById("heroMainImage");
const heroMainDots = document.getElementById("heroMainDots");
const heroSeasonalNote = document.getElementById("heroSeasonalNote");
const heroCopy = document.querySelector(".hero-copy");

const HERO_MAIN_SLIDES = [
    {
        image: "img/hero-slides/imagenColegioPrin.avif",
        alt: "Vista principal del Instituto Técnico Morazán",
        note: "Formación integral con identidad institucional, acompañamiento cercano y visión de futuro para cada estudiante."
    },
    {
        image: "img/hero-slides/slide-1.jpg",
        alt: "Actividad institucional destacada del Instituto Técnico Morazán",
        note: "Admisiones 2026: conoce nuestros programas y prepárate con tiempo para el próximo período académico."
    },
    {
        image: "img/hero-slides/slide-2.jpg",
        alt: "Vida estudiantil en el Instituto Técnico Morazán",
        note: "Vida estudiantil: experiencias que fortalecen la convivencia, la identidad y el sentido de pertenencia institucional."
    },
    {
        image: "img/hero-slides/slide-3.jpg",
        alt: "Proyección académica del Instituto Técnico Morazán",
        note: "Proyección académica: una formación que impulsa metas universitarias, técnicas y profesionales con bases sólidas."
    }
];

function prefersReducedMotion() {
    return reduceMotionQuery.matches;
}

function getScrollBehavior() {
    return prefersReducedMotion() ? "auto" : "smooth";
}

function syncHeaderHeight() {
    if (!header) {
        return;
    }

    document.documentElement.style.setProperty("--header-height", `${header.offsetHeight}px`);
}

syncHeaderHeight();
window.addEventListener("resize", syncHeaderHeight);

if (heroMainFrame && heroMainImage && heroMainDots && heroSeasonalNote && heroCopy) {
    let currentHeroMainSlide = 0;
    let heroMainInterval;

    function renderHeroMainDots() {
        heroMainDots.innerHTML = "";

        HERO_MAIN_SLIDES.forEach((_, index) => {
            const dot = document.createElement("button");
            dot.type = "button";
            dot.className = "hero-support-dot";
            dot.classList.toggle("is-active", index === currentHeroMainSlide);
            dot.setAttribute("aria-label", `Ver imagen destacada ${index + 1}`);
            dot.addEventListener("click", () => {
                goToHeroMainSlide(index);
                restartHeroMainAutoplay();
            });
            heroMainDots.appendChild(dot);
        });
    }

    function applyHeroMainSlide(index) {
        const slide = HERO_MAIN_SLIDES[index];

        heroMainImage.src = slide.image;
        heroMainImage.alt = slide.alt;
        heroSeasonalNote.textContent = slide.note;
        currentHeroMainSlide = index;
        renderHeroMainDots();
    }

    function goToHeroMainSlide(index) {
        if (index === currentHeroMainSlide) {
            return;
        }

        heroMainFrame.classList.add("is-switching");
        heroCopy.classList.add("is-switching");

        window.setTimeout(() => {
            applyHeroMainSlide(index);
            heroMainFrame.classList.remove("is-switching");
            heroCopy.classList.remove("is-switching");
        }, prefersReducedMotion() ? 0 : 220);
    }

    function nextHeroMainSlide() {
        const nextIndex = (currentHeroMainSlide + 1) % HERO_MAIN_SLIDES.length;
        goToHeroMainSlide(nextIndex);
    }

    function restartHeroMainAutoplay() {
        window.clearInterval(heroMainInterval);

        if (prefersReducedMotion()) {
            return;
        }

        heroMainInterval = window.setInterval(nextHeroMainSlide, 4300);
    }

    applyHeroMainSlide(currentHeroMainSlide);
    restartHeroMainAutoplay();
    reduceMotionQuery.addEventListener("change", restartHeroMainAutoplay);
}

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    toggle.classList.toggle("active");

    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", !expanded);
});


// =========================
// ANIMACIONES AL SCROLL
// =========================
const fadeElements = Array.from(document.querySelectorAll(".fade-in"));
const staggerElements = Array.from(document.querySelectorAll(".card, .career-card, .gallery-item, .event-item, .stat-card, .faq-item, .aviso-item"));

function assignStaggerIndices(elements) {
    const groups = new Map();

    elements.forEach(element => {
        const parent = element.parentElement;

        if (!parent) {
            return;
        }

        element.classList.add("reveal-on-scroll");

        if (!groups.has(parent)) {
            groups.set(parent, []);
        }

        groups.get(parent).push(element);
    });

    groups.forEach(group => {
        group.forEach((element, index) => {
            element.style.setProperty("--stagger-index", index);
        });
    });
}

assignStaggerIndices(staggerElements);

const animatedElements = [...new Set([...fadeElements, ...staggerElements])];

function revealImmediately(elements) {
    elements.forEach(element => element.classList.add("visible"));
}

if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
    revealImmediately(animatedElements);
} else {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px"
    });

    animatedElements.forEach(element => observer.observe(element));
}


// =========================
// SCROLL SUAVE + BREADCRUMB
// =========================
const breadcrumbCurrent = document.getElementById("breadcrumb-current");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: getScrollBehavior()
            });

            const parentSection = target.closest("section");
            const sectionName = parentSection?.querySelector("h2")?.textContent ||
                               target.querySelector("h2")?.textContent || 
                               target.querySelector("h1")?.textContent || 
                               target.querySelector("h3")?.textContent ||
                               target.id.charAt(0).toUpperCase() + target.id.slice(1);
            breadcrumbCurrent.textContent = sectionName;
        }

        nav.classList.remove("active");
        toggle.classList.remove("active");
    });
});


// =========================
// BOTÓN VOLVER ARRIBA + PROGRESS BAR
// =========================
const scrollTopBtn = document.getElementById("scrollTop");
const progressBar = document.getElementById("progressBar");
const heroSection = document.querySelector(".hero");

if (heroSection) {
    heroSection.style.setProperty("--hero-student-progress", "0");
}

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollTopBtn.classList.add("visible");
    } else {
        scrollTopBtn.classList.remove("visible");
    }

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + "%";

    if (heroSection) {
        const heroRevealDistance = Math.max(heroSection.offsetHeight * 0.45, 180);
        const heroStudentProgress = Math.min(Math.max(scrollTop / heroRevealDistance, 0), 1);
        heroSection.style.setProperty("--hero-student-progress", heroStudentProgress.toFixed(3));
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: getScrollBehavior()
    });
});


// =========================
// TOGGLE TEMA OSCURO
// =========================
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

function restartSvgAnimation(svgElement) {
    if (!svgElement || !svgElement.parentNode) {
        return svgElement;
    }

    const replacement = svgElement.cloneNode(true);
    svgElement.parentNode.replaceChild(replacement, svgElement);
    return replacement;
}

function getVisibleThemeIcon() {
    return html.getAttribute("data-theme") === "dark"
        ? themeToggle.querySelector(".icon-moon")
        : themeToggle.querySelector(".icon-sun");
}

function animateThemeToggleIcon() {
    if (!themeToggle) {
        return;
    }

    themeToggle.classList.add("is-animating");
    restartSvgAnimation(getVisibleThemeIcon());
    window.clearTimeout(themeToggle.animationTimer);
    themeToggle.animationTimer = window.setTimeout(() => {
        themeToggle.classList.remove("is-animating");
    }, 700);
}

themeToggle.addEventListener("click", () => {
    const isDark = html.getAttribute("data-theme") === "dark";
    html.setAttribute("data-theme", isDark ? "light" : "dark");
    localStorage.setItem("theme", isDark ? "light" : "dark");
    window.requestAnimationFrame(syncHeaderHeight);
    window.requestAnimationFrame(animateThemeToggleIcon);
    showToast(isDark ? "Tema claro activado" : "Tema oscuro activado", "success");
});

themeToggle.addEventListener("mouseenter", animateThemeToggleIcon);
themeToggle.addEventListener("focus", animateThemeToggleIcon);

if (localStorage.getItem("theme") === "dark") {
    html.setAttribute("data-theme", "dark");
    window.requestAnimationFrame(syncHeaderHeight);
}


// =========================
// CONTADOR ANIMADO
// =========================
const statNumbers = document.querySelectorAll(".stat-number");

function getCompletedYearsSince(dateString) {
    const today = new Date();
    const foundationDate = new Date(`${dateString}T00:00:00`);

    if (Number.isNaN(foundationDate.getTime())) {
        return null;
    }

    let years = today.getFullYear() - foundationDate.getFullYear();
    const hasHadAnniversaryThisYear =
        today.getMonth() > foundationDate.getMonth() ||
        (today.getMonth() === foundationDate.getMonth() && today.getDate() >= foundationDate.getDate());

    if (!hasHadAnniversaryThisYear) {
        years -= 1;
    }

    return Math.max(years, 0);
}

statNumbers.forEach(element => {
    const foundationDate = element.getAttribute("data-foundation");

    if (!foundationDate) {
        return;
    }

    const years = getCompletedYearsSince(foundationDate);

    if (years !== null) {
        element.setAttribute("data-target", years);
    }
});

function animateStatNumber(element) {
    const target = parseInt(element.getAttribute("data-target"), 10);

    if (Number.isNaN(target)) {
        return;
    }

    if (prefersReducedMotion()) {
        element.textContent = target;
        return;
    }

    const duration = 1800;
    const start = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.round(target * easedProgress);

        element.textContent = currentValue;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
    statNumbers.forEach(animateStatNumber);
} else {
    const countObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            animateStatNumber(entry.target);
            countObserver.unobserve(entry.target);
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(element => countObserver.observe(element));
}


// =========================
// FAQ ACORDEÓN
// =========================
document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
        const item = btn.parentElement;
        const answer = item.querySelector(".faq-answer");
        const currentIconLine = btn.querySelector(".faq-icon polyline");
        const isActive = item.classList.contains("active");

        document.querySelectorAll(".faq-item").forEach(faqItem => {
            faqItem.classList.remove("active");

            const question = faqItem.querySelector(".faq-question");
            const faqAnswer = faqItem.querySelector(".faq-answer");
            const faqIconLine = question.querySelector(".faq-icon polyline");

            question.setAttribute("aria-expanded", "false");
            faqAnswer.style.maxHeight = "0px";
            faqIconLine.setAttribute("points", "6 9 12 15 18 9");
        });

        if (!isActive) {
            item.classList.add("active");
            btn.setAttribute("aria-expanded", "true");
            answer.style.maxHeight = `${answer.scrollHeight}px`;
            currentIconLine.setAttribute("points", "6 15 12 9 18 15");
        }
    });
});


// =========================
// MODAL GALERÍA
// =========================
const modal = document.getElementById("galleryModal");
const modalImage = document.getElementById("modalImage");
const modalClose = document.querySelector(".modal-close");

document.querySelectorAll(".gallery-item").forEach(item => {
    let galleryOverlayIcon = item.querySelector(".gallery-overlay-icon");

    function animateGalleryOverlayIcon() {
        galleryOverlayIcon = restartSvgAnimation(galleryOverlayIcon);
    }

    item.addEventListener("mouseenter", animateGalleryOverlayIcon);
    item.addEventListener("focus", animateGalleryOverlayIcon);

    item.addEventListener("click", () => {
        const imgSrc = item.querySelector("img").src;
        const imgAlt = item.querySelector("img").alt;
        modalImage.src = imgSrc;
        modalImage.alt = imgAlt;
        modal.classList.add("active");
        document.body.classList.add("modal-open");
    });
});

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

function closeModal() {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("active")) {
        closeModal();
    }
});


// =========================
// CARRUSEL TESTIMONIOS
// =========================
const testimonialsTrack = document.getElementById("testimonialsTrack");
const testimonialDotsContainer = document.getElementById("testimonialDots");
const testimonialPrevBtn = document.querySelector(".testimonial-btn.prev");
const testimonialNextBtn = document.querySelector(".testimonial-btn.next");

if (testimonialsTrack && testimonialDotsContainer && testimonialPrevBtn && testimonialNextBtn) {
    const testimonialCards = Array.from(testimonialsTrack.querySelectorAll(".testimonial-card"));
    let currentSlide = 0;
    let isProgrammaticScroll = false;
    let scrollSettleTimer;

    testimonialCards.forEach((_, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "testimonial-dot";
        dot.setAttribute("aria-label", `Ir al testimonio ${index + 1}`);
        dot.classList.toggle("active", index === 0);
        dot.addEventListener("click", () => goToSlide(index));
        testimonialDotsContainer.appendChild(dot);
    });

    const testimonialDots = Array.from(testimonialDotsContainer.querySelectorAll(".testimonial-dot"));

    function getTestimonialCardWidth() {
        return testimonialCards[0]?.getBoundingClientRect().width || 0;
    }

    function updateDots() {
        testimonialDots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentSlide);
        });
    }

    function getClosestSlide() {
        const cardWidth = getTestimonialCardWidth();

        if (!cardWidth) {
            return currentSlide;
        }

        return Math.max(0, Math.min(Math.round(testimonialsTrack.scrollLeft / cardWidth), testimonialCards.length - 1));
    }

    function goToSlide(index) {
        const boundedIndex = Math.max(0, Math.min(index, testimonialCards.length - 1));
        const cardWidth = getTestimonialCardWidth();

        currentSlide = boundedIndex;
        isProgrammaticScroll = true;
        window.clearTimeout(scrollSettleTimer);
        testimonialsTrack.scrollTo({
            left: cardWidth * boundedIndex,
            behavior: getScrollBehavior()
        });
        updateDots();

        scrollSettleTimer = window.setTimeout(() => {
            isProgrammaticScroll = false;
            currentSlide = getClosestSlide();
            updateDots();
        }, prefersReducedMotion() ? 0 : 420);
    }

    testimonialPrevBtn.addEventListener("click", () => {
        goToSlide(currentSlide - 1);
    });

    testimonialNextBtn.addEventListener("click", () => {
        goToSlide(currentSlide + 1);
    });

    testimonialsTrack.addEventListener("scroll", () => {
        window.clearTimeout(scrollSettleTimer);

        if (isProgrammaticScroll) {
            scrollSettleTimer = window.setTimeout(() => {
                isProgrammaticScroll = false;
                currentSlide = getClosestSlide();
                updateDots();
            }, prefersReducedMotion() ? 0 : 140);
            return;
        }

        scrollSettleTimer = window.setTimeout(() => {
            const newSlide = getClosestSlide();

            if (newSlide !== currentSlide) {
                currentSlide = newSlide;
                updateDots();
            }
        }, prefersReducedMotion() ? 0 : 120);
    });

    window.addEventListener("resize", () => {
        goToSlide(currentSlide);
    });
}


// =========================
// TOAST NOTIFICATIONS
// =========================
const toastContainer = document.getElementById("toastContainer");

function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    const iconPath = type === "success" ? "img/icons/check.svg" : "img/icons/error.svg";
    toast.innerHTML = `
        <span class="toast-icon">
            <img src="${iconPath}" alt="" aria-hidden="true">
        </span>
        <span class="toast-message">${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("hiding");
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}


// =========================
// VALIDACIÓN DE FORMULARIO
// =========================
const form = document.getElementById("contact-form");

function showError(input, message) {
    const errorSpan = input.nextElementSibling;
    errorSpan.textContent = message;
    input.setAttribute("aria-invalid", "true");
    input.classList.add("error");
}

function clearError(input) {
    const errorSpan = input.nextElementSibling;
    errorSpan.textContent = "";
    input.removeAttribute("aria-invalid");
    input.classList.remove("error");
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
    return /^[\d\s()+-]{8,}$/.test(phone.trim());
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    let isValid = true;
    const nombre = form.querySelector("#nombre");
    const telefono = form.querySelector("#telefono");
    const email = form.querySelector("#email");
    const mensaje = form.querySelector("#mensaje");

    clearError(nombre);
    clearError(telefono);
    clearError(email);
    clearError(mensaje);

    if (!nombre.value.trim()) {
        showError(nombre, "El nombre es requerido");
        isValid = false;
    }

    if (!telefono.value.trim()) {
        showError(telefono, "El celular es requerido");
        isValid = false;
    } else if (!validatePhone(telefono.value)) {
        showError(telefono, "Ingresa un celular válido");
        isValid = false;
    }

    if (!email.value.trim()) {
        showError(email, "El correo es requerido");
        isValid = false;
    } else if (!validateEmail(email.value)) {
        showError(email, "Ingresa un correo válido");
        isValid = false;
    }

    if (!mensaje.value.trim()) {
        showError(mensaje, "El mensaje es requerido");
        isValid = false;
    }

    if (isValid) {
        const formData = new FormData(form);
        console.log("Datos enviados:", Object.fromEntries(formData));
        
        showToast("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.", "success");
        form.reset();
    } else {
        showToast("Por favor completa todos los campos correctamente.", "error");
    }
});

form.querySelectorAll("input, textarea").forEach(input => {
    input.addEventListener("input", () => clearError(input));
});


// =========================
// LOADER
// =========================
const loader = document.getElementById("loader");
let loaderHidden = false;

function hideLoader() {
    if (!loader || loaderHidden) {
        return;
    }

    loaderHidden = true;
    loader.classList.add("hidden");
}

function queueLoaderHide() {
    window.setTimeout(hideLoader, prefersReducedMotion() ? 0 : 350);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", queueLoaderHide, { once: true });
} else {
    queueLoaderHide();
}

window.addEventListener("load", hideLoader, { once: true });


// =========================
// HORARIO DE ATENCIÓN
// =========================
const horarioStatus = document.getElementById("horarioStatus");
const statusDot = horarioStatus.querySelector(".status-dot");
const statusText = horarioStatus.querySelector(".status-text");

function updateHorario() {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentTime = hour + minute / 60;

    let isOpen = false;
    let message = "";

    if (day >= 1 && day <= 5) {
        if (currentTime >= 7 && currentTime < 16) {
            isOpen = true;
            message = "Abierto ahora";
        } else {
            message = "Cerrado (abre 7:00 AM)";
        }
    } else if (day === 6) {
        if (currentTime >= 7 && currentTime < 12) {
            isOpen = true;
            message = "Abierto ahora";
        } else {
            message = "Cerrado (Sáb 7AM-12PM)";
        }
    } else {
        message = "Cerrado (domingos)";
    }

    if (isOpen) {
        horarioStatus.classList.remove("closed");
        statusText.textContent = message;
    } else {
        horarioStatus.classList.add("closed");
        statusText.textContent = message;
    }
}

updateHorario();
setInterval(updateHorario, 60000);


// =========================
// CONTADOR REGRESIVO
// =========================
const countdownDays = document.getElementById("days");
const countdownHours = document.getElementById("hours");
const countdownMinutes = document.getElementById("minutes");
const countdownSeconds = document.getElementById("seconds");
const countdownSubtitle = document.getElementById("countdown-subtitle");
const countdownMessage = document.getElementById("countdown-message");

// Configura aqui los eventos del contador regresivo.
// Cambia subtitle y message si quieres otro texto.
// Cambia la fecha dentro de getDate(year) para actualizar cada evento.
const COUNTDOWN_EVENTS = [
    {
        key: "graduation",
        subtitle: "para la próxima Graduación",
        message: "Cuenta regresiva para nuestra ceremonia de graduación.",
        // Recuerda: en JavaScript los meses van de 0 a 11.
        // 0 = enero, 1 = febrero, 2 = marzo, 3 = abril, 4 = mayo, 5 = junio,
        // 6 = julio, 7 = agosto, 8 = septiembre, 9 = octubre, 10 = noviembre, 11 = diciembre.
        // Graduacion: mes 10 = noviembre, dia 30, hora 3:30 PM.
        getDate(year) {
            return new Date(year, 10, 30, 15, 30, 0, 0);
        }
    },
    {
        key: "classes",
        subtitle: "para el próximo Inicio de Clases",
        message: "Prepárate para el inicio de un nuevo ciclo académico.",
        // Inicio de clases: toma el siguiente lunes a partir del 10 de febrero a las 7:00 AM.
        getDate(year) {
            const date = getNextMonday(new Date(year, 1, 10));
            date.setHours(7, 0, 0, 0);
            return date;
        }
    }
];

function getNextMonday(date) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? 1 : 8);
    d.setDate(diff);
    return d;
}

function getTargetDate() {
    const now = new Date();

    return COUNTDOWN_EVENTS
        .map(event => {
            let date = event.getDate(now.getFullYear());

            if (date <= now) {
                date = event.getDate(now.getFullYear() + 1);
            }

            return {
                ...event,
                date
            };
        })
        .sort((firstEvent, secondEvent) => firstEvent.date - secondEvent.date)[0];
}

function updateCountdown() {
    const target = getTargetDate();
    const now = new Date().getTime();
    const distance = target.date.getTime() - now;

    countdownSubtitle.textContent = target.subtitle;
    countdownMessage.textContent = target.message;

    if (distance < 0) {
        countdownDays.textContent = "00";
        countdownHours.textContent = "00";
        countdownMinutes.textContent = "00";
        countdownSeconds.textContent = "00";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownDays.textContent = String(days).padStart(2, "0");
    countdownHours.textContent = String(hours).padStart(2, "0");
    countdownMinutes.textContent = String(minutes).padStart(2, "0");
    countdownSeconds.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);


// =========================
// BOTONES COMPARTIR
// =========================
function sharePage(platform) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    const text = encodeURIComponent("Mira esta página del Instituto Técnico Morazán");

    let shareUrl = "";

    switch(platform) {
        case "facebook":
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case "twitter":
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
            break;
        case "whatsapp":
            shareUrl = `https://wa.me/?text=${text}%20${url}`;
            break;
    }

    window.open(shareUrl, "_blank", "width=600,height=400");
}
