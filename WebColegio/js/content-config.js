window.SITE_CONTENT = {
  home: {
    // HERO PRINCIPAL
    // Edita aqui textos, botones, card secundaria, imagen del estudiante y slides.
    hero: {
      studentFigure: {
        image: "img/hero/estudiante.png",
        alt: ""
      },
      kicker: "Instituto Técnico Morazán",
      title: "Educación integral que impulsa el talento, los valores y el futuro de cada estudiante.",
      lema: "Excelencia Educativa Técnica Empresarial",
      subtitle: "Explore nuestros programas académicos y actividades extracurriculares dentro de un entorno de aprendizaje sólido, cercano y comprometido con el máximo potencial de cada estudiante.",
      highlightsAriaLabel: "Aspectos destacados del instituto",
      dotsAriaLabel: "Imágenes destacadas del hero",
      actions: [
        { label: "Solicitar información", href: "#contacto-info", className: "btn btn-action", ariaLabel: "Solicitar información del Instituto Técnico Morazán" },
        { label: "Ver programas", href: "#niveles", className: "btn btn-glass", ariaLabel: "Ver programas académicos del instituto" }
      ],
      highlights: ["Formación integral", "Programas técnicos", "Actividades extracurriculares"],
      supportCard: {
        image: "img/hero/hero-support-default.jpg",
        alt: "Espacio visual para promociones y actividades institucionales",
        label: "Semana Santa 2026",
        title: "Una temporada para reflexionar, renovarte y proyectar tu futuro académico",
        text: "Conoce nuestras actividades institucionales, orientación para estudiantes y novedades para el próximo período académico."
      },
      slides: [
        {
          image: "img/hero/slides/imagenColegioPrin.jpg",
          alt: "Vista principal del Instituto Técnico Morazán",
          note: "Formación integral con identidad institucional, acompañamiento cercano y visión de futuro para cada estudiante."
        },
        {
          image: "img/hero/slides/slide-1.jpg",
          alt: "Actividad institucional destacada del Instituto Técnico Morazán",
          note: "Admisiones 2026: conoce nuestros programas y prepárate con tiempo para el próximo período académico."
        },
        {
          image: "img/hero/slides/slide-2.jpg",
          alt: "Vida estudiantil en el Instituto Técnico Morazán",
          note: "Vida estudiantil: experiencias que fortalecen la convivencia, la identidad y el sentido de pertenencia institucional."
        },
        {
          image: "img/hero/slides/slide-3.jpg",
          alt: "Proyección académica del Instituto Técnico Morazán",
          note: "Proyección académica: una formación que impulsa metas universitarias, técnicas y profesionales con bases sólidas."
        }
      ]
    },
    // TITULOS PRINCIPALES DE SECCIONES EN HOME
    // Cambia aqui solo el texto visible de cada encabezado.
    sectionTitles: {
      stats: "Nuestro Colegio en Cifras",
      about: "Sobre Nosotros",
      faq: "Preguntas Frecuentes",
      levels: "Niveles Educativos",
      careers: "Carreras Técnicas",
      gallery: "Galería de Fotos",
      notices: "Avisos Importantes",
      events: "Próximos Eventos",
      testimonials: "Lo que dicen nuestros egresados",
      news: "Noticias",
      contact: "Contáctanos"
    },
    sectionCtas: {
      stats: { enabled: true, label: "Conocer nuestra historia", href: "#nosotros", className: "btn btn-section levels-cta-button" },
      about: { enabled: true, label: "Explorar niveles", href: "#niveles", className: "btn btn-section levels-cta-button" },
      faq: { enabled: true, label: "Resolver otra consulta", href: "#contacto-info", className: "btn btn-section levels-cta-button" },
      notices: { enabled: true, label: "Ver novedades", href: "#noticias", className: "btn btn-section levels-cta-button" },
      events: { enabled: true, label: "Consultar participación", href: "#contacto-info", className: "btn btn-section levels-cta-button" },
      testimonials: { enabled: true, label: "Conocer nuestra propuesta", href: "#carreras", className: "btn btn-section levels-cta-button" },
      news: { enabled: true, label: "Ir al centro de noticias", href: "noticias.html", className: "btn btn-section levels-cta-button" }
    },
    // CIFRAS DESTACADAS
    // Puedes cambiar orden, icono, etiqueta, número, prefijo y sufijo.
    statsIntro: "Cifras que reflejan trayectoria, crecimiento institucional y el compromiso formativo del Instituto Técnico Morazán.",
    // CIFRAS DESTACADAS
    stats: [
      { icon: "img/icons/sections/estudiantes.svg", target: "500", label: "Estudiantes" },
      { icon: "img/icons/sections/aniosExperiencia.svg", target: "0", foundation: "1990-02-05", label: "Años de Experiencia" },
      { icon: "img/icons/sections/carreras.svg", target: "8", label: "Carreras Técnicas" },
      { icon: "img/icons/sections/egresadosExitosos.svg", target: "95", suffix: "%", label: "de Egresados Exitosos" }
    ],
    // SOBRE NOSOTROS
    about: {
      sectionTitle: "Sobre Nosotros",
      highlights: ["Formación integral", "Orientación estudiantil", "Docentes capacitados"],
      missionLabel: "Misión",
      visionLabel: "Visión",
      intro: "En el Instituto Técnico Morazán formamos jóvenes con metas grandes y preparación real para alcanzarlas. Nuestra propuesta combina tercer ciclo, educación media técnica, acompañamiento cercano, orientación estudiantil, docentes en constante capacitación y espacios de aprendizaje que impulsan disciplina, liderazgo, valores y proyección universitaria o laboral.",
      mission: "Brindar una educación integral y de calidad que forme estudiantes con competencias académicas, técnicas y humanas, capaces de desenvolverse con responsabilidad, liderazgo y compromiso en la sociedad.",
      vision: "Ser una institución educativa reconocida por su excelencia formativa, innovación y compromiso con el desarrollo de estudiantes preparados para alcanzar su máximo potencial en el ámbito académico, personal y profesional.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      videoTitle: "Video Institucional del Instituto Técnico Morazán",
      videoPoster: {
        enabled: false,
        image: "img/about/about-video-poster-default.jpg",
        alt: "Presentación institucional del Instituto Técnico Morazán",
        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      }
    },
    // PREGUNTAS FRECUENTES
    // El orden visual depende del orden del arreglo.
    faqIntro: "Resolvemos aquí las consultas más comunes sobre matrícula, horarios, ubicación, atención y propuesta académica del instituto.",
    faq: [
      { category: "Matrícula", q: "¿Cuáles son los requisitos de matrícula?", a: "Generalmente se solicita partida de nacimiento, certificados de estudios anteriores, fotografías tamaño carnet y el pago correspondiente al proceso de inscripción. Para confirmar los requisitos actualizados puedes escribirnos o visitarnos directamente.", open: true },
      { category: "Oferta académica", q: "¿Qué niveles y carreras ofrecen?", a: "Ofrecemos tercer ciclo de educación básica y educación media en modalidades de bachillerato técnico, con una propuesta enfocada en formación académica, valores y proyección al siguiente nivel." },
      { category: "Horario", q: "¿Cuál es el horario de atención del instituto?", a: "Atendemos de lunes a viernes de 7:00 AM a 4:00 PM y los sábados de 7:00 AM a 12:00 PM. Si deseas información rápida, también puedes escribirnos por WhatsApp." },
      { category: "Admisiones", q: "¿Cómo puedo solicitar información o iniciar el proceso de admisión?", a: "Puedes llenar el formulario de contacto, escribirnos por WhatsApp, llamarnos o visitarnos presencialmente. Con gusto te orientaremos sobre matrícula, requisitos y disponibilidad de cupos." },
      { category: "Ubicación", q: "¿Dónde están ubicados?", a: "Nos encontramos en Bo Guamilito, 2 ave., 5-6 cll., 21102 San Pedro Sula, Cortés, Honduras. En la sección de contacto puedes ver el mapa y abrir la ubicación directamente en Google Maps." },
      { category: "Vida institucional", q: "¿Realizan actividades académicas y eventos institucionales?", a: "Sí. Durante el año se desarrollan reuniones, ferias académicas, actividades institucionales y eventos especiales que fortalecen la formación integral de nuestros estudiantes." },
      { category: "Proyección", q: "¿La formación prepara a los estudiantes para la universidad o el trabajo?", a: "Sí. Nuestra propuesta combina formación académica, valores y preparación técnica para que los estudiantes puedan continuar estudios universitarios o integrarse con mejores bases al entorno laboral." }
    ],
    // NIVELES EDUCATIVOS
    levelsIntro: "Conoce los niveles académicos que actualmente ofrece el instituto y la estructura formativa que prepara a los estudiantes para avanzar con bases sólidas.",
    levelsCta: {
      label: "Conocer modalidades",
      href: "#carreras",
      className: "btn btn-section levels-cta-button"
    },
    levels: [
      {
        type: "grouped",
        image: "img/levels/secundaria.jpg",
        alt: "Estudiantes de tercer ciclo",
        badge: "Educación básica",
        title: "Tercer Ciclo",
        text: "El colegio ofrece tercer ciclo de educación básica, una etapa clave para consolidar bases académicas, fortalecer hábitos de estudio y preparar a los estudiantes para la educación media.",
        groupAriaLabel: "Grados de tercer ciclo",
        miniCardLabel: "Grado",
        miniCards: ["7mo", "8vo", "9no"]
      },
      {
        type: "chips",
        image: "img/levels/primaria.jpg",
        alt: "Estudiantes de educación media",
        badge: "Educación media",
        title: "Bachillerato",
        text: "La educación media acompaña la transición hacia una formación más especializada. En esta etapa los estudiantes cursan décimo, undécimo y, según la modalidad, también duodécimo, con una preparación orientada a su siguiente nivel académico.",
        chipsAriaLabel: "Trayecto de educación media",
        chips: ["10mo grado", "11vo grado", "12vo grado según modalidad"]
      }
    ],
    // CARRERAS TECNICAS
    careers: {
      items: [
        {
          theme: "tech",
          icon: "img/icons/sections/informatica.svg",
          badge: "Área tecnológica",
          featuredBadge: "Alta demanda",
          title: "Bachiller Técnico en Informática",
          text: "Convierte tu interés por la tecnología en una preparación real para la universidad, el trabajo y los retos del mundo digital.",
          points: [
            "Comienzas con una base académica fuerte y avanzas hacia formación técnica especializada.",
            "Desarrollas habilidades prácticas en entornos tecnológicos actuales y de alta demanda.",
            "Aprendes en laboratorios climatizados con acompañamiento docente constante."
          ],
          highlight: "Si sueñas con destacar en el área digital, esta carrera te abre puertas desde el aula hacia oportunidades reales.",
          durationLabel: "Duración",
          durationValue: "3 años"
        },
        {
          theme: "finance",
          icon: "img/icons/sections/contaduriaFinanzas.svg",
          badge: "Área administrativa",
          title: "Bachiller Técnico en Contaduría y Finanzas",
          text: "Prepárate para comprender cómo funcionan las empresas, las finanzas y la administración con una formación útil, práctica y con visión de crecimiento.",
          points: [
            "Fortaleces disciplina, criterio profesional y organización desde una base común sólida.",
            "Te preparas para desenvolverte en áreas contables, financieras y administrativas.",
            "Impulsa tanto la continuidad universitaria como la visión emprendedora."
          ],
          highlight: "Es una carrera para quienes quieren avanzar con seguridad hacia el mundo empresarial y tomar decisiones con visión.",
          durationLabel: "Duración",
          durationValue: "3 años"
        },
        {
          theme: "science",
          icon: "img/icons/sections/cienciasHumanidades.svg",
          badge: "Formación general",
          title: "Bachiller Técnico en Ciencias y Humanidades",
          text: "Construye una base académica de alto valor para avanzar con confianza hacia la universidad y proyectarte en distintas áreas del conocimiento.",
          points: [
            "Refuerza pensamiento lógico, análisis crítico y comprensión científica del entorno.",
            "Desarrolla una base integral para continuar estudios superiores con mejores herramientas.",
            "Incluye acompañamiento para orientar decisiones vocacionales y metas futuras."
          ],
          highlight: "Si buscas una formación que te impulse hacia la universidad con bases firmes, esta es una de las mejores decisiones para tu futuro.",
          durationLabel: "Duración",
          durationValue: "2 años"
        }
      ],
      cta: {
        ariaLabel: "Mensaje destacado de orientación sobre carreras",
        botAlt: "Asistente virtual del Instituto Técnico Morazán",
        text: "Estudia en una institución que te prepara para avanzar con seguridad, descubrir tu vocación y construir un futuro con más oportunidades desde hoy.",
        button: { label: "Solicitar información", href: "#contacto-info", className: "btn btn-action" }
      }
    },
    // GALERIA
    gallery: {
      intro: "Momentos que reflejan la vida estudiantil, las actividades institucionales y el ambiente formativo del Instituto Técnico Morazán.",
      cta: {
        label: "Conocer nuestras actividades",
        href: "#contacto-info",
        className: "btn btn-section levels-cta-button"
      },
      modal: {
        showCopy: true
      },
      items: [
        { type: "featured", src: "img/gallery/gallery-featured-default.jpg", alt: "Evento escolar 1", ariaLabel: "Abrir imagen destacada de la vida institucional", kicker: "Vida institucional", text: "Momentos destacados del colegio", description: "Una vista principal que resume momentos significativos de la experiencia estudiantil y el ambiente institucional." },
        { type: "default", src: "img/gallery/galeria-2.jpg", alt: "Evento escolar 2", ariaLabel: "Abrir imagen de actividades académicas", kicker: "Actividades académicas", text: "Experiencias que fortalecen el aprendizaje", description: "Actividades que impulsan la participación, el desarrollo académico y la convivencia en el aula." },
        { type: "default", src: "img/gallery/galeria-3.jpg", alt: "Evento escolar 3", ariaLabel: "Abrir imagen de comunidad educativa", kicker: "Comunidad educativa", text: "Espacios de convivencia y participación", description: "Instantes de encuentro que fortalecen la identidad y el sentido de pertenencia institucional." },
        { type: "default", src: "img/gallery/galeria-4.jpg", alt: "Evento escolar 4", ariaLabel: "Abrir imagen de instantes institucionales", kicker: "Instantes institucionales", text: "Galería de experiencias y logros", description: "Una recopilación de momentos que reflejan esfuerzo, participación y logros de la comunidad educativa." },
        { type: "default", src: "img/gallery/galeria-1.jpg", alt: "Evento escolar 5", ariaLabel: "Abrir imagen de actividades especiales", kicker: "Actividades especiales", text: "Nuevos recuerdos para la galería institucional", description: "Escenas que muestran la energía y el valor de las experiencias compartidas dentro del instituto." },
        { type: "default", src: "img/gallery/galeria-2.jpg", alt: "Evento escolar 6", ariaLabel: "Abrir imagen de experiencia estudiantil", kicker: "Experiencia estudiantil", text: "Ambientes que acompañan el aprendizaje diario", description: "Momentos cotidianos donde se vive el proceso formativo con cercanía, dinamismo y participación." },
        { type: "default", src: "img/gallery/galeria-3.jpg", alt: "Evento escolar 7", ariaLabel: "Abrir imagen de vida colegial", kicker: "Vida colegial", text: "Más escenas del día a día en nuestra comunidad", description: "Imágenes que muestran el ritmo diario del instituto y la riqueza de su entorno formativo." }
      ]
    },
    // CONTADOR REGRESIVO
    countdown: {
      kicker: "Próximo evento institucional",
      title: "Faltan",
      expiredMessage: "¡Muy pronto compartiremos una nueva fecha importante!",
      onExpire: "next",
      events: [
        {
          key: "graduation",
          subtitle: "para la próxima Graduación",
          message: "Cuenta regresiva para nuestra ceremonia de graduación.",
          dateMode: "fixed",
          month: 10,
          day: 30,
          hour: 15,
          minute: 30
        },
        {
          key: "classes",
          subtitle: "para el próximo Inicio de Clases",
          message: "Prepárate para el inicio de un nuevo ciclo académico.",
          dateMode: "nextMondayFromBase",
          baseMonth: 1,
          baseDay: 10,
          hour: 7,
          minute: 0
        }
      ]
    },
    // AVISOS
    noticesIntro: "Mantente al día con comunicados, recordatorios y avisos clave para estudiantes, familias y comunidad educativa.",
    notices: [
      { type: "urgent", date: "[Fecha]", tag: "Comunicado", tagStyle: "urgent", text: "Matrículas abiertas para el ciclo 2026" },
      { type: "institutional", date: "[Fecha]", tag: "Institucional", tagStyle: "primary", text: "Reunión de padres de familia" },
      { type: "calendar", date: "[Fecha]", tag: "Calendario", tagStyle: "success", text: "Inicio de clases próximo mes" }
    ],
    // EVENTOS
    eventsIntro: "Consulta los próximos momentos institucionales más relevantes para estudiantes, familias y comunidad educativa.",
    events: [
      { type: "admissions", fullDate: "15 de enero de 2026", day: "15", month: "Ene", tag: "Admisiones", title: "Inscripciones ciclo 2026", text: "Período de inscripciones abierto para el nuevo ciclo escolar." },
      { type: "institutional", fullDate: "20 de febrero de 2026", day: "20", month: "Feb", tag: "Institucional", title: "Reunión de padres", text: "Asamblea general con padres de familia para informar sobre el inicio de clases." },
      { type: "academic", fullDate: "10 de marzo de 2026", day: "10", month: "Mar", tag: "Académico", title: "Feria académica", text: "Exposición de proyectos estudiantiles de las carreras técnicas." },
      { type: "ceremony", fullDate: "30 de noviembre de 2026", day: "30", month: "Nov", tag: "Ceremonia", title: "Ceremonia de graduación", text: "Acto de graduación de la promoción 2026." }
    ],
    // TESTIMONIOS
    testimonials: {
      carouselAriaLabel: "Carrusel de testimonios de egresados",
      dotsAriaLabel: "Paginación del carrusel de testimonios",
      initialSlide: 0,
      autoplayMs: 5200,
      intro: "Historias reales de egresados que hoy avanzan con seguridad en la universidad, el mundo profesional y nuevos proyectos de vida.",
      items: [
        { type: "featured", kicker: "Egresado destacado", text: "El Instituto Técnico Morazán me dio las herramientas necesarias para insertarme en el mundo laboral. Hoy trabajo como contador en una empresa importante y sigo aplicando lo aprendido cada día.", initials: "CM", name: "Carlos Mendoza", detail: "Egresado 2018 - Contabilidad" },
        { type: "entrepreneur", kicker: "Trayectoria emprendedora", text: "Gracias a la formación técnica en informática, pude crear mi propia empresa de desarrollo de software. Los profesores marcaron una etapa clave y me dieron la seguridad para emprender.", initials: "ML", name: "María López", detail: "Egresada 2020 - Informática" },
        { type: "integral", kicker: "Formación integral", text: "La formación en valores y técnicas que recibí me abrió las puertas de muchas oportunidades. Siempre destaco la disciplina, el nivel humano y la preparación técnica de la institución.", initials: "JR", name: "Juan Rodríguez", detail: "Egresado 2019 - Electrónica" },
        { type: "academic", kicker: "Proyección académica", text: "Más que una carrera, encontré una base sólida para seguir creciendo. El acompañamiento docente y el enfoque técnico me prepararon para destacar desde el inicio en mis siguientes retos.", initials: "AL", name: "Ana Lucía Torres", detail: "Egresada 2021 - Ciencias y Humanidades" }
      ]
    },
    // NOTICIAS RESUMEN EN HOME
    homeNews: [
      { featured: true, isNew: true, image: "img/news/noticia-1.jpg", alt: "Evento deportivo", tag: "Institucional", date: "15 Ene 2026", title: "Evento deportivo escolar", text: "Participación estudiantil en actividades deportivas intercolegiales que fortalecen el trabajo en equipo, la disciplina y el orgullo institucional.", href: "noticias.html" },
      { image: "img/news/noticia-2.jpg", alt: "Feria académica", tag: "Académico", date: "28 Feb 2026", title: "Feria académica anual", text: "Exposición de proyectos estudiantiles de las diferentes carreras.", href: "noticias.html" },
      { isNew: true, image: "img/news/noticia-3.jpg", alt: "Graduación", tag: "Eventos", date: "30 Nov 2026", title: "Ceremonia de graduación", text: "Celebración de la promoción 2026 con familiares y maestros.", href: "noticias.html" },
      { image: "img/news/noticia-1.jpg", alt: "Jornada de orientación estudiantil", tag: "Comunidad", date: "12 Mar 2026", title: "Jornada de orientación para familias", text: "Espacio informativo para resolver dudas sobre admisiones, horarios, acompañamiento docente y vida estudiantil.", href: "noticias.html" },
      { image: "img/news/noticia-2.jpg", alt: "Muestra de proyectos técnicos", tag: "Proyectos", date: "08 Abr 2026", title: "Muestra interna de proyectos técnicos", text: "Estudiantes presentaron propuestas prácticas en informática, contaduría y áreas de formación integral.", href: "noticias.html" }
    ],
    // CONTACTO
    contact: {
      mapKicker: "Ubicación",
      mapTitle: "Mapa de ubicación del Instituto Técnico Morazán",
      mapText: "Encuentra fácilmente nuestras instalaciones y accede a la ubicación oficial del Instituto Técnico Morazán en Google Maps.",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d961.1344862604587!2d-88.023348!3d15.5092664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f665b4677a360b5%3A0xf6d8330bb50a873b!2sInstituto%20T%C3%A9cnico%20Moraz%C3%A1n!5e0!3m2!1ses!2shn!4v1774144720718!5m2!1ses!2shn",
      mapLink: "https://www.google.com/maps/search/?api=1&query=Instituto+T%C3%A9cnico+Moraz%C3%A1n%2C+San+Pedro+Sula%2C+Honduras",
      mapButtonLabel: "Ver en Google Maps",
      mapButtonClassName: "btn btn-action mapa-link",
      infoTitle: "Información de contacto",
      infoText: "Comunícate con nosotros, programa tu visita o solicita orientación sobre admisiones, horarios y programas académicos.",
      shareLabel: "Compartir:",
      items: [
        { label: "Dirección:", value: "Bo Guamilito, 2 ave., 5-6 cll.,<br>21102 San Pedro Sula, Cortés, Honduras", icon: "location" },
        { label: "Horario:", value: "Lunes a Viernes: 7:00 AM - 4:00 PM<br>Sábados: 7:00 AM - 12:00 PM", icon: "clock" },
        { label: "Teléfono:", value: "2557-2360", icon: "phone" },
        { label: "Email:", value: "info@tecmorazan.edu.hn", icon: "mail" }
      ],
      social: [
        { href: "https://www.facebook.com/tecnicomorazanhn/", label: "Facebook", ariaLabel: "Visitar Facebook del Instituto Técnico Morazán", icon: "img/icons/social/facebook.svg" },
        { href: "https://www.instagram.com/tecnicomorazan/", label: "Instagram", ariaLabel: "Visitar Instagram del Instituto Técnico Morazán", icon: "img/icons/social/instagram.svg" }
      ],
      formTitle: "Solicita información",
      formText: "Completa el formulario y nos pondremos en contacto contigo para brindarte más detalles sobre admisiones, carreras y matrícula.",
      formFields: {
        nameLabel: "Nombre",
        namePlaceholder: "Ej. María López",
        phoneLabel: "Celular",
        phonePlaceholder: "Ej. 9876-5432",
        emailLabel: "Correo",
        emailPlaceholder: "Ej. nombre@correo.com",
        messageLabel: "Mensaje",
        messagePlaceholder: "Ej. Deseo recibir información sobre matrícula, horarios o carreras disponibles."
      },
      validationMessages: {
        nameRequired: "El nombre es requerido",
        phoneRequired: "El celular es requerido",
        phoneInvalid: "Ingresa un celular válido",
        emailRequired: "El correo es requerido",
        emailInvalid: "Ingresa un correo válido",
        messageRequired: "El mensaje es requerido",
        success: "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.",
        error: "Por favor completa todos los campos correctamente."
      },
      submitLabel: "Enviar solicitud",
      submitClassName: "btn btn-action",
      whatsappTooltip: "Escríbenos por WhatsApp",
      whatsappHref: "https://wa.me/50425572360?text=Hola,%20me%20interesa%20obtener%20información%20sobre%20el%20Instituto%20Técnico%20Morazán"
    },
    floatingButtons: {
      scrollTop: {
        ariaLabel: "Volver arriba",
        tooltip: "Volver arriba"
      }
    },
    // FOOTER DE HOME
    footer: {
      brandName: "Instituto Técnico Morazán",
      lema: "Excelencia Educativa Técnica Empresarial",
      contact: ["Bo. Guamilito, 2 ave., 5-6 cll.", "San Pedro Sula, Cortés, Honduras", "Tel. 2557-2360", "Correo: info@tecmorazan.edu.hn"],
      links: [
        { href: "#inicio", icon: "img/icons/sections/inicio.svg", label: "Inicio" },
        { href: "#nosotros", icon: "img/icons/sections/nosotros.svg", label: "Nosotros" },
        { href: "#niveles", icon: "img/icons/sections/niveles.svg", label: "Niveles" },
        { href: "#galeria", icon: "img/icons/sections/galeria.svg", label: "Galería" },
        { href: "#avisos", icon: "img/icons/sections/avisos.svg", label: "Avisos" },
        { href: "#noticias", icon: "img/icons/sections/noticias.svg", label: "Noticias" },
        { href: "#contacto-info", icon: "img/icons/sections/contactos.svg", label: "Contacto" }
      ],
      social: [
        { href: "https://www.facebook.com/tecnicomorazanhn/", icon: "img/icons/social/facebook.svg", label: "Facebook" },
        { href: "https://www.instagram.com/tecnicomorazan/", icon: "img/icons/social/instagram.svg", label: "Instagram" }
      ],
      copy: "© 2026 Instituto Técnico Morazán. Todos los derechos reservados."
    },
    // MODAL PROMOCIONAL REUTILIZABLE
    promoModal: {
      enabled: true,
      storageKey: "webcolegio-promo-modal",
      version: "promo-demo-2026-01",
      delayMs: 1400,
      showOnceEveryDays: 0,
      startDate: "2026-01-01T00:00:00",
      endDate: "2026-12-31T23:59:59",
      kicker: "Campaña destacada",
      title: "Tu próximo paso académico puede comenzar hoy",
      text: "Explora una propuesta educativa que combina formación integral, acompañamiento cercano y modalidades técnicas pensadas para abrirte más oportunidades.",
      points: [
        "Tercer ciclo y educación media con visión de futuro.",
        "Ambiente formativo con identidad institucional y orientación estudiantil.",
        "Información disponible para matrícula, horarios y modalidades."
      ],
      image: "img/hero/promo-modal-default.jpg",
      imageAlt: "Campaña institucional del Instituto Técnico Morazán",
      primaryLabel: "Solicitar información",
      primaryHref: "#contacto-info",
    secondaryLabel: "Continuar navegando",
    secondaryClassName: "btn btn-section levels-cta-button promo-modal-secondary"
    }
  }
};
