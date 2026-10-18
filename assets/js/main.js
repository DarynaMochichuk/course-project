document.addEventListener("DOMContentLoaded", function () {
    // 1. Мобільне меню 
    const burgerToggle = document.getElementById("burgerToggle");
    const navMenu = document.getElementById("navMenu");

    if (burgerToggle && navMenu) {
        burgerToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
            burgerToggle.classList.toggle("open");
        });
    }

    // Динамічне формування карток послуг через DOM 
    const servicesGrid = document.getElementById("dynamicServicesGrid");
    if (servicesGrid) {
        const servicesData = [
            {
                title: "Agriculture Products",
                image: "assets/images/icons/apple.png",
                icon: "assets/images/icons/service1.png",
                link: "#"
            },
            {
                title: "Organic Products",
                image: "assets/images/icons/tomato.png",
                icon: "assets/images/icons/service2.png",
                link: "#"
            },
            {
                title: "Fresh Vegetables",
                image: "assets/images/icons/freshvegetables.png",
                icon: "assets/images/icons/service3.png",
                link: "#"
            },
            {
                title: "Dairy Products",
                image: "assets/images/icons/grapes.png",
                icon: "assets/images/icons/service4.png",
                link: "#"
            }
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

    // Інтерактивний компонент
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

    // Модальне вікно
    const modal = document.getElementById("customModal");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const modalForm = document.getElementById("modalForm");

    if (modal && openModalBtn) {
        openModalBtn.addEventListener("click", () => {
            modal.classList.add("active");
        });

        const closeModal = () => {
            modal.classList.remove("active");
        };

        if (closeModalBtn) {
            closeModalBtn.addEventListener("click", closeModal);
        }

        // Закриття при кліку поза межами
        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        if (modalForm) {
            modalForm.addEventListener("submit", (e) => {
                e.preventDefault();
                alert("Форму успішно надіслано!");
                modalForm.reset();
                closeModal();
            });
        }
    }
});