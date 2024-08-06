document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const button = document.querySelector('.button');
        if (button) {
            button.classList.add('visible');
        }
    }, 2000);
});