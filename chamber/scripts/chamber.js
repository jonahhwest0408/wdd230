const signupButton = document.querySelector('#signup-button');
const signupModal = document.querySelector('#signup-modal');
const closeModal = document.querySelector('.close');

signupButton.addEventListener('click', () => {
    signupModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    signupModal.style.display = 'none';
});

const form = document.querySelector('form');
const thankYouMessage = document.createElement('p');
thankYouMessage.textContent = 'Thank you for completing the form!';
thankYouMessage.style.color = '#32de84';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.style.display = 'none';
    form.parentNode.insertBefore(thankYouMessage, form.nextSibling);
});

const menuButton = document.getElementById('menu-button');
const closeButton = document.querySelector('.close-button');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const ariaExpanded = menuButton.getAttribute('aria-expanded');
  if (ariaExpanded === 'false') {
    menuButton.setAttribute('aria-expanded', 'true');
    nav.style.transform = 'translateX(0)';
  } else {
    menuButton.setAttribute('aria-expanded', 'false');
    nav.style.transform = 'translateX(-100%)';
  }
});

closeButton.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  nav.style.transform = 'translateX(-100%)';
});

const copyrightYear = document.querySelector('#copyright-year');
const currentYear = new Date().getFullYear();
copyrightYear.textContent = `© ${currentYear} | Jonah West | WDD230 | Arizona, United States of America`;

const lastModified = document.querySelector('#lastModified');
lastModified.textContent = document.lastModified;