// Отримати посилання на баттони і спан зі значенням //
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector('#value');


// Змінна лічільника зі значенням 0 (ініціалізація) //
let counterValue = 0;



// Оновлення лічільника та інтерфейсу //
function updateCounterValue(newValue) {
    counterValue = newValue;
    valueSpan.textContent = counterValue;
}


// Наліпимо слухачів на баттони //
decrementBtn.addEventListener('click', function() {
    updateCounterValue(counterValue - 1);
});

incrementBtn.addEventListener('click', function() {
    updateCounterValue(counterValue + 1);
});
