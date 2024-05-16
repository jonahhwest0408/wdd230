const timestampField = document.getElementById('timestamp');

function getCurrentDateTime() {
    return new Date().toISOString();
}

function updateTimestampField() {
    timestampField.value = getCurrentDateTime();
}

window.onload = function() {
    updateTimestampField();
}
