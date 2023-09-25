// Function to navigate to the login page
function goToLoginPage() {
    window.location.href = 'login.html';
}

// Function to go back to the homepage
function goBack() {
    window.location.href = 'index.html';
}

// Function to display date and time
function displayDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const dateTimeString = `You clicked the login button at: ${currentDate.toLocaleDateString('en-US', options)}`;
    dateTimeElement.textContent = dateTimeString;
}

// Call the displayDateTime function when the homepage loads
if (window.location.pathname === '/index.html') {
    displayDateTime();
}
