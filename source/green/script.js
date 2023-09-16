function createObserver(elements) {
    let observer;

    let options = {
        threshold: .3,
    };

    observer = new IntersectionObserver(handleIntersect, options);
    elements.forEach((el) => {
        observer.observe(el);
    });
}

function handleIntersect(entries, _observer) {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}

window.addEventListener(
    "load",
    () => {
        const elements = document.querySelectorAll(".animate-in");

        if ("IntersectionObserver" in window) {
            createObserver(elements);
        } else {
            elements.forEach((el) => {
                el.classList.add("show");
            });
        }

        const faqLinks = document.querySelectorAll(".faq-link");
        faqLinks.forEach((link) =>
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const container = link.nextElementSibling;
                const icon = link.querySelector(".faq-icon");
                if (container.classList.contains("open")) {
                    container.classList.remove("open");
                    icon.classList.remove("open");
                } else {
                    container.classList.add("open");
                    icon.classList.add("open");
                }
            })
        );

        const wrappernav = document.querySelector(".wrappernav");
        if (document.documentElement.scrollTop > 68) {
            wrappernav.classList.add("scrolled");
        }
        window.addEventListener(
            "scroll",
            () => {
                if (document.documentElement.scrollTop > 68) {
                    wrappernav.classList.add("scrolled");
                } else {
                    wrappernav.classList.remove("scrolled");
                }
            },
            { passive: true }
        );
    },
    false
);

const buyDialog = document.getElementById("buy-dialog");
const buyFabs = document.querySelectorAll(".buy");

buyFabs.forEach(btn => btn.addEventListener("click", (e) => {
    e.preventDefault();
    showBuyDialog();
}));

function showBuyDialog() {
    buyDialog.style.display = "flex";
}

function closeDialog() {
    buyDialog.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === buyDialog) {
        closeDialog();
    }
};

if (document.location.search === "?order") {
    showBuyDialog();
}

const menuMobileBtn = document.querySelector(".menu-mobile");
const mobileMenu = document.querySelector(".w-nav-overlay");
const mobileMenuLinks = document.querySelectorAll(".w-nav-overlay a");

menuMobileBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (mobileMenu.classList.contains("open")) {
        mobileMenu.classList.remove("open");
        menuMobileBtn.classList.remove("open");
    } else {
        mobileMenu.classList.add("open");
        menuMobileBtn.classList.add("open");
    }
});

mobileMenuLinks.forEach((link) =>
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        menuMobileBtn.classList.remove("open");
    })
);