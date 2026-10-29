
// Отримуємо всі кнопки додавання товару
const buttons = document.querySelectorAll(".add-to-cart");

// Отримуємо елемент лічильника кошика
const cartCount = document.getElementById("cart-count");

// Початкова кількість товарів
let count = 0;

// Додаємо обробник події для кожної кнопки
buttons.forEach(button => {
    button.addEventListener("click", function() {

        // Збільшуємо кількість товарів
        count++;

        // Оновлюємо лічильник
        cartCount.textContent = count;

        // Змінюємо текст кнопки
        button.textContent = "Додано!";

        // Повертаємо початковий текст через секунду
        setTimeout(() => {
            button.textContent = "Додати в кошик";
        }, 1000);

    });
});
