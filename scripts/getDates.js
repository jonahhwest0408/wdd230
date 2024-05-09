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

const lastVisitDate = new Date(localStorage.lastVisitDate);

const timeDiff = new Date() - lastVisitDate;
const oneDay = 24 * 60 * 60 * 1000; 

const diffDays = Math.floor(timeDiff / oneDay);

if (timeDiff < oneDay) {
    document.getElementById('last-visit-message').textContent = `Back so soon! Awesome! You last visited ${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago.`;
} else {
    document.getElementById('last-visit-message').textContent = `Welcome back! You last visited ${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago.`;
}

localStorage.lastVisitDate = new Date().toLocaleDateString();

document.getElementById('last-visit-date').textContent = lastVisitDate.toLocaleDateString();

const modal = document.getElementById('myModal');
modal.style.display = 'block';

const closeBtn = document.getElementsByClassName('close')[0];
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

