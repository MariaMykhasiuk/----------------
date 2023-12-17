// Отримуємо посилання на елемент форми
var form = document.getElementById("applicationForm");

// Додаємо обробник події на кнопку "Подати заявку"
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Зупиняємо стандартну обробку форми

    // Отримуємо дані форми
    var formData = new FormData(form);

    // Відправляємо POST-запит на Formspree
    fetch("https://formspree.io/f/meqyjery", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("Відповідь від Formspree:", data);
        // Обробка відповіді за необхідності
    })
    .catch(error => {
        console.error("Помилка відправки запиту:", error);
        // Обробка помилки за необхідності
    });
});

