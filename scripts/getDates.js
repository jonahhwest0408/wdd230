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