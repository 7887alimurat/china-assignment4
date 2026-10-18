Discover China - Web Project
Assignment 1: HTML + CSS basics
Assignment 2: Advanced CSS - Flexbox & Grid
Assignment 3: Media Queries + Bootstrap Grid
Assignment 4: Introduction to JavaScript   <-- this version

Team: ey mambo (Alan & Alimurat), group SE-2512

Pages:
- index.html        (home, card group, team, Bootstrap contact form - now validated with JS)
- tourism.html
- attraction.html   (includes the 9-image Bootstrap carousel)
- culture.html
- history.html
- faq.html          (NEW, Assignment 4: FAQ accordion)
- register.html     (NEW, Assignment 4: registration form with JS validation)
- typography.html   (Part 1, Task 1 - responsive typography, no Bootstrap)
- card-group.html   (Part 1, Task 2 - card group with media queries, no Bootstrap)

Stylesheets and scripts:
- css/bootstrap.min.css, js/bootstrap.bundle.min.js   Bootstrap 5.3.3 (local copy, works offline)
- css/style.css          brand colours + few custom rules for the Bootstrap pages
- css/media-queries.css  Part 1 pages (Task 1 and Task 2)

Where each task is implemented:
- Task 1 Responsive typography : typography.html + css/media-queries.css (3 breakpoints)
- Task 2 Card group            : card-group.html + css/media-queries.css (3 / 2 / 1 cards per row)
- Task 3 Bootstrap grid        : all pages - row / col-12 col-md-6 col-lg-6 (two columns), col-lg-4 (three columns), container
- Task 4 Spacing utilities     : all pages - m-*, p-*, mt-lg-*, px-sm-*, gap-*, g-* (no custom margins/paddings in style.css)
- Task 5 Navbar                : all pages - navbar-expand-lg + navbar-toggler (hamburger below 992px)
- Task 6 Buttons               : btn-primary / btn-secondary / btn-outline-* / btn-lg / btn-sm / btn-group (index.html and others)
- Task 7 Carousel              : attraction.html - 9 slides, indicators and prev/next controls
- Task 8 Cards                 : index.html (card-group) and "Keep Exploring" (row + col-lg-4 cards) on every page
- Task 9 Form                  : index.html - form-control, form-select, input-group, form-check, form-switch
- Task 10 Accessibility        : semantic header/nav/main/aside/footer, skip link, aria-labels, alt text, high-contrast colours

Open index.html to start the website.


ASSIGNMENT 4 - JavaScript (files in js/):
- Task 1 Form validation  : js/validation.js   -> register.html (name, email, country, password length, password confirmation, terms) and the contact form on index.html
- Task 2 Accordion        : js/accordion.js    -> faq.html (answers hidden by default, smooth max-height transition)
- Task 3 Popup form       : js/popup.js        -> "Subscribe" button in the navbar of every page (close by X, outside click or Esc)
- Task 4 Background color : js/bgcolor.js      -> "Change background color" button in the footer of every page (cycles 6 colors, remembered via localStorage)
- Task 5 Date and time    : js/datetime.js     -> footer of every page, updated every second
The popup, the button and the date/time block are in the navbar/footer of index, tourism, attraction, culture, history, faq and register pages.
