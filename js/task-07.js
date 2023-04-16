const fontSizeControl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');





fontSizeControl.addEventListener('input', () => {
    textEl.style.fontSize = `${fontSizeControl.value}px`;
});