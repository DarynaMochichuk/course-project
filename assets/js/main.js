document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо елементи бургер-кнопки та мобільного меню
    const burgerToggle = document.getElementById("burgerToggle");
    const navMenu = document.getElementById("navMenu");

    // Перевіряємо, чи існують елементи на сторінці, щоб уникнути помилок в консолі
    if (burgerToggle && navMenu) {
        burgerToggle.addEventListener("click", function() {
            // Перемикаємо клас active для відображення/ховання меню
            navMenu.classList.toggle("active");
            
            // Опціонально: додамо клас для трансформації самої кнопки бургера у хрестик
            burgerToggle.classList.toggle("open");
        });
    }
});