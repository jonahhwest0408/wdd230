document.addEventListener("DOMContentLoaded", function () {
  // Functionality for signup modal
  const signupButton = document.querySelector("#signup-button");
  const signupModal = document.querySelector("#signup-modal");

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

  // Functionality for menu button and navigation
  const menuButton = document.getElementById("menu-button");
  const nav = document.querySelector(".nav");

  if (menuButton) {
    menuButton.addEventListener("click", toggleMenu);
  }

  function toggleMenu() {
    const isMenuOpen = nav.classList.contains("active");

    if (!isMenuOpen) {
      nav.classList.add("active");
    } else {
      nav.classList.remove("active");
    }
  }

  // Functionality for copyright year and last modified date
  const copyrightYear = document.querySelector("#copyright-year");
  const currentYear = new Date().getFullYear();
  if (copyrightYear) {
    copyrightYear.textContent =
      "© " + currentYear + " | Jonah West | WDD230 | Arizona, United States of America";
  }

  const lastModified = document.querySelector("#lastModified");
  if (lastModified) {
    lastModified.textContent = document.lastModified;
  }
});
