// =========================
// MENÚ HAMBURGUESA
// =========================
const HOME_CONTENT = window.SITE_CONTENT?.home || {};

function getFaqChevronIcon() {
    return '<svg class="faq-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>';
}

function getGalleryOverlayIcon() {
    return '<svg class="gallery-overlay-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="#fff" stroke-dasharray="70" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17h-10v-14h20v14Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.36s" values="70;0"/></path><path fill="#fff" d="M10 16h4v0h-4Z"><animate fill="freeze" attributeName="d" begin="0.36s" dur="0.14s" to="M10 16h4v6h-4Z"/></path><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 21h3M12 21h-3"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.22s" to="0"/></path><path stroke-dasharray="4" stroke-dashoffset="4" d="M6 7h2M6 7v2M18 13h-2M18 13v-2"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.62s" dur="0.14s" to="0"/></path></g></svg>';
}

function getContactInlineIcon(type) {
    const icons = {
        location: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6-5.33-6-11a6 6 0 1 1 12 0c0 5.67-6 11-6 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
        clock: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l2.5 2.5"/></svg>',
        phone: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v2a1 1 0 0 1-1.09 1A19.86 19.86 0 0 1 3.08 3.09A1 1 0 0 1 4.06 2h2a1 1 0 0 1 1 .75l.64 2.57a1 1 0 0 1-.27.98l-1.2 1.2a16 16 0 0 0 7.27 7.27l1.2-1.2a1 1 0 0 1 .98-.27l2.57.64a1 1 0 0 1 .75 1Z"/></svg>',
        mail: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7l8 6l8-6"/></svg>'
    };

    return icons[type] || icons.mail;
}

function applySectionCta(sectionKey) {
    const cta = HOME_CONTENT.sectionCtas?.[sectionKey];
    const wrap = document.getElementById(`${sectionKey}CtaWrap`);
    const button = document.getElementById(`${sectionKey}CtaButton`);

    if (!wrap || !button || !cta) {
        return;
    }

    wrap.hidden = !cta.enabled;
    button.textContent = cta.label;
    button.href = cta.href;
    button.className = cta.className;
}

