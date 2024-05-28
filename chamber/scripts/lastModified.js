  // Functionality for copyright year and last modified date
  const copyrightYear = document.querySelector("#copyright-year");
  const currentYear = new Date().getFullYear();
  copyrightYear.textContent =
    "© " + currentYear + " | Jonah West | WDD230 | Arizona, United States of America";

  const lastModified = document.querySelector("#lastModified");
  lastModified.textContent = document.lastModified;
