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

if (!localStorage.lastVisitDate) {
    localStorage.lastVisitDate = new Date().toLocaleDateString();
  }
  
  const lastVisitDate = localStorage.lastVisitDate;
  
  document.getElementById('last-visit-date').textContent = lastVisitDate;
  
  const modal = document.getElementById('myModal');
  modal.style.display = 'block';
  
  const closeBtn = document.getElementsByClassName('close')[0];
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
