document.addEventListener("DOMContentLoaded", function () {
    // 1. Мобільне меню (бургер)
    const burgerToggle = document.getElementById("burgerToggle");
    const navMenu = document.getElementById("navMenu");

    if (burgerToggle && navMenu) {
        burgerToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
            burgerToggle.classList.toggle("open");
        });
    }

    // 2. Словник перекладів для всіх сторінок
    const translations = {
        ua: {
            // Загальне / Меню
            menuHome: "Головна",
            menuAbout: "Про нас",
            menuServices: "Послуги",
            menuProjects: "Проєкти",
            menuNews: "Новини",
            menuShop: "Магазин",
            menuContact: "Контакти",
            exploreTitle: "Навігація",
            contactTitle: "Контакти",
            footerText: "Існує багато варіацій пасажів Lorem Ipsum, але більшість зазнала змін.",
            copyrightCourse: "© Курсовий проєкт 2026 від Agrios",
            
            // Головна сторінка
            heroSub: "ЛАСКАВО ПРОСИМО ДО AGRIOS",
            heroTitle: "Сільське господарство та екофермерство",
            heroText: "Ми вирощуємо екологічно чисті продукти найвищої якості за допомогою новітніх технологій.",
            btnDiscover: "Дізнатися більше",
            btnBook: "Замовити консультацію",
            featNum1: "Особливість 01",
            featTitle1: "Використовуємо нові технології",
            featNum2: "Особливість 02",
            featTitle2: "Розумні органічні послуги",
            featNum3: "Особливість 03",
            featTitle3: "Реформування систем",
            aboutSub: "Хто ми",
            aboutTitle: "Сільське господарство та органічна ферма",
            aboutHighlight: "Agrios — найбільша глобальна органічна ферма.",
            aboutText: "Існує багато варіацій пасажів Lorem Ipsum, але більшість зазнала змін у тій чи іншій формі.",
            aboutFeat1: "Вирощування фруктів та овочів",
            aboutFeat2: "Поради щодо дозрівання плодів",
            aboutList1: "Lorem Ipsum — це не просто випадковий текст.",
            aboutList2: "Створює перший справжній генератор в інтернеті.",
            servSub: "Наші послуги",
            servTitle: "Що ми пропонуємо",
            stat1: "Сільськогосподарські продукти",
            stat2: "Виконані проєкти",
            stat3: "Задоволені клієнти",
            stat4: "Професійні фермери",
            videoTitle: "Сільське господарство важливе для <br> майбутнього розвитку",
            projSub: "Нещодавні проєкти",
            projTitle: "Переглянути проєкти",
            proj1: "Легкий <br> збір врожаю",
            proj2: "Сільське <br> господарство",
            proj3: "Органічні <br> рішення",
            testSub: "Відгуки",
            testTitle: "Що говорять <br> про <br> Agrios",
            testDesc: "Існує багато варіацій пасажів, але більшість із них зазнала змін через жарти чи випадкові слова.",
            testBtn: "Усі відгуки",
            testQuote: "Існує багато варіацій пасажів, але більшість із них зазнала змін.",
            badgeText: "Агро <br> Професійний <br> Лідер",
            whySub: "Переваги ферми",
            whyTitle: "Чому обирають Agrios",
            whyDesc: "Існує багато варіацій пасажів, але більшість із них зазнала змін.",
            benefit1Title: "Якісна органічна їжа",
            benefit1Desc: "Тут ви можете бути певні, що немає нічого прихованого.",
            benefit2Title: "Професійні фермери",
            benefit2Desc: "Тут ви можете бути певні, що немає нічого прихованого.",
            benefit3Title: "Якісні продукти",
            benefit3Desc: "Тут ви можете бути певні, що немає нічого прихованого.",
            blogSub: "З блогу",
            blogTitle: "Новини та статті",
            comment1: "1 коментар",
            comment0: "0 коментарів",
            news1Title: "Повернення виробництва їжі до міст",
            news2Title: "Майбутнє фермерства, розумні системи зрошення",
            news3Title: "Агрономія та зв'язок з іншими науками",

            // Сторінка "Про нас" (about.html)
            aboutBannerSub: "Дізнайтеся більше про нас",
            aboutBannerTitle: "Про нашу ферму",
            breadcrumbAbout: "Про нас",
            aboutPageText: "Ми присвячені вирощуванню чистих культур без пестицидів, використовуючи передові технології розумного землеробства та традиційну турботу.",
            aboutPageList1: "100% сертифіковані методи органічного землеробства.",
            aboutPageList2: "Професійні агрономи та сучасне обладнання.",
            aboutBtnServices: "Наші послуги",

            // Сторінка "Послуги" (services.html)
            servicesBannerSub: "Що ми пропонуємо",
            servicesBannerTitle: "Наші послуги",

            // Сторінка "Контакти" (contact.html)
            contactBannerSub: "Зв'яжіться з нами",
            contactBannerTitle: "Контакти",
            writeMsgSub: "Напишіть нам",
            writeMsgTitle: "Маєте запитання?",
            sendMsgBtn: "Надіслати повідомлення",
            faqSub: "Швидкі відповіді",
            faqMainTitle: "Поширені запитання",
            faqQ1: "Чому продукція Agrios органічна?",
            faqA1: "Ми використовуємо 100% натуральні добрива та суворо дотримуємося стандартів екологічного землеробства без будь-ких хімічних добавок.",
            faqQ2: "Як я можу оформити замовлення?",
            faqA2: "Ви можете легко обрати продукти з нашого каталогу або звернутися безпосередньо до команди підтримки через телефон чи пошту.",
            faqQ3: "Чи є доставка додому?",
            faqA3: "Так, ми пропонуємо швидку та надійну доставку свіжих органічних продуктів прямо до вашого порогу в межах стандартних зон.",

            // Плейсхолдери та форми
            namePlaceholder: "Введіть ім'я",
            emailPlaceholder: "Ваша електронна пошта",
            msgPlaceholder: "Напишіть повідомлення...",
            modalTitle: "Замовити консультацію",
            modalNameLabel: "Ваше ім'я:",
            modalEmailLabel: "Електронна пошта:",
            modalSubmit: "Надіслати"
        },
        en: {
            // General / Menu
            menuHome: "Home",
            menuAbout: "About",
            menuServices: "Services",
            menuProjects: "Projects",
            menuNews: "News",
            menuShop: "Shop",
            menuContact: "Contact",
            exploreTitle: "Explore",
            contactTitle: "Contact",
            footerText: "There are many variations of passages of lorem ipsum available, but the majority suffered.",
            copyrightCourse: "© Coursework Project 2026 by Agrios",

            // Main page
            heroSub: "WELCOME TO AGRIOS FARMING",
            heroTitle: "Agriculture & Eco Farming",
            heroText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            btnDiscover: "Discover More",
            btnBook: "Book Consultation",
            featNum1: "Feature 01",
            featTitle1: "We're using a new technology",
            featNum2: "Feature 02",
            featTitle2: "Good in smart organic services",
            featNum3: "Feature 03",
            featTitle3: "Reforming in the systems",
            aboutSub: "Our Introductions",
            aboutTitle: "Agriculture & Organic Product Farm",
            aboutHighlight: "Agrios is the largest global organic farm.",
            aboutText: "There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random word which don't look even.",
            aboutFeat1: "Growing fruits vegetables",
            aboutFeat2: "Tips for ripening your fruits",
            aboutList1: "Lorem Ipsum is not simply random text.",
            aboutList2: "Making this the first true generator on the internet.",
            servSub: "Our Services",
            servTitle: "What We Offer",
            stat1: "Agriculture Products",
            stat2: "Projects Completed",
            stat3: "Satisfied Clients",
            stat4: "Experts Farmers",
            videoTitle: "Agriculture Matters to the <br> Future of Development",
            projSub: "Recently Completed",
            projTitle: "Explore Projects",
            proj1: "Easy <br> Harvesting",
            proj2: "Agriculture <br> Farming",
            proj3: "Organic <br> Solutions",
            testSub: "Our Testimonials",
            testTitle: "What They're <br> Talking About <br> Agrios",
            testDesc: "There are many variations of passages of available but the majority have suffered alteration in some form by injected humor or random word which don't look even.",
            testBtn: "View All Testimonials",
            testQuote: "There are many variations of passages of available but the majority have suffered alteration in some form by injected humor or random word which don't look even.",
            badgeText: "Agriculture<br>Professional<br>Leader",
            whySub: "Our Farm Benefits",
            whyTitle: "Why Choose Agrios Market",
            whyDesc: "There are many variations of passages of available but the majority have suffered alteration in some form by injected humor or random word which don't look even.",
            benefit1Title: "Quality Organic Food",
            benefit1Desc: "There are variation You need to be sure there is anything hidden in the middle of text.",
            benefit2Title: "Professional Farmers",
            benefit2Desc: "There are variation You need to be sure there is anything hidden in the middle of text.",
            benefit3Title: "Quality Products",
            benefit3Desc: "There are variation You need to be sure there is anything hidden in the middle of text.",
            blogSub: "From the Blog",
            blogTitle: "News & Articles",
            comment1: "1 Comment",
            comment0: "0 Comments",
            news1Title: "Bringing Food Production Back To Cities",
            news2Title: "The Future of Farming, Smart Irrigation Solutions",
            news3Title: "Agronomy and relation to Other Sciences",

            // About page (about.html)
            aboutBannerSub: "Get to Know Us",
            aboutBannerTitle: "About Our Farm",
            breadcrumbAbout: "About Us",
            aboutPageText: "There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form by injected humor or random words.",
            aboutPageList1: "100% certified organic farming methods.",
            aboutPageList2: "Professional agronomists and modern equipment.",
            aboutBtnServices: "Our Services",

            // Services page (services.html)
            servicesBannerSub: "What We Offer",
            servicesBannerTitle: "Our Services",

            // Contact page (contact.html)
            contactBannerSub: "Get in Touch",
            contactBannerTitle: "Contact Us",
            writeMsgSub: "Write a Message",
            writeMsgTitle: "Have Any Questions?",
            sendMsgBtn: "Send Message",
            faqSub: "Quick Answers",
            faqMainTitle: "Frequently Asked Questions",
            faqQ1: "What makes Agrios organic?",
            faqA1: "We use 100% natural fertilizers and strictly follow ecological farming standards without any chemical additives.",
            faqQ2: "How can I place an order for products?",
            faqA2: "You can easily select products from our catalog or contact our support team directly via phone or email.",
            faqQ3: "Do you provide home delivery?",
            faqA3: "Yes, we offer fast and reliable organic food delivery straight to your doorstep within standard regional zones.",

            // Placeholders and forms
            namePlaceholder: "Your Name",
            emailPlaceholder: "Email Address",
            msgPlaceholder: "Write Message...",
            modalTitle: "Order Consultation",
            modalNameLabel: "Ваше ім'я:",
            modalEmailLabel: "Електронна пошта:",
            modalSubmit: "Submit"
        }
    };

    const btnUa = document.getElementById("langUa");
    const btnEn = document.getElementById("langEn");

    function setLanguage(lang) {
        localStorage.setItem("selectedLang", lang);

        if (btnUa && btnEn) {
            btnUa.classList.toggle("active", lang === "ua");
            btnEn.classList.toggle("active", lang === "en");
        }

        document.querySelectorAll("[data-lang-key]").forEach(element => {
            const key = element.getAttribute("data-lang-key");
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        document.querySelectorAll("[data-lang-placeholder]").forEach(element => {
            const key = element.getAttribute("data-lang-placeholder");
            if (translations[lang] && translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });

        document.documentElement.lang = lang;
    }

    if (btnUa && btnEn) {
        btnUa.addEventListener("click", () => setLanguage("ua"));
        btnEn.addEventListener("click", () => setLanguage("en"));
    }

    const savedLang = localStorage.getItem("selectedLang") || "en";
    setLanguage(savedLang);

    // 3. Динамічне формування карток послуг через DOM
    const servicesGrid = document.getElementById("dynamicServicesGrid");
    if (servicesGrid) {
        const servicesData = [
            { title: "Agriculture Products", image: "assets/images/icons/apple.png", icon: "assets/images/icons/service1.png", link: "#" },
            { title: "Organic Products", image: "assets/images/icons/tomato.png", icon: "assets/images/icons/service2.png", link: "#" },
            { title: "Fresh Vegetables", image: "assets/images/icons/freshvegetables.png", icon: "assets/images/icons/service3.png", link: "#" },
            { title: "Dairy Products", image: "assets/images/icons/grapes.png", icon: "assets/images/icons/service4.png", link: "#" }
        ];

        servicesData.forEach(service => {
            const card = document.createElement("div");
            card.classList.add("service-card");
            card.style.backgroundImage = `url('${service.image}')`;

            card.innerHTML = `
                <div class="service-icon-badge">
                    <img src="${service.icon}" alt="Icon">
                </div>
                <div class="service-card-bottom">
                    <h3>${service.title.replace(' ', '<br>')}</h3>
                </div>
                <a href="${service.link}" class="service-readmore-btn">Read More</a>
            `;
            servicesGrid.appendChild(card);
        });
    }

    // 4. Акордеон (FAQ)
    const faqItems = document.querySelectorAll(".faq-item");
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector(".faq-question");
            question.addEventListener("click", () => {
                faqItems.forEach(other => {
                    if (other !== item) other.classList.remove("active");
                });
                item.classList.toggle("active");
            });
        });
    }

    // 5. Модальне вікно
    const modal = document.getElementById("customModal");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const modalForm = document.getElementById("modalForm");

    if (modal && openModalBtn) {
        openModalBtn.addEventListener("click", (e) => {
            e.preventDefault();
            modal.classList.add("active");
        });

        const closeModal = () => modal.classList.remove("active");

        if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
        window.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

        if (modalForm) {
            modalForm.addEventListener("submit", (e) => {
                e.preventDefault();
                alert("Успішно надіслано! / Successfully sent!");
                modalForm.reset();
                closeModal();
            });
        }
    }
});