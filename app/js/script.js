let slider = document.querySelector('.range-filter__slider');
let span = document.querySelector('.range-filter__value');


slider.oninput = () => {
    span.innerHTML = `${slider.value}%`;
}