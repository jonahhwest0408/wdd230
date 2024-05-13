function validateForm() {
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    var password_match_error = document.getElementById("password_match_error");

    if (password !== confirm_password) {
        password_match_error.style.display = "block";
        return false;
    }

    return true;
}
