document.addEventListener("DOMContentLoaded", () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme") === "dark" ? "dark" : "light";

    document.querySelectorAll('a[href*="index.html#noticias"], a[href*="noticias.html"], a[href*="noticias-pagina-2.html"]').forEach((anchor) => {
        const rawHref = anchor.getAttribute("href");
        const url = new URL(rawHref, window.location.href);

        url.searchParams.set("theme", currentTheme);
        anchor.setAttribute("href", `${url.pathname.split("/").pop()}${url.search}${url.hash}`);
    });

    const newsEntries = Array.from(document.querySelectorAll(".news-entry"));

    if (!newsEntries.length) {
        return;
    }

    function isEntryOpen(entry) {
        return entry.classList.contains("is-open");
    }

    function syncExpandLabel(entry, isOpen = isEntryOpen(entry)) {
        const label = entry.querySelector(".news-expand-link");

        if (!label) {
            return;
        }

        label.textContent = isOpen ? "Leer menos" : "Leer más";
        label.setAttribute("aria-expanded", String(isOpen));
    }

    function openEntry(entry) {
        const body = entry.querySelector(".news-entry-body");

        if (!body) {
            return;
        }

        entry.classList.add("is-open");
        body.style.maxHeight = `${body.scrollHeight + 12}px`;
        syncExpandLabel(entry, true);
    }

    function closeEntry(entry) {
        const body = entry.querySelector(".news-entry-body");

        if (!body) {
            return;
        }

        body.style.maxHeight = `${body.scrollHeight}px`;
        syncExpandLabel(entry, false);

        window.requestAnimationFrame(() => {
            entry.classList.remove("is-open");
            body.style.maxHeight = "0px";
        });
    }

    newsEntries.forEach((entry) => {
        const toggleButton = entry.querySelector(".news-expand-link");
        const body = entry.querySelector(".news-entry-body");

        if (!toggleButton || !body) {
            return;
        }

        if (isEntryOpen(entry)) {
            body.style.maxHeight = `${body.scrollHeight}px`;
        } else {
            body.style.maxHeight = "0px";
        }

        syncExpandLabel(entry);

        toggleButton.addEventListener("click", (event) => {
            event.preventDefault();

            const isOpen = isEntryOpen(entry);

            newsEntries.forEach((otherEntry) => {
                if (otherEntry !== entry && isEntryOpen(otherEntry)) {
                    closeEntry(otherEntry);
                }
            });

            if (isOpen) {
                closeEntry(entry);
            } else {
                openEntry(entry);
            }
        });
    });

        window.addEventListener("resize", () => {
        newsEntries.forEach((entry) => {
            if (!isEntryOpen(entry)) {
                return;
            }

            const body = entry.querySelector(".news-entry-body");

            if (body) {
                body.style.maxHeight = `${body.scrollHeight + 12}px`;
            }
        });
    });
});
