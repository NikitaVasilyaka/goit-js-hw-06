const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');


// Функція поновлення значення спану //
function updateNameOutput(value) {
    nameOutput.textContent = value;
}

// Навішуємо слухач на інпут //
nameInput.addEventListener('input', function() {
    const inputValue = nameInput.value.trim();

  // Якщо інпут порожній, виводимо значення "Anonymous" //
if (inputValue === '') {
    updateNameOutput('Anonymous');
    } else {
    updateNameOutput(inputValue);
    }
});