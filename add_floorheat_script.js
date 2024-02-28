document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    submitForm();
});

function submitForm() {
    var name = document.getElementById("name").value;
    var deviceId = document.getElementById("device_id").value;
    var subnetId = document.getElementById("subnet_id").value;
    var channel = document.getElementById("channel").value;

    // Check if any field is empty
    if (name === '' || deviceId === '' || subnetId === '' || channel === '') {
        alert('Please fill in all required fields');
        return;
    }

    // Validate id, channel1, and channel2 fields
    if (!isValidNumber(deviceId) || !isValidNumber(subnetId) || !isValidNumber(channel)) {
        alert('ID, subnet ID, and Channel must be numbers between 1 to 255');
        return;
    }

    var url = "/get?" +
        "type=floorheat" +
        "&name=" + encodeURIComponent(name) +
        "&device_id=" + encodeURIComponent(deviceId) +
        "&subnet_id=" + encodeURIComponent(subnetId) +
        "&channel=" + encodeURIComponent(channel)

    window.location.href = url;
}

function isValidNumber(value) {
    // Check if value is a number between 0 and 255
    return !isNaN(value) && parseInt(value) >= 1 && parseInt(value) <= 255;
}
