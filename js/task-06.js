const inputEl = document.querySelector('#validation-input');
const inputLength = inputEl.getAttribute('data-length');


inputEl.addEventListener('blur', () => {
    const inputValue = inputEl.value;

if (inputValue.length === parseInt(inputLength)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
    } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
    }
});

// Якщо прибрати фокус то ефекти працюють //