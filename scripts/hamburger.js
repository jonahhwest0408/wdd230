document.addEventListener('DOMContentLoaded', function () {
    var hamburgerButton = document.getElementById('hamburger-button');
    var mainNav = document.getElementById('main-nav');

    // Toggle visibility of mainNav when hamburgerButton is clicked
    hamburgerButton.addEventListener('click', function () {
        mainNav.classList.toggle('open');
    });
});
