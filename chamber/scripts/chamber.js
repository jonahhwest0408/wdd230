document.addEventListener("DOMContentLoaded", function () {
  const signupButton = document.querySelector("#signup-button");
  const signupModal = document.querySelector("#signup-modal");
  const menuButton = document.getElementById("menu-button");
  const closeButton = document.getElementById("close-button");
  const nav = document.querySelector(".nav");

  if (signupButton && signupModal) {
      signupButton.addEventListener("click", () => {
          signupModal.style.display = "block";
      });
  }

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
