const copyrightYear = document.querySelector('#copyright-year');
const currentYear = new Date().getFullYear();
copyrightYear.textContent = `© ${currentYear} | Jonah West | Arizona, United States of America`;

const lastModified = document.querySelector('#lastModified');
lastModified.textContent = document.lastModified;

function updatePageVisits() {
    let pageVisits = localStorage.getItem('pageVisits')

    if (!pageVisits) {
        pageVisits = 0;
    }

    pageVisits++;

    localStorage.setItem('pageVisits', pageVisits);

    document.getElementById('page-visits').textContent = pageVisits;
}

window.onload = updatePageVisits;

// Check if the user has visited the site before
if (!localStorage.lastVisitDate) {
    // If not, set the current date as the last visit date
    localStorage.lastVisitDate = new Date().toLocaleDateString();
  }
  
  // Get the last visit date from local storage
  const lastVisitDate = localStorage.lastVisitDate;
  
  // Display the last visit date in the modal
  document.getElementById('last-visit-date').textContent = lastVisitDate;
  
  // Show the modal to the user
  const modal = document.getElementById('myModal');
  modal.style.display = 'block';
  
  // Add an event listener to close the modal when the user clicks on the close button
  const closeBtn = document.getElementsByClassName('close')[0];
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
