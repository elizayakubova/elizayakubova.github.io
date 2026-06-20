const projects = {
  "hse-jews": {
    index: "[01]",
    title: "HSE Jews",
    type: "айдентика / соцсети / события",
    year: "2023 — сейчас",
    description:
      "Брендбук, афиши, обложки для Reels, поздравительные открытки, презентации и визуальные материалы для мероприятий HSE Jews. Проект соединяет культурный контекст с гибкой системой для соцсетей и событий.",
    pdf: "assets/files/hse-jews/hse-brandbook.pdf",
    extraLinks: [{ label: "Инстаграм hse_jews", href: "https://www.instagram.com/hse_jews/" }],
    images: [
      ["assets/images/hse-brandbook-cover.jpg", "Обложка брендбука HSE Jews"],
      ["assets/images/hse-poster-hanukkah.jpg", "Афиша ханукального события HSE Jews"],
      ["assets/images/hse-purim-screen.jpg", "Экранный визуал HSE Jews для Пурима"],
      ["assets/images/hse-valentine.jpg", "Валентинка HSE Jews для соцсетей"]
    ]
  },
  "zotman-pizza": {
    index: "[02]",
    title: "Zotman Pizza",
    type: "аудит / визуальное исследование",
    year: "2026",
    description:
      "Визуальный аудит и исследовательская презентация для Zotman Pizza. Для сайта использованы обложки из исходных PDF, чтобы проект быстро загружался и аккуратно отображался в сетке.",
    extraLinks: [
      { label: "Zotman PDF — часть 1", href: "assets/files/zotman-pizza/zotman-audit-part-1.pdf" },
      { label: "Zotman PDF — часть 2", href: "assets/files/zotman-pizza/zotman-audit-part-2.pdf" }
    ],
    images: [
      ["assets/images/zotman-audit-cover.jpg", "Обложка аудита Zotman Pizza"],
      ["assets/images/zotman-audit-detail.jpg", "Обложка второй части аудита Zotman Pizza"]
    ]
  },
  "podcast-kirik": {
    index: "[03]",
    title: "Подкаст «Крик!»",
    type: "постер / превью / презентация",
    year: "2024",
    description:
      "Визуальные материалы для подкаст-концепции: постер, превью и презентация. Проект строится на выразительной типографике и прямом редакционном настроении.",
    pdf: "assets/files/podcast-kirik-poster.pdf",
    images: [
      ["assets/images/podcast-kirik-preview.jpg", "Превью подкаста «Крик!»"],
      ["assets/images/podcast-kirik-poster.jpg", "Постер подкаста «Крик!»"],
      ["assets/images/podcast-kirik-presentation.jpg", "Обложка презентации подкаста «Крик!»"]
    ]
  },
  "yakhad-belebi": {
    index: "[04]",
    title: "Яхад / Belebi",
    type: "соцсети / стикеры / визуальные материалы",
    year: "2024 — 2025",
    description:
      "Визуалы для соцсетей, стикеры и материалы для комьюнити-проектов. В работе важны дружелюбная графика, узнаваемость и простая коммуникация.",
    pdf: "assets/files/yakhad-stickers.pdf",
    extraLinks: [{ label: "Смотреть Belebi PDF", href: "assets/files/belebi.pdf" }],
    images: [
      ["assets/images/yakhad-stickers-cover.jpg", "Стикерпак Яхад"],
      ["assets/images/belebi-cover.jpg", "Визуальные материалы Belebi"]
    ]
  },
  "vassa-bokova": {
    index: "[05]",
    title: "Vassa Bokova",
    type: "кейс / визуальная презентация",
    year: "2025",
    description:
      "Визуальная презентация кейса с ясной графической системой, крупной выразительной типографикой и редакционным ритмом.",
    pdf: "assets/files/presentations/vassa-bokova-case.pdf",
    images: [["assets/images/vassa-bokova-cover.jpg", "Обложка кейса Vassa Bokova"]]
  },
  presentations: {
    index: "[06]",
    title: "Презентации",
    type: "исследования / редакционная верстка / концепты",
    year: "2024 — 2025",
    description:
      "Одна папка с презентационными проектами: учебные исследования, визуальный анализ, концепты и редакционная верстка. Внутри собраны Bodom, анализ «Кофемании», Om Nom Game и другие презентационные материалы.",
    extraLinks: [
      { label: "Анализ Кофемании PDF", href: "assets/files/presentations/coffeemania-analysis.pdf" },
      { label: "Om Nom Game PDF", href: "assets/files/presentations/om-nom-game.pdf" }
    ],
    images: [
      ["assets/images/presentations-editorial-cover.jpg", "Редакционная исследовательская презентация"],
      ["assets/images/bodom-cover.jpg", "Обложка презентации Bodom"],
      ["assets/images/coffeemania-cover.jpg", "Обложка анализа «Кофемании»"],
      ["assets/images/om-nom-game-cover.jpg", "Обложка презентации Om Nom Game"]
    ]
  }
};

