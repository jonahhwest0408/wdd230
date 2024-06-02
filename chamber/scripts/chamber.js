document.addEventListener("DOMContentLoaded", function () {
  const signupButton = document.querySelector("#signup-button");
  const signupModal = document.querySelector("#signup-modal");
  const signupClose = document.querySelector('#signup-close .close')
  const menuButton = document.getElementById("menu-button");
  const closeButton = document.getElementById("close-button");
  const nav = document.querySelector(".nav");

  if (signupButton && signupModal) {
      signupButton.addEventListener("click", () => {
          signupModal.style.display = "block";
      });
  }

  if (signupClose) {
    signupClose.addEventListener("click", () => {
        signupModal.style.display = "none";
        });
  }

  window.addEventListener("click", (event) => {
    if (event.target === signupModal) {
        signupModal.style.display = "none";
    }
});

  const form = document.querySelector("form");
  const thankYouMessage = document.createElement("p");
  thankYouMessage.textContent = "Thank you for completing the form!";
  thankYouMessage.style.color = "#32de84";

  if (form) {
      form.addEventListener("submit", (event) => {
          event.preventDefault();
          form.style.display = "none";
          form.parentNode.insertBefore(thankYouMessage, form.nextSibling);
      });
  }

  if (menuButton) {
      menuButton.addEventListener("click", toggleMenu);
  }

  if (closeButton) {
      closeButton.addEventListener("click", toggleMenu);
  }

  function toggleMenu() {
      const isMenuOpen = nav.classList.contains("active");
      if (!isMenuOpen) {
          nav.classList.add("active");
          menuButton.setAttribute("aria-expanded", "true");
      } else {
          nav.classList.remove("active");
          menuButton.setAttribute("aria-expanded", "false");
      }
  }

  const mediaQuery = window.matchMedia("(min-width: 1024px)");
  function handleTabletChange(e) {
      if (e.matches) {
          closeButton.style.display = "none";
      } else {
          closeButton.style.display = "block";
      }
  }
  mediaQuery.addEventListener("change", handleTabletChange);
  handleTabletChange(mediaQuery);

  const copyrightYear = document.querySelector("#copyright-year");
  const currentYear = new Date().getFullYear();
  if (copyrightYear) {
      copyrightYear.textContent = "© " + currentYear + " | Jonah West | WDD230 | Arizona, United States of America";
  }

  const lastModified = document.querySelector("#lastModified");
  if (lastModified) {
      lastModified.textContent = document.lastModified;
  }
});
