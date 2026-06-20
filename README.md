# Портфолио Елизаветы Якубовой

Статический одностраничный сайт-портфолио без фреймворков: HTML, CSS и JavaScript.

## Структура

```text
.
├── index.html
├── styles.css
├── script.js
├── assets
│   ├── images
│   │   └── изображения и обложки работ
│   └── files
│       ├── hse-jews
│       │   ├── hse-brandbook.pdf
│       │   └── instagram-hse_jews.url
│       ├── presentations
│       │   ├── coffeemania-analysis.pdf
│       │   ├── om-nom-game.pdf
│       │   └── vassa-bokova-case.pdf
│       ├── zotman-pizza
│       │   ├── zotman-audit-part-1.pdf
│       │   └── zotman-audit-part-2.pdf
│       ├── elizaveta-yakubova-resume.pdf
│       └── elizaveta-yakubova-web-portfolio.zip
└── README.md
```

## Куда класть материалы

- `assets/images/` — изображения работ и обложки проектов.
- `assets/files/hse-jews/` — брендбук HSE Jews и ссылка на Instagram `hse_jews`.
- `assets/files/presentations/` — все презентационные PDF.
- `assets/files/zotman-pizza/` — PDF-аудит Zotman Pizza.
- `assets/files/` — резюме, ZIP-архив и остальные PDF-файлы.

## Локальный запуск

```bash
python3 -m http.server 4174
```

После запуска откройте `http://127.0.0.1:4174`.

## Публикация на GitHub Pages

1. Создайте репозиторий на GitHub.
2. Загрузите в него `index.html`, `styles.css`, `script.js`, `assets/` и `README.md`.
3. Откройте `Settings → Pages`.
4. В `Build and deployment` выберите `Deploy from a branch`.
5. Выберите ветку `main` и папку `/root`.
6. Сохраните настройки и дождитесь ссылки GitHub Pages.

## Публикация на Netlify

1. Откройте Netlify и выберите `Add new site`.
2. Подключите GitHub-репозиторий или перетащите папку проекта в Netlify Drop.
3. Build command оставьте пустым.
4. Publish directory: `/` или корень проекта.
5. Опубликуйте сайт.