const modal = document.querySelector("[data-modal]");
const closeModalButton = document.querySelector("[data-modal-close]");
const modalIndex = document.querySelector("[data-modal-index]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalType = document.querySelector("[data-modal-type]");
const modalYear = document.querySelector("[data-modal-year]");
const modalDescription = document.querySelector("[data-modal-description]");
const modalActions = document.querySelector("[data-modal-actions]");
const modalGallery = document.querySelector("[data-modal-gallery]");
const viewCursor = document.querySelector(".view-cursor");
const projectCards = document.querySelectorAll("[data-project]");
const mobileColorQuery = window.matchMedia("(max-width: 620px)");
let lastFocusedElement = null;
let mobileColorObserver = null;

const createProjectLink = (label, href) => {
  const link = document.createElement("a");
  link.href = href;
  link.textContent = label;
  link.target = "_blank";
  link.rel = "noreferrer";
  return link;
};

const openProject = (projectId) => {
  const project = projects[projectId];
  if (!project || !modal) return;

  lastFocusedElement = document.activeElement;
  modal.dataset.project = projectId;
  modalIndex.textContent = project.index;
  modalTitle.textContent = project.title;
  modalType.textContent = project.type;
  modalYear.textContent = project.year;
  modalDescription.textContent = project.description;

  modalActions.replaceChildren();
  if (project.pdf) {
    modalActions.append(createProjectLink("Смотреть PDF", project.pdf));
  }
  project.extraLinks?.forEach((link) => {
    modalActions.append(createProjectLink(link.label, link.href));
  });

  modalGallery.replaceChildren(
    ...project.images.map(([src, alt]) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = alt;
      img.loading = "lazy";
      return img;
    })
  );

  document.body.classList.add("modal-open");
  modal.showModal();
  closeModalButton.focus();
};

const closeProject = () => {
  if (!modal?.open) return;
  modal.close();
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus();
};

document.querySelectorAll("[data-project]").forEach((card) => {
  const projectId = card.dataset.project;
  const button = card.querySelector("button");

  button.addEventListener("click", () => openProject(projectId));

  card.addEventListener("mouseenter", () => viewCursor?.classList.add("is-visible"));
  card.addEventListener("mouseleave", () => viewCursor?.classList.remove("is-visible"));
});

const updateMobileColorObserver = () => {
  mobileColorObserver?.disconnect();
  mobileColorObserver = null;
  projectCards.forEach((card) => card.classList.remove("is-in-view"));

  if (!mobileColorQuery.matches || !("IntersectionObserver" in window)) return;

  mobileColorObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-in-view", entry.isIntersecting);
      });
    },
    {
      rootMargin: "-28% 0px -28% 0px",
      threshold: 0
    }
  );

  projectCards.forEach((card) => mobileColorObserver.observe(card));
};

updateMobileColorObserver();

if (typeof mobileColorQuery.addEventListener === "function") {
  mobileColorQuery.addEventListener("change", updateMobileColorObserver);
} else {
  mobileColorQuery.addListener(updateMobileColorObserver);
}

document.addEventListener("mousemove", (event) => {
  if (!viewCursor) return;
  viewCursor.style.left = `${event.clientX}px`;
  viewCursor.style.top = `${event.clientY}px`;
});

closeModalButton?.addEventListener("click", closeProject);

modal?.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeProject();
  }
});

modal?.addEventListener("close", () => {
  delete modal.dataset.project;
  document.body.classList.remove("modal-open");
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProject();
  }
});
