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

// last visited modal
var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

var lastVisit = localStorage.getItem("lastVisit");

if (lastVisit) {
  var lastVisitDate = new Date(lastVisit);
  var currentDate = new Date();
  var timeDiff = Math.abs(currentDate.getTime() - lastVisitDate.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

  var message = "";
  if (diffDays == 1) {
    message = "You last visited 1 day ago.";
  } else {
    message = "You last visited " + diffDays + " days ago.";
  }

  document.getElementById("last-visit-message").innerText = message;
  document.getElementById("last-visit-date").innerText = lastVisitDate.toDateString();
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
