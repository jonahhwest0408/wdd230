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

// Check if last visit date is stored in localStorage
if (!localStorage.lastVisitDate) {
    localStorage.lastVisitDate = new Date().toLocaleDateString();
  }
  
  // Retrieve last visit date from localStorage
  const lastVisitDate = localStorage.lastVisitDate;
  
  // Display last visit date in the modal
  document.getElementById('last-visit-date').textContent = lastVisitDate;
  
  // Get the modal
  const modal = document.getElementById('myModal');
  modal.style.display = 'block'; // Show the modal
  
  // Close the modal when the close button is clicked
  const closeBtn = document.getElementsByClassName('close')[0];
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  // Calculate and display the number of days since last visit
  const currentDate = new Date();
  const timeDiff = currentDate.getTime() - new Date(lastVisitDate).getTime();
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  
  // Construct the message
  let message = "";
  if (diffDays === 1) {
    message = "You last visited 1 day ago.";
  } else {
    message = "You last visited " + diffDays + " days ago.";
  }
  
  // Update the message in the modal
  document.getElementById("last-visit-message").innerText = message;
