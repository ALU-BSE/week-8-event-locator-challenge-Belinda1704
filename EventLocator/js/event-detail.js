// event-details.js
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('event_id');

    // You can use eventId to fetch event details dynamically from a database or an API
    if (eventId == "1") {
        document.getElementById("event-name").innerText = "Concert in the Park";
        document.getElementById("event-location").innerText = "Location: Central Park, City";
        document.getElementById("event-date").innerText = "Date: March 18, 2025";
        document.getElementById("event-description").innerText = "Description: A fun-filled day with live music, food trucks, and outdoor activities. Don't miss it!";
    }
    // Add more events logic as needed
}
