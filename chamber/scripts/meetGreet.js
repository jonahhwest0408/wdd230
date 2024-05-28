document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("meet-and-greet-banner");
    const closeBtn = document.getElementById("close-banner-btn");

    //check if the current day is Monday, Tuesday, or Wednesday
    const today = new Date().getDay();
    if (today >= 1 && today <= 3) {
        banner.style.display = "block";
    }

    closeBtn.addEventListener("click", function () {
        banner.style.display = "none";
    });
});
