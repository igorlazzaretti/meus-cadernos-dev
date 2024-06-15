// script.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const toggleContent = document.querySelector('.toggle-content');

    toggleButton.addEventListener('click', () => {
        if (toggleContent.style.display === 'none' || toggleContent.style.display === '') {
            toggleContent.style.display = 'block';
            toggleButton.textContent = 'Recolher';
        } else {
            toggleContent.style.display = 'none';
            toggleButton.textContent = 'Mostrar';
        }
    });
});