function renderHomeContent() {
    if (!HOME_CONTENT || !document.body || !document.querySelector("main")) {
        return;
    }

    const { hero, stats, about, faq, levels, careers, gallery, notices, events, testimonials, homeNews, contact, footer } = HOME_CONTENT;

    const heroKicker = document.getElementById("heroKicker");
    const heroTitle = document.getElementById("heroTitleIntro");
    const heroLema = document.getElementById("heroLema");
    const heroSubtitle = document.getElementById("heroSubtitle");
    const heroActions = document.getElementById("heroActions");
    const heroHighlights = document.getElementById("heroHighlights");
    const heroMainDotsNode = document.getElementById("heroMainDots");
    const heroStudentFigureImage = document.getElementById("heroStudentFigureImage");
    const heroSeasonalNote = document.getElementById("heroSeasonalNote");
    const heroMainImageNode = document.getElementById("heroMainImage");
    const heroMainImageNextNode = document.getElementById("heroMainImageNext");
    const heroSupportImage = document.getElementById("heroSupportImage");
    const heroSupportLabel = document.getElementById("heroSupportLabel");
    const heroSupportTitle = document.getElementById("heroSupportTitle");
    const heroSupportText = document.getElementById("heroSupportText");

    if (heroKicker && hero) heroKicker.textContent = hero.kicker;
    if (heroTitle && hero) heroTitle.textContent = hero.title;
    if (heroLema && hero) heroLema.textContent = hero.lema;
    if (heroSubtitle && hero) heroSubtitle.textContent = hero.subtitle;
    if (heroActions && hero) {
        heroActions.innerHTML = hero.actions.map((action) => `<a href="${action.href}" class="${action.className}" draggable="false"${action.ariaLabel ? ` aria-label="${action.ariaLabel}"` : ""}>${action.label}</a>`).join("");
    }
    if (heroHighlights && hero) {
        if (hero.highlightsAriaLabel) {
            heroHighlights.setAttribute("aria-label", hero.highlightsAriaLabel);
        }
        heroHighlights.innerHTML = hero.highlights.map((item) => `<span>${item}</span>`).join("");
    }
    if (heroMainDotsNode && hero?.dotsAriaLabel) {
        heroMainDotsNode.setAttribute("aria-label", hero.dotsAriaLabel);
    }
    if (heroStudentFigureImage && hero?.studentFigure) {
        heroStudentFigureImage.src = hero.studentFigure.image;
        heroStudentFigureImage.alt = hero.studentFigure.alt;
    }
    if (heroSupportImage && hero?.supportCard) {
        heroSupportImage.src = hero.supportCard.image;
        heroSupportImage.alt = hero.supportCard.alt;
        heroSupportLabel.textContent = hero.supportCard.label;
        heroSupportTitle.textContent = hero.supportCard.title;
        heroSupportText.textContent = hero.supportCard.text;
    }
    if (hero?.slides?.length) {
        const firstSlide = hero.slides[0];
        if (heroSeasonalNote) heroSeasonalNote.textContent = firstSlide.note;
        if (heroMainImageNode) {
            heroMainImageNode.src = firstSlide.image;
            heroMainImageNode.alt = firstSlide.alt;
        }
        if (heroMainImageNextNode) {
            heroMainImageNextNode.src = firstSlide.image;
        }
    }

    const statsGrid = document.getElementById("statsGrid");
    const statsSectionTitle = document.getElementById("statsSectionTitle");
    const statsSectionIntro = document.getElementById("statsSectionIntro");
    if (statsGrid && stats) {
        statsGrid.innerHTML = stats.map((item) => `<div class="stat-card"><div class="stat-icon"><img src="${item.icon}" alt="" aria-hidden="true"></div><div class="stat-number" data-target="${item.target}"${item.foundation ? ` data-foundation="${item.foundation}"` : ""}${item.prefix ? ` data-prefix="${item.prefix}"` : ""}${item.suffix ? ` data-suffix="${item.suffix}"` : ""}>0</div><div class="stat-label">${item.label}</div></div>`).join("");
    }
    if (statsSectionTitle && HOME_CONTENT.sectionTitles?.stats) statsSectionTitle.textContent = HOME_CONTENT.sectionTitles.stats;
    if (statsSectionIntro && HOME_CONTENT.statsIntro) statsSectionIntro.textContent = HOME_CONTENT.statsIntro;
    applySectionCta("stats");

    if (about) {
        const aboutSectionTitle = document.getElementById("aboutSectionTitle");
        const aboutHighlights = document.getElementById("aboutHighlights");
        const aboutIntro = document.getElementById("aboutIntro");
        const aboutMissionLabel = document.getElementById("aboutMissionLabel");
        const aboutMission = document.getElementById("aboutMission");
        const aboutVisionLabel = document.getElementById("aboutVisionLabel");
        const aboutVision = document.getElementById("aboutVision");
        const aboutVideo = document.getElementById("aboutVideo");
        const aboutVideoPosterLink = document.getElementById("aboutVideoPosterLink");
        const aboutVideoPosterImage = document.getElementById("aboutVideoPosterImage");
        if (aboutSectionTitle) aboutSectionTitle.textContent = about.sectionTitle || HOME_CONTENT.sectionTitles?.about || "Sobre Nosotros";
        if (aboutHighlights) {
            aboutHighlights.innerHTML = (about.highlights || []).map((item) => `<span>${item}</span>`).join("");
        }
        if (aboutIntro) aboutIntro.textContent = about.intro;
        if (aboutMissionLabel) aboutMissionLabel.textContent = about.missionLabel;
        if (aboutMission) aboutMission.textContent = about.mission;
        if (aboutVisionLabel) aboutVisionLabel.textContent = about.visionLabel;
        if (aboutVision) aboutVision.textContent = about.vision;
        if (aboutVideo) {
            aboutVideo.src = about.videoUrl;
            aboutVideo.title = about.videoTitle || "Video Institucional";
        }
        if (aboutVideoPosterLink && aboutVideoPosterImage && about.videoPoster) {
            const posterEnabled = Boolean(about.videoPoster.enabled);
            aboutVideoPosterLink.hidden = !posterEnabled;
            aboutVideo.hidden = posterEnabled;
            if (posterEnabled) {
                aboutVideoPosterLink.href = about.videoPoster.href;
                aboutVideoPosterImage.src = about.videoPoster.image;
                aboutVideoPosterImage.alt = about.videoPoster.alt;
            }
        }
    }
    applySectionCta("about");

    const faqContainer = document.getElementById("faqContainer");
    const faqSectionTitle = document.getElementById("faqSectionTitle");
    const faqIntro = document.getElementById("faqIntro");
    if (faqContainer && faq) {
        faqContainer.innerHTML = faq.map((item) => `<div class="faq-item${item.open ? ' active' : ''}"><button class="faq-question" aria-expanded="${item.open ? 'true' : 'false'}">${item.category ? `<span class="faq-category">${item.category}</span>` : ''}<span>${item.q}</span>${getFaqChevronIcon()}</button><div class="faq-answer"${item.open ? ' style="max-height: 500px;"' : ''}><p>${item.a}</p></div></div>`).join("");
    }
    if (faqSectionTitle && HOME_CONTENT.sectionTitles?.faq) faqSectionTitle.textContent = HOME_CONTENT.sectionTitles.faq;
    if (faqIntro && HOME_CONTENT.faqIntro) faqIntro.textContent = HOME_CONTENT.faqIntro;
    applySectionCta("faq");

    const levelsGrid = document.getElementById("levelsGrid");
    const levelsSectionTitle = document.getElementById("levelsSectionTitle");
    const levelsIntro = document.getElementById("levelsIntro");
    const levelsCtaWrap = document.getElementById("levelsCtaWrap");
    const levelsCtaButton = document.getElementById("levelsCtaButton");
    if (levelsGrid && levels) {
        levelsGrid.innerHTML = levels.map((item) => item.type === "grouped"
            ? `<article class="card nivel-card nivel-card-grouped"><div class="card-image image-rounded"><img src="${item.image}" alt="${item.alt}" loading="lazy"></div><div class="card-content"><span class="nivel-badge">${item.badge}</span><h3>${item.title}</h3><p>${item.text}</p><div class="nivel-subgrid" aria-label="${item.groupAriaLabel || `Grados de ${item.title.toLowerCase()}`}">${item.miniCards.map((mini) => `<article class="nivel-mini-card"><span class="nivel-mini-label">${item.miniCardLabel || "Grado"}</span><strong>${mini}</strong></article>`).join("")}</div></div></article>`
            : `<article class="card nivel-card"><div class="card-image image-rounded"><img src="${item.image}" alt="${item.alt}" loading="lazy"></div><div class="card-content"><span class="nivel-badge">${item.badge}</span><h3>${item.title}</h3><p>${item.text}</p><div class="nivel-highlight-list" aria-label="${item.chipsAriaLabel || `Trayecto de ${item.title.toLowerCase()}`}">${item.chips.map((chip) => `<span>${chip}</span>`).join("")}</div></div></article>`).join("");
    }
    if (levelsSectionTitle && HOME_CONTENT.sectionTitles?.levels) levelsSectionTitle.textContent = HOME_CONTENT.sectionTitles.levels;
    if (levelsIntro && HOME_CONTENT.levelsIntro) levelsIntro.textContent = HOME_CONTENT.levelsIntro;
    if (levelsCtaWrap && levelsCtaButton && HOME_CONTENT.levelsCta) {
        levelsCtaButton.textContent = HOME_CONTENT.levelsCta.label;
        levelsCtaButton.href = HOME_CONTENT.levelsCta.href;
        if (HOME_CONTENT.levelsCta.className) levelsCtaButton.className = HOME_CONTENT.levelsCta.className;
    }

    const careersGrid = document.getElementById("careersGrid");
    const careersSectionTitle = document.getElementById("careersSectionTitle");
    const careersCtaBubble = document.getElementById("careersCtaBubble");
    const careersCtaBot = document.getElementById("careersCtaBot");
    const careersCtaText = document.getElementById("careersCtaText");
    const careersCtaButton = document.getElementById("careersCtaButton");
    if (careersGrid && careers) {
        careersGrid.innerHTML = careers.items.map((item) => `<div class="career-card${item.theme ? ` career-card-${item.theme}` : ""}">${item.featuredBadge ? `<span class="career-featured-badge">${item.featuredBadge}</span>` : ''}<div class="career-icon"><img src="${item.icon}" alt="" aria-hidden="true"></div><span class="career-badge">${item.badge}</span><h3>${item.title}</h3><p>${item.text}</p><ul class="career-points">${item.points.map((point) => `<li>${point}</li>`).join("")}</ul><p class="career-highlight">${item.highlight}</p><span class="career-duration">${item.durationLabel ? `${item.durationLabel}: ` : ""}${item.durationValue || item.duration || ""}</span></div>`).join("");
        if (careers.cta) {
            careersCtaBubble?.setAttribute("aria-label", careers.cta.ariaLabel || "Mensaje destacado de orientación");
            if (careersCtaBot) careersCtaBot.alt = careers.cta.botAlt || careersCtaBot.alt;
            careersCtaText.textContent = careers.cta.text;
            careersCtaButton.textContent = careers.cta.button.label;
            careersCtaButton.href = careers.cta.button.href;
            if (careers.cta.button.className) careersCtaButton.className = careers.cta.button.className;
        }
    }
    if (careersSectionTitle && HOME_CONTENT.sectionTitles?.careers) careersSectionTitle.textContent = HOME_CONTENT.sectionTitles.careers;

    const galleryIntro = document.getElementById("galleryIntro");
    const gallerySectionTitle = document.getElementById("gallerySectionTitle");
    const galleryGridContent = document.getElementById("galleryGridContent");
    const galleryCtaWrap = document.getElementById("galleryCtaWrap");
    const galleryCtaButton = document.getElementById("galleryCtaButton");
    if (galleryIntro && gallery) galleryIntro.textContent = gallery.intro;
    if (galleryGridContent && gallery) {
        const featured = gallery.items.find((item) => item.type === "featured");
        const secondary = gallery.items.filter((item) => item.type !== "featured");
        const renderGalleryItem = (item, index, featuredClass = "") => `<button class="gallery-item ${featuredClass}" type="button" data-src="${item.src}" data-kicker="${item.kicker || ""}" data-description="${item.description || ""}" aria-label="${item.ariaLabel || `Abrir imagen ${item.alt}`}"><img src="${item.src}" alt="${item.alt}" loading="lazy"><div class="gallery-overlay">${getGalleryOverlayIcon()}<div class="gallery-overlay-copy"><span class="gallery-overlay-kicker">${item.kicker}</span><span class="gallery-overlay-text">${item.text}</span></div></div></button>`;
        galleryGridContent.innerHTML = `${renderGalleryItem(featured, 0, "gallery-item-featured")}<div class="gallery-secondary-grid">${secondary.map((item, index) => renderGalleryItem(item, index + 1)).join("")}</div>`;
    }
    if (gallerySectionTitle && HOME_CONTENT.sectionTitles?.gallery) gallerySectionTitle.textContent = HOME_CONTENT.sectionTitles.gallery;
    if (galleryCtaWrap && galleryCtaButton && gallery?.cta) {
        galleryCtaButton.textContent = gallery.cta.label;
        galleryCtaButton.href = gallery.cta.href;
        if (gallery.cta.className) galleryCtaButton.className = gallery.cta.className;
    }

    const noticesList = document.getElementById("noticesList");
    const noticesSectionTitle = document.getElementById("noticesSectionTitle");
    const noticesIntro = document.getElementById("noticesIntro");
    if (noticesList && notices) {
        noticesList.innerHTML = notices.map((item) => `<li class="aviso-item${item.type ? ` ${item.type}` : ''}"><span class="aviso-fecha"><span class="aviso-punto"></span><span>${item.date}</span></span><div class="aviso-content"><span class="aviso-tag${item.tagStyle ? ` aviso-tag-${item.tagStyle}` : ''}">${item.tag}</span><span class="aviso-texto">${item.text}</span></div></li>`).join("");
    }
    if (noticesSectionTitle && HOME_CONTENT.sectionTitles?.notices) noticesSectionTitle.textContent = HOME_CONTENT.sectionTitles.notices;
    if (noticesIntro && HOME_CONTENT.noticesIntro) noticesIntro.textContent = HOME_CONTENT.noticesIntro;
    applySectionCta("notices");

    const eventsTimeline = document.getElementById("eventsTimeline");
    const eventsSectionTitle = document.getElementById("eventsSectionTitle");
    const eventsIntro = document.getElementById("eventsIntro");
    if (eventsTimeline && events) {
        eventsTimeline.innerHTML = events.map((item) => `<div class="event-item${item.type ? ` event-item-${item.type}` : ''}"><div class="event-date"${item.fullDate ? ` title="${item.fullDate}" aria-label="${item.fullDate}"` : ''}><span class="event-day">${item.day}</span><span class="event-month">${item.month}</span></div><div class="event-content"><span class="event-tag">${item.tag}</span>${item.fullDate ? `<span class="event-full-date">${item.fullDate}</span>` : ''}<h3>${item.title}</h3><p>${item.text}</p></div></div>`).join("");
    }
    if (eventsSectionTitle && HOME_CONTENT.sectionTitles?.events) eventsSectionTitle.textContent = HOME_CONTENT.sectionTitles.events;
    if (eventsIntro && HOME_CONTENT.eventsIntro) eventsIntro.textContent = HOME_CONTENT.eventsIntro;
    applySectionCta("events");

    const testimonialsIntro = document.getElementById("testimonialsIntro");
    const testimonialsSectionTitle = document.getElementById("testimonialsSectionTitle");
    const testimonialsCarousel = document.getElementById("testimonialsCarousel");
    const testimonialDots = document.getElementById("testimonialDots");
    const testimonialsTrack = document.getElementById("testimonialsTrack");
    if (testimonialsIntro && testimonials) testimonialsIntro.textContent = testimonials.intro;
    if (testimonialsTrack && testimonials) {
        testimonialsTrack.innerHTML = testimonials.items.map((item) => `<article class="testimonial-card${item.type ? ` testimonial-card-${item.type}` : ''}"><span class="testimonial-kicker">${item.kicker}</span><div class="testimonial-quote-mark" aria-hidden="true"><img src="img/icons/ui/quote-double.svg" alt=""></div><p class="testimonial-text">${item.text}</p><div class="testimonial-author"><div class="author-avatar">${item.initials}</div><div class="author-info"><strong>${item.name}</strong><span>${item.detail}</span></div></div></article>`).join("");
    }
    if (testimonialsSectionTitle && HOME_CONTENT.sectionTitles?.testimonials) testimonialsSectionTitle.textContent = HOME_CONTENT.sectionTitles.testimonials;
    if (testimonialsCarousel && testimonials?.carouselAriaLabel) testimonialsCarousel.setAttribute("aria-label", testimonials.carouselAriaLabel);
    if (testimonialDots && testimonials?.dotsAriaLabel) testimonialDots.setAttribute("aria-label", testimonials.dotsAriaLabel);
    applySectionCta("testimonials");

    const homeNewsGrid = document.getElementById("homeNewsGrid");
    const newsSectionTitle = document.getElementById("newsSectionTitle");
    if (homeNewsGrid && homeNews) {
        homeNewsGrid.innerHTML = homeNews.map((item) => `<article class="card noticia-card${item.featured ? ' noticia-card-featured' : ''}">${item.isNew ? '<span class="badge-new">Nuevo</span>' : ''}<div class="card-image image-rounded"><img src="${item.image}" alt="${item.alt}" loading="lazy"></div><div class="card-content"><div class="noticia-meta"><span class="noticia-tag">${item.tag}</span><span class="noticia-fecha">${item.date}</span></div><h3>${item.title}</h3><p>${item.text}</p><a href="${item.href}" class="news-link"><span>Leer más</span><img src="img/icons/ui/leerMas.svg" alt="" class="news-link-icon" aria-hidden="true"></a></div></article>`).join("");
    }
    if (newsSectionTitle && HOME_CONTENT.sectionTitles?.news) newsSectionTitle.textContent = HOME_CONTENT.sectionTitles.news;
    applySectionCta("news");

    if (contact) {
        const contactSectionTitle = document.getElementById("contactSectionTitle");
        const mapaHead = document.querySelector(".mapa-head");
        const mapaIframe = document.getElementById("contactMapFrame");
        const mapaLink = document.querySelector(".mapa-link");
        const mapLinkButton = document.getElementById("mapLinkButton");
        const contactInfoTitle = document.getElementById("contactInfoTitle");
        const contactInfoIntro = document.querySelector(".contact-info-intro p");
        const contactItems = document.querySelectorAll(".contact-item");
        const contactSocial = document.querySelector(".contact-social");
        const contactSocialFacebook = document.getElementById("contactSocialFacebook");
        const contactSocialInstagram = document.getElementById("contactSocialInstagram");
        const shareLabel = document.getElementById("shareLabel");
        const contactFormTitle = document.getElementById("contactFormTitle");
        const formIntro = document.querySelector(".form-intro p");
        const contactNameLabel = document.getElementById("contactNameLabel");
        const contactPhoneLabel = document.getElementById("contactPhoneLabel");
        const contactEmailLabel = document.getElementById("contactEmailLabel");
        const contactMessageLabel = document.getElementById("contactMessageLabel");
        const nameInput = document.getElementById("nombre");
        const phoneInput = document.getElementById("telefono");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("mensaje");
        const contactSubmitButton = document.getElementById("contactSubmitButton");
        const whatsappButton = document.getElementById("whatsappButton");
        if (mapaHead) mapaHead.innerHTML = `<span class="mapa-kicker">${contact.mapKicker}</span><p>${contact.mapText}</p>`;
        if (contactSectionTitle && HOME_CONTENT.sectionTitles?.contact) contactSectionTitle.textContent = HOME_CONTENT.sectionTitles.contact;
        if (mapaIframe) mapaIframe.src = contact.mapEmbed;
        if (mapaIframe) mapaIframe.title = contact.mapTitle;
        if (mapaLink) {
            mapaLink.href = contact.mapLink;
            mapaLink.textContent = contact.mapButtonLabel;
            if (contact.mapButtonClassName) mapaLink.className = contact.mapButtonClassName;
        }
        if (mapLinkButton) mapLinkButton.textContent = contact.mapButtonLabel;
        if (contactInfoTitle) contactInfoTitle.textContent = contact.infoTitle;
        if (contactInfoIntro) contactInfoIntro.textContent = contact.infoText;
        if (contactItems.length === contact.items.length) {
            contactItems.forEach((itemNode, index) => {
                const item = contact.items[index];
                itemNode.innerHTML = `<strong>${getContactInlineIcon(item.icon)}<span>${item.label}</span></strong><p>${item.value}</p>`;
            });
        }
        if (contactSocial) {
            contactSocial.innerHTML = contact.social.map((item) => `<a href="${item.href}" target="_blank" rel="noopener" aria-label="${item.ariaLabel || item.label}" class="has-tooltip" data-tooltip="${item.label}"><img src="${item.icon}" alt="" aria-hidden="true"></a>`).join("");
        }
        if (contactSocialFacebook && contact.social[0]) contactSocialFacebook.setAttribute("aria-label", contact.social[0].ariaLabel || contact.social[0].label);
        if (contactSocialInstagram && contact.social[1]) contactSocialInstagram.setAttribute("aria-label", contact.social[1].ariaLabel || contact.social[1].label);
        if (shareLabel) shareLabel.textContent = contact.shareLabel;
        if (contactFormTitle) contactFormTitle.textContent = contact.formTitle;
        if (formIntro) formIntro.textContent = contact.formText;
        if (contactNameLabel) contactNameLabel.textContent = contact.formFields.nameLabel;
        if (contactPhoneLabel) contactPhoneLabel.textContent = contact.formFields.phoneLabel;
        if (contactEmailLabel) contactEmailLabel.textContent = contact.formFields.emailLabel;
        if (contactMessageLabel) contactMessageLabel.textContent = contact.formFields.messageLabel;
        if (nameInput) nameInput.placeholder = contact.formFields.namePlaceholder;
        if (phoneInput) phoneInput.placeholder = contact.formFields.phonePlaceholder;
        if (emailInput) emailInput.placeholder = contact.formFields.emailPlaceholder;
        if (messageInput) messageInput.placeholder = contact.formFields.messagePlaceholder;
        if (contactSubmitButton) contactSubmitButton.textContent = contact.submitLabel;
        if (contactSubmitButton && contact.submitClassName) contactSubmitButton.className = contact.submitClassName;
        if (whatsappButton) {
            whatsappButton.href = contact.whatsappHref;
            whatsappButton.setAttribute("aria-label", contact.whatsappTooltip);
            whatsappButton.setAttribute("data-tooltip", contact.whatsappTooltip);
        }
    }

    if (footer) {
        const footerBrandName = document.querySelector(".footer-brand-name");
        const footerLema = document.querySelector(".footer-lema");
        const footerContact = document.querySelectorAll(".footer-section:nth-child(2) p");
        const footerNav = document.querySelector(".footer-section:nth-child(3) nav");
        const footerSocial = document.querySelector(".footer-social");
        const footerCopy = document.querySelector(".footer-copy");
        if (footerBrandName) footerBrandName.textContent = footer.brandName;
        if (footerLema) footerLema.textContent = footer.lema;
        if (footerContact.length === footer.contact.length) footerContact.forEach((node, index) => { node.textContent = footer.contact[index]; });
        if (footerNav) footerNav.innerHTML = footer.links.map((item) => `<a href="${item.href}"><img src="${item.icon}" alt="" class="footer-link-icon" aria-hidden="true"><span>${item.label}</span></a>`).join("");
        if (footerSocial) footerSocial.innerHTML = footer.social.map((item) => `<a href="${item.href}" target="_blank" rel="noopener" aria-label="${item.label}"><img src="${item.icon}" alt="" class="footer-social-icon" aria-hidden="true"><span>${item.label}</span></a>`).join("");
        if (footerCopy) footerCopy.textContent = footer.copy;
    }

    const floatingButtons = HOME_CONTENT.floatingButtons || {};
    const scrollTopButton = document.getElementById("scrollTop");
    if (scrollTopButton && floatingButtons.scrollTop) {
        scrollTopButton.setAttribute("aria-label", floatingButtons.scrollTop.ariaLabel);
        scrollTopButton.setAttribute("data-tooltip", floatingButtons.scrollTop.tooltip);
    }
}

renderHomeContent();

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const heroMainFrame = document.querySelector(".hero-image-frame");
const heroMainImage = document.getElementById("heroMainImage");
const heroMainImageNext = document.getElementById("heroMainImageNext");
const heroMainDots = document.getElementById("heroMainDots");
const heroSeasonalNote = document.getElementById("heroSeasonalNote");
const heroCopy = document.querySelector(".hero-copy");
const heroTitleIntro = document.getElementById("heroTitleIntro");

const HERO_MAIN_SLIDES = HOME_CONTENT.hero?.slides || [];

function prefersReducedMotion() {
    return reduceMotionQuery.matches;
}

function getScrollBehavior() {
    return prefersReducedMotion() ? "auto" : "smooth";
}

function isTouchLikeDevice() {
    return window.matchMedia("(hover: none) and (pointer: coarse)").matches;
}

function blurAfterTouchInteraction(element) {
    if (!element) {
        return;
    }

    element.addEventListener("pointerup", () => {
        if (!isTouchLikeDevice()) {
            return;
        }

        window.setTimeout(() => {
            if (document.activeElement === element) {
                element.blur();
            }
        }, 0);
    });
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
    let heroMainInitialTimeout;
    let heroMainTransitionTimeout;
    let heroMainTransitioning = false;
    let heroMainLockedDotIndex = null;
    let pendingHeroMainSlideIndex = null;
    let heroMainTransitionCleanup = null;
    let heroTouchStartX = 0;
    let heroTouchStartY = 0;
    const heroMainPreloadedImages = new Map();
    const HERO_MAIN_SLIDE_INTERVAL = 3200;
    const HERO_MAIN_INITIAL_DELAY = 1100;
    const HERO_MAIN_TRANSITION_DURATION = 560;

    function preloadHeroMainSlides() {
        HERO_MAIN_SLIDES.forEach((slide) => {
            if (!heroMainPreloadedImages.has(slide.image)) {
                const image = new Image();
                image.src = slide.image;
                heroMainPreloadedImages.set(slide.image, image);
            }
        });
    }

    function ensureHeroMainSlideReady(index) {
        const slide = HERO_MAIN_SLIDES[index];

        if (!slide) {
            return Promise.resolve();
        }

        let image = heroMainPreloadedImages.get(slide.image);

        if (!image) {
            image = new Image();
            image.src = slide.image;
            heroMainPreloadedImages.set(slide.image, image);
        }

        if (image.complete) {
            if (typeof image.decode === "function") {
                return image.decode().catch(() => undefined);
            }

            return Promise.resolve();
        }

        return new Promise((resolve) => {
            const finish = () => {
                image.removeEventListener("load", finish);
                image.removeEventListener("error", finish);
                resolve();
            };

            image.addEventListener("load", finish, { once: true });
            image.addEventListener("error", finish, { once: true });
        });
    }

    function resetHeroMainNextImage() {
        if (!heroMainImageNext) {
            return;
        }

        heroMainFrame.classList.add("is-resetting");
        heroMainImageNext.src = "";
        heroMainImageNext.alt = "";
        heroMainImageNext.setAttribute("aria-hidden", "true");
        heroMainImageNext.style.transform = "translate3d(100%, 0, 0)";

        window.requestAnimationFrame(() => {
            heroMainFrame.classList.remove("is-resetting");
            heroMainImageNext.style.transform = "";
        });
    }

    function clearHeroMainTimers() {
        window.clearInterval(heroMainInterval);
        window.clearTimeout(heroMainInitialTimeout);
        window.clearTimeout(heroMainTransitionTimeout);
    }

    function cleanupHeroMainTransitionListener() {
        if (typeof heroMainTransitionCleanup === "function") {
            heroMainTransitionCleanup();
            heroMainTransitionCleanup = null;
        }
    }

    function renderHeroMainDots() {
        heroMainDots.innerHTML = "";

        HERO_MAIN_SLIDES.forEach((_, index) => {
            const dot = document.createElement("button");
            dot.type = "button";
            dot.className = "hero-support-dot";
            dot.classList.toggle("is-active", index === currentHeroMainSlide);
            dot.classList.toggle("is-locked", index === heroMainLockedDotIndex);
            dot.setAttribute("aria-label", `Ver imagen destacada ${index + 1}`);
            dot.addEventListener("click", () => {
                if (index === currentHeroMainSlide || index === heroMainLockedDotIndex) {
                    return;
                }

                heroMainLockedDotIndex = index;
                renderHeroMainDots();
                goToHeroMainSlide(index, { animate: false });
                restartHeroMainAutoplay();

                window.setTimeout(() => {
                    heroMainLockedDotIndex = null;
                    renderHeroMainDots();
                }, HERO_MAIN_SLIDE_INTERVAL);
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

    function finishHeroMainSlide(index) {
        window.clearTimeout(heroMainTransitionTimeout);
        cleanupHeroMainTransitionListener();
        applyHeroMainSlide(index);
        heroMainFrame.classList.remove("is-switching");
        resetHeroMainNextImage();
        heroMainTransitioning = false;
        pendingHeroMainSlideIndex = null;
    }

    function finalizeHeroMainTransitionImmediately() {
        if (!heroMainTransitioning || pendingHeroMainSlideIndex === null) {
            return;
        }

        finishHeroMainSlide(pendingHeroMainSlideIndex);
    }

    function cancelHeroMainTransition() {
        if (!heroMainTransitioning) {
            return;
        }

        window.clearTimeout(heroMainTransitionTimeout);
        cleanupHeroMainTransitionListener();
        heroMainFrame.classList.remove("is-switching");
        heroMainTransitioning = false;
        pendingHeroMainSlideIndex = null;
        resetHeroMainNextImage();
    }

    async function goToHeroMainSlide(index, options = {}) {
        const { animate = true } = options;

        if (index === currentHeroMainSlide && !heroMainTransitioning) {
            return;
        }

        if (!animate) {
            cancelHeroMainTransition();
            pendingHeroMainSlideIndex = null;
            applyHeroMainSlide(index);
            resetHeroMainNextImage();
            return;
        }

        if (heroMainTransitioning) {
            cancelHeroMainTransition();

            if (index === currentHeroMainSlide) {
                return;
            }
        }

        const slide = HERO_MAIN_SLIDES[index];
        pendingHeroMainSlideIndex = index;

        await ensureHeroMainSlideReady(index);

        if (pendingHeroMainSlideIndex !== index || document.hidden) {
            return;
        }

        if (!heroMainImageNext || prefersReducedMotion()) {
            window.setTimeout(() => {
                applyHeroMainSlide(index);
            }, prefersReducedMotion() ? 0 : 220);
            return;
        }

        heroMainTransitioning = true;
        heroMainImageNext.src = slide.image;
        heroMainImageNext.alt = slide.alt;
        heroMainImageNext.setAttribute("aria-hidden", "false");
        heroMainFrame.classList.remove("is-resetting");

        window.requestAnimationFrame(() => {
            heroMainFrame.classList.add("is-switching");
        });

        const finishTransition = (event) => {
            if (event.propertyName !== "transform") {
                return;
            }

            finishHeroMainSlide(index);
        };

        heroMainImageNext.addEventListener("transitionend", finishTransition);
        heroMainTransitionCleanup = () => {
            heroMainImageNext.removeEventListener("transitionend", finishTransition);
        };
        heroMainTransitionTimeout = window.setTimeout(() => {
            finishHeroMainSlide(index);
        }, HERO_MAIN_TRANSITION_DURATION + 120);
    }

    function nextHeroMainSlide() {
        const nextIndex = (currentHeroMainSlide + 1) % HERO_MAIN_SLIDES.length;
        goToHeroMainSlide(nextIndex);
    }

    function previousHeroMainSlide() {
        const previousIndex = (currentHeroMainSlide - 1 + HERO_MAIN_SLIDES.length) % HERO_MAIN_SLIDES.length;
        goToHeroMainSlide(previousIndex);
    }

    function restartHeroMainAutoplay() {
        clearHeroMainTimers();

        if (prefersReducedMotion() || document.hidden) {
            return;
        }

        heroMainInitialTimeout = window.setTimeout(() => {
            nextHeroMainSlide();
            heroMainInterval = window.setInterval(nextHeroMainSlide, HERO_MAIN_SLIDE_INTERVAL);
        }, HERO_MAIN_INITIAL_DELAY);
    }

    preloadHeroMainSlides();
    applyHeroMainSlide(currentHeroMainSlide);
    resetHeroMainNextImage();

    heroMainFrame.addEventListener("touchstart", (event) => {
        const touch = event.changedTouches[0];
        heroTouchStartX = touch.clientX;
        heroTouchStartY = touch.clientY;
    }, { passive: true });

    heroMainFrame.addEventListener("touchend", (event) => {
        const touch = event.changedTouches[0];
        const deltaX = touch.clientX - heroTouchStartX;
        const deltaY = touch.clientY - heroTouchStartY;

        if (Math.abs(deltaX) < 45 || Math.abs(deltaX) <= Math.abs(deltaY)) {
            return;
        }

        if (deltaX < 0) {
            nextHeroMainSlide();
        } else {
            previousHeroMainSlide();
        }

        restartHeroMainAutoplay();
    }, { passive: true });

    restartHeroMainAutoplay();
    reduceMotionQuery.addEventListener("change", restartHeroMainAutoplay);
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            clearHeroMainTimers();
            finalizeHeroMainTransitionImmediately();
            return;
        }

        restartHeroMainAutoplay();
    });
}

if (heroTitleIntro) {
    if (prefersReducedMotion()) {
        heroTitleIntro.classList.add("is-visible");
    } else {
        heroTitleIntro.classList.remove("is-visible");

        window.setTimeout(() => {
            heroTitleIntro.classList.add("is-visible");
        }, 260);
    }
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
const staggerElements = Array.from(document.querySelectorAll(".card, .career-card, .gallery-item, .event-item, .stat-card, .faq-item, .aviso-item, .section-cta"));

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
const breadcrumbSections = Array.from(document.querySelectorAll("main section[id]"));
let breadcrumbLockTimeout;
let breadcrumbLockedSectionId = "";

function getSectionName(section) {
    if (!section) {
        return "Principal";
    }

    if (section.id === "inicio") {
        return "Principal";
    }

    return section.querySelector("h2")?.textContent?.trim() ||
        section.querySelector("h1")?.textContent?.trim() ||
        section.querySelector("h3")?.textContent?.trim() ||
        section.id.charAt(0).toUpperCase() + section.id.slice(1);
}

function updateBreadcrumbFromScroll() {
    if (!breadcrumbCurrent || !breadcrumbSections.length) {
        return;
    }

    if (breadcrumbLockedSectionId) {
        const lockedSection = document.getElementById(breadcrumbLockedSectionId);

        if (lockedSection) {
            breadcrumbCurrent.textContent = getSectionName(lockedSection);
        }

        return;
    }

    const offset = header ? header.offsetHeight + 110 : 110;
    let activeSection = breadcrumbSections[0];

    breadcrumbSections.forEach((section) => {
        if (window.scrollY + offset >= section.offsetTop) {
            activeSection = section;
        }
    });

    breadcrumbCurrent.textContent = getSectionName(activeSection);
}

function lockBreadcrumbToSection(sectionId) {
    window.clearTimeout(breadcrumbLockTimeout);
    breadcrumbLockedSectionId = sectionId;

    breadcrumbLockTimeout = window.setTimeout(() => {
        breadcrumbLockedSectionId = "";
        updateBreadcrumbFromScroll();
    }, prefersReducedMotion() ? 0 : 700);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: getScrollBehavior()
            });

            const targetSection = target.closest("section") || target;
            breadcrumbCurrent.textContent = getSectionName(targetSection);

            if (targetSection.id) {
                lockBreadcrumbToSection(targetSection.id);
            }
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
const heroStudentFigure = document.querySelector(".hero-student-figure");
let heroRevealDistance = 180;
let latestScrollY = window.scrollY;
let scrollTicking = false;
let shouldAnimateHeroStudent = false;
let heroStudentCurrentProgress = 0;
let heroStudentTargetProgress = 0;
let heroStudentAnimationFrame = null;
let heroStudentIsInRange = true;

function animateHeroStudentProgress() {
    heroStudentAnimationFrame = null;

    if (!heroSection || !shouldAnimateHeroStudent || !heroStudentIsInRange) {
        return;
    }

    heroStudentCurrentProgress += (heroStudentTargetProgress - heroStudentCurrentProgress) * 0.22;

    if (Math.abs(heroStudentTargetProgress - heroStudentCurrentProgress) < 0.003) {
        heroStudentCurrentProgress = heroStudentTargetProgress;
    }

    heroSection.style.setProperty("--hero-student-progress", heroStudentCurrentProgress.toFixed(3));

    if (heroStudentCurrentProgress !== heroStudentTargetProgress) {
        heroStudentAnimationFrame = window.requestAnimationFrame(animateHeroStudentProgress);
    }
}

function syncHeroStudentProgress(force = false) {
    if (!heroSection) {
        return;
    }

    if (!shouldAnimateHeroStudent) {
        heroStudentCurrentProgress = 0;
        heroStudentTargetProgress = 0;
        heroSection.style.setProperty("--hero-student-progress", "0");

        if (heroStudentAnimationFrame) {
            window.cancelAnimationFrame(heroStudentAnimationFrame);
            heroStudentAnimationFrame = null;
        }

        return;
    }

    heroStudentTargetProgress = Math.min(Math.max(latestScrollY / heroRevealDistance, 0), 1);
    heroStudentIsInRange = latestScrollY <= heroRevealDistance + 40;

    if (!heroStudentIsInRange) {
        heroStudentCurrentProgress = heroStudentTargetProgress;
        heroSection.style.setProperty("--hero-student-progress", heroStudentCurrentProgress.toFixed(3));

        if (heroStudentAnimationFrame) {
            window.cancelAnimationFrame(heroStudentAnimationFrame);
            heroStudentAnimationFrame = null;
        }

        return;
    }

    if (force) {
        heroStudentCurrentProgress = heroStudentTargetProgress;
        heroSection.style.setProperty("--hero-student-progress", heroStudentCurrentProgress.toFixed(3));
        return;
    }

    if (!heroStudentAnimationFrame) {
        heroStudentAnimationFrame = window.requestAnimationFrame(animateHeroStudentProgress);
    }
}

function syncHeroStudentAnimationState() {
    shouldAnimateHeroStudent = Boolean(
        heroSection &&
        heroStudentFigure &&
        !prefersReducedMotion() &&
        window.getComputedStyle(heroStudentFigure).display !== "none"
    );

    syncHeroStudentProgress(true);
}

function syncHeroRevealDistance() {
    if (!heroSection) {
        return;
    }

    heroRevealDistance = Math.max(heroSection.offsetHeight * 0.45, 180);
    syncHeroStudentAnimationState();
}

if (heroSection) {
    heroSection.style.setProperty("--hero-student-progress", "0");
    syncHeroRevealDistance();
}

function updateScrollUI() {
    scrollTicking = false;

    if (latestScrollY > 400) {
        scrollTopBtn.classList.add("visible");
    } else {
        scrollTopBtn.classList.remove("visible");
    }

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (latestScrollY / docHeight) * 100 : 0;
    progressBar.style.width = progress + "%";

    syncHeroStudentProgress();

    updateBreadcrumbFromScroll();
}

window.addEventListener("scroll", () => {
    latestScrollY = window.scrollY;

    if (scrollTicking) {
        return;
    }

    scrollTicking = true;
    window.requestAnimationFrame(updateScrollUI);
});

window.addEventListener("resize", syncHeroRevealDistance);
window.addEventListener("resize", updateBreadcrumbFromScroll);
reduceMotionQuery.addEventListener("change", syncHeroRevealDistance);
updateBreadcrumbFromScroll();

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: getScrollBehavior()
    });
});

blurAfterTouchInteraction(scrollTopBtn);

document.querySelectorAll(".has-tooltip").forEach(blurAfterTouchInteraction);
document.querySelectorAll(".footer-section nav a").forEach(blurAfterTouchInteraction);


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

function syncNewsThemeLinks() {
    const currentTheme = html.getAttribute("data-theme") === "dark" ? "dark" : "light";

    document.querySelectorAll('a[href*="noticias.html"], a[href*="noticias-pagina-2.html"]').forEach((anchor) => {
        const rawHref = anchor.getAttribute("href");

        if (!rawHref || rawHref.startsWith("#")) {
            return;
        }

        const url = new URL(rawHref, window.location.href);
        url.searchParams.set("theme", currentTheme);
        anchor.setAttribute("href", `${url.pathname.split("/").pop()}${url.search}${url.hash}`);
    });
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
    syncNewsThemeLinks();
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

syncNewsThemeLinks();


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
    const prefix = element.getAttribute("data-prefix") || "";
    const suffix = element.getAttribute("data-suffix") || "";

    if (Number.isNaN(target)) {
        return;
    }

    if (prefersReducedMotion()) {
        element.textContent = `${prefix}${target}${suffix}`;
        return;
    }

    const duration = 1800;
    const start = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.round(target * easedProgress);

        element.textContent = `${prefix}${currentValue}${suffix}`;

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
const galleryModalCopy = document.getElementById("galleryModalCopy");
const galleryModalKicker = document.getElementById("galleryModalKicker");
const galleryModalDescription = document.getElementById("galleryModalDescription");
const modalClose = document.querySelector(".modal-close");

document.querySelectorAll(".gallery-item").forEach(item => {
    let galleryOverlayIcon = item.querySelector(".gallery-overlay-icon");

    function animateGalleryOverlayIcon() {
        galleryOverlayIcon = restartSvgAnimation(galleryOverlayIcon);
    }

    item.addEventListener("mouseenter", animateGalleryOverlayIcon);
    item.addEventListener("focus", animateGalleryOverlayIcon);
    item.addEventListener("pointerdown", animateGalleryOverlayIcon);
    item.addEventListener("touchstart", animateGalleryOverlayIcon, { passive: true });

    item.addEventListener("click", () => {
        const imgSrc = item.querySelector("img").src;
        const imgAlt = item.querySelector("img").alt;
        const kicker = item.getAttribute("data-kicker") || "";
        const description = item.getAttribute("data-description") || "";
        modalImage.src = imgSrc;
        modalImage.alt = imgAlt;
        if (galleryModalCopy && galleryModalKicker && galleryModalDescription) {
            const showCopy = Boolean(HOME_CONTENT.gallery?.modal?.showCopy) && (kicker || description);
            galleryModalCopy.hidden = !showCopy;
            galleryModalKicker.textContent = kicker;
            galleryModalDescription.textContent = description;
        }
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
    if (galleryModalCopy) {
        galleryModalCopy.hidden = true;
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("active")) {
        closeModal();
    }

    if (event.key === "Escape" && promoModal?.classList.contains("active")) {
        closePromoModal();
    }
});


// =========================
// CARRUSEL TESTIMONIOS
// =========================
const testimonialsTrack = document.getElementById("testimonialsTrack");
const testimonialDotsContainer = document.getElementById("testimonialDots");
const testimonialPrevBtn = document.querySelector(".testimonial-btn.prev");
const testimonialNextBtn = document.querySelector(".testimonial-btn.next");
const TESTIMONIALS_CONFIG = HOME_CONTENT.testimonials || {};

if (testimonialsTrack && testimonialDotsContainer && testimonialPrevBtn && testimonialNextBtn) {
    const testimonialCards = Array.from(testimonialsTrack.querySelectorAll(".testimonial-card"));
    let currentSlide = Math.max(0, Math.min(TESTIMONIALS_CONFIG.initialSlide || 0, testimonialCards.length - 1));
    let isProgrammaticScroll = false;
    let scrollSettleTimer;
    let testimonialAutoplay;
    let testimonialPaused = false;

    testimonialCards.forEach((_, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "testimonial-dot";
        dot.setAttribute("aria-label", `Ir al testimonio ${index + 1}`);
        dot.classList.toggle("active", index === currentSlide);
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
        const boundedIndex = ((index % testimonialCards.length) + testimonialCards.length) % testimonialCards.length;
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

    function restartTestimonialAutoplay() {
        window.clearInterval(testimonialAutoplay);

        if (prefersReducedMotion() || !TESTIMONIALS_CONFIG.autoplayMs || testimonialPaused) {
            return;
        }

        testimonialAutoplay = window.setInterval(() => {
            goToSlide(currentSlide + 1);
        }, TESTIMONIALS_CONFIG.autoplayMs);
    }

    function pauseTestimonialAutoplay() {
        testimonialPaused = true;
        window.clearInterval(testimonialAutoplay);
    }

    function resumeTestimonialAutoplay() {
        testimonialPaused = false;
        restartTestimonialAutoplay();
    }

    testimonialPrevBtn.addEventListener("click", () => {
        goToSlide(currentSlide - 1);
        restartTestimonialAutoplay();
    });

    testimonialNextBtn.addEventListener("click", () => {
        goToSlide(currentSlide + 1);
        restartTestimonialAutoplay();
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

    testimonialsTrack.addEventListener("mouseenter", pauseTestimonialAutoplay);
    testimonialsTrack.addEventListener("mouseleave", resumeTestimonialAutoplay);
    testimonialPrevBtn.addEventListener("mouseenter", pauseTestimonialAutoplay);
    testimonialPrevBtn.addEventListener("mouseleave", resumeTestimonialAutoplay);
    testimonialNextBtn.addEventListener("mouseenter", pauseTestimonialAutoplay);
    testimonialNextBtn.addEventListener("mouseleave", resumeTestimonialAutoplay);

    testimonialsTrack.addEventListener("touchstart", pauseTestimonialAutoplay, { passive: true });
    testimonialsTrack.addEventListener("touchend", resumeTestimonialAutoplay, { passive: true });
    testimonialsTrack.addEventListener("touchcancel", resumeTestimonialAutoplay, { passive: true });

    goToSlide(currentSlide);
    restartTestimonialAutoplay();
}


// =========================
// TOAST NOTIFICATIONS
// =========================
const toastContainer = document.getElementById("toastContainer");

function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    const iconPath = type === "success" ? "img/icons/ui/check.svg" : "img/icons/ui/error.svg";
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
    const validation = HOME_CONTENT.contact?.validationMessages || {};
    
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
        showError(nombre, validation.nameRequired || "El nombre es requerido");
        isValid = false;
    }

    if (!telefono.value.trim()) {
        showError(telefono, validation.phoneRequired || "El celular es requerido");
        isValid = false;
    } else if (!validatePhone(telefono.value)) {
        showError(telefono, validation.phoneInvalid || "Ingresa un celular válido");
        isValid = false;
    }

    if (!email.value.trim()) {
        showError(email, validation.emailRequired || "El correo es requerido");
        isValid = false;
    } else if (!validateEmail(email.value)) {
        showError(email, validation.emailInvalid || "Ingresa un correo válido");
        isValid = false;
    }

    if (!mensaje.value.trim()) {
        showError(mensaje, validation.messageRequired || "El mensaje es requerido");
        isValid = false;
    }

    if (isValid) {
        const formData = new FormData(form);
        console.log("Datos enviados:", Object.fromEntries(formData));
        
        showToast(validation.success || "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.", "success");
        form.reset();
    } else {
        showToast(validation.error || "Por favor completa todos los campos correctamente.", "error");
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
// MODAL PROMOCIONAL
// =========================
const promoModal = document.getElementById("promoModal");
const promoModalClose = document.getElementById("promoModalClose");
const promoModalSecondaryAction = document.getElementById("promoModalSecondaryAction");
const promoModalTitle = document.getElementById("promoModalTitle");
const promoModalKicker = document.getElementById("promoModalKicker");
const promoModalText = document.getElementById("promoModalText");
const promoModalPoints = document.getElementById("promoModalPoints");
const promoModalImage = document.getElementById("promoModalImage");
const promoModalPrimaryAction = document.getElementById("promoModalPrimaryAction");

// Este objeto controla la campaña promocional activa.
// Puedes reutilizar el mismo modal cambiando texto, imagen, fechas y botones.
const PROMO_MODAL_CONFIG = HOME_CONTENT.promoModal || {};

function isPromoModalActiveWindow() {
    const now = Date.now();
    const startDate = Date.parse(PROMO_MODAL_CONFIG.startDate);
    const endDate = Date.parse(PROMO_MODAL_CONFIG.endDate);

    if (Number.isNaN(startDate) || Number.isNaN(endDate)) {
        return false;
    }

    return now >= startDate && now <= endDate;
}

function shouldShowPromoModal() {
    if (!promoModal || !PROMO_MODAL_CONFIG.enabled || prefersReducedMotion()) {
        return false;
    }

    if (!isPromoModalActiveWindow()) {
        return false;
    }

    try {
        const stored = JSON.parse(localStorage.getItem(PROMO_MODAL_CONFIG.storageKey) || "null");

        if (!stored || stored.version !== PROMO_MODAL_CONFIG.version) {
            return true;
        }

        const cooldownMs = PROMO_MODAL_CONFIG.showOnceEveryDays * 24 * 60 * 60 * 1000;
        return Date.now() - stored.closedAt >= cooldownMs;
    } catch (error) {
        return true;
    }
}

function rememberPromoModalDismiss() {
    try {
        localStorage.setItem(PROMO_MODAL_CONFIG.storageKey, JSON.stringify({
            version: PROMO_MODAL_CONFIG.version,
            closedAt: Date.now()
        }));
    } catch (error) {}
}

function closePromoModal() {
    if (!promoModal) {
        return;
    }

    promoModal.classList.remove("active");
    promoModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    rememberPromoModalDismiss();
}

function openPromoModal() {
    if (!promoModal || !shouldShowPromoModal()) {
        return;
    }

    promoModalKicker.textContent = PROMO_MODAL_CONFIG.kicker;
    promoModalTitle.textContent = PROMO_MODAL_CONFIG.title;
    promoModalText.textContent = PROMO_MODAL_CONFIG.text;
    promoModalPoints.innerHTML = "";

    if (Array.isArray(PROMO_MODAL_CONFIG.points)) {
        PROMO_MODAL_CONFIG.points.forEach((point) => {
            const item = document.createElement("li");
            item.textContent = point;
            promoModalPoints.appendChild(item);
        });
    }

    promoModalImage.src = PROMO_MODAL_CONFIG.image;
    promoModalImage.alt = PROMO_MODAL_CONFIG.imageAlt;
    promoModalPrimaryAction.textContent = PROMO_MODAL_CONFIG.primaryLabel;
    promoModalPrimaryAction.setAttribute("href", PROMO_MODAL_CONFIG.primaryHref);
    promoModalSecondaryAction.textContent = PROMO_MODAL_CONFIG.secondaryLabel;
    if (PROMO_MODAL_CONFIG.secondaryClassName) {
        promoModalSecondaryAction.className = PROMO_MODAL_CONFIG.secondaryClassName;
    }

    window.setTimeout(() => {
        promoModal.classList.add("active");
        promoModal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
    }, PROMO_MODAL_CONFIG.delayMs);
}

if (promoModal && promoModalClose && promoModalSecondaryAction) {
    promoModalClose.addEventListener("click", closePromoModal);
    promoModalSecondaryAction.addEventListener("click", closePromoModal);
    promoModal.addEventListener("click", (event) => {
        if (event.target === promoModal) {
            closePromoModal();
        }
    });

    promoModalPrimaryAction.addEventListener("click", () => {
        closePromoModal();
    });

    window.addEventListener("load", openPromoModal, { once: true });
}


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
const countdownKicker = document.getElementById("countdown-kicker");
const countdownTitle = document.getElementById("countdown-title");
const countdownSubtitle = document.getElementById("countdown-subtitle");
const countdownMessage = document.getElementById("countdown-message");
const COUNTDOWN_CONFIG = HOME_CONTENT.countdown || {};
const COUNTDOWN_EVENTS = COUNTDOWN_CONFIG.events || [];

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
            let date;

            if (event.dateMode === "fixed") {
                date = new Date(now.getFullYear(), event.month, event.day, event.hour || 0, event.minute || 0, 0, 0);
            } else if (event.dateMode === "nextMondayFromBase") {
                date = getNextMonday(new Date(now.getFullYear(), event.baseMonth, event.baseDay));
                date.setHours(event.hour || 0, event.minute || 0, 0, 0);
            } else {
                date = new Date(now.getFullYear(), 11, 31, 23, 59, 0, 0);
            }

            if (date <= now) {
                if (event.dateMode === "fixed") {
                    date = new Date(now.getFullYear() + 1, event.month, event.day, event.hour || 0, event.minute || 0, 0, 0);
                } else if (event.dateMode === "nextMondayFromBase") {
                    date = getNextMonday(new Date(now.getFullYear() + 1, event.baseMonth, event.baseDay));
                    date.setHours(event.hour || 0, event.minute || 0, 0, 0);
                }
            }

            return {
                ...event,
                date
            };
        })
        .sort((firstEvent, secondEvent) => firstEvent.date - secondEvent.date)[0];
}

function updateCountdown() {
    if (countdownKicker && COUNTDOWN_CONFIG.kicker) countdownKicker.textContent = COUNTDOWN_CONFIG.kicker;
    if (countdownTitle && COUNTDOWN_CONFIG.title) countdownTitle.textContent = COUNTDOWN_CONFIG.title;

    const target = getTargetDate();

    if (!target) {
        countdownDays.textContent = "00";
        countdownHours.textContent = "00";
        countdownMinutes.textContent = "00";
        countdownSeconds.textContent = "00";
        countdownSubtitle.textContent = "";
        countdownMessage.textContent = COUNTDOWN_CONFIG.expiredMessage || "";
        return;
    }

    const now = new Date().getTime();
    const distance = target.date.getTime() - now;

    countdownSubtitle.textContent = target.subtitle;
    countdownMessage.textContent = target.message;

    if (distance < 0) {
        countdownDays.textContent = "00";
        countdownHours.textContent = "00";
        countdownMinutes.textContent = "00";
        countdownSeconds.textContent = "00";
        countdownMessage.textContent = COUNTDOWN_CONFIG.expiredMessage || target.message;
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
