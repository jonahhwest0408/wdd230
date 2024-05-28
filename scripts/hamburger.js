document.addEventListener('DOMContentLoaded', function () {
    var hamburgerButton = document.getElementById('hamburger-button');
    var closeButton = document.getElementById('close-button');
    var mainNav = document.getElementById('main-nav');

    hamburgerButton.addEventListener('click', function () {
        mainNav.classList.toggle('open');
        hamburgerButton.style.display = 'none'; 
        closeButton.style.display = 'block'; 
    });

    closeButton.addEventListener('click', function () {
        mainNav.classList.remove('open');
        hamburgerButton.style.display = 'block'; 
        closeButton.style.display = 'none'; 
    });
});
