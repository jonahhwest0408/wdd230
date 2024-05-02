document.addEventListener('DOMContentLoaded', function () {
    var hamburgerButton = document.getElementById('hamburger-button');
    var closeButton = document.getElementById('close-button');
    var mainNav = document.getElementById('main-nav');

    // Toggle visibility of mainNav when hamburgerButton is clicked
    hamburgerButton.addEventListener('click', function () {
        mainNav.classList.toggle('open');
        hamburgerButton.style.display = 'none'; // Hide hamburger button
        closeButton.style.display = 'block'; // Show close button
    });

    closeButton.addEventListener('click', function () {
        mainNav.classList.remove('open');
        hamburgerButton.style.display = 'block'; // Show hamburger button
        closeButton.style.display = 'none'; // Hide close button
    });
});
