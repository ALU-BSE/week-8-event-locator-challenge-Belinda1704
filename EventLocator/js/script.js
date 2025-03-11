document.addEventListener('DOMContentLoaded', function() {
    const events = [
        { id: 1, name: "Music Festival", category: "music", date: "2025-06-15", location: "Central Park", description: "Live performances from top artists!", image: "images/event1.jpg" },
        { id: 2, name: "Art Showcase", category: "art", date: "2025-07-10", location: "Brooklyn Art Museum", description: "Discover amazing artwork by new and established artists.", image: "images/event2.jpg" },
        { id: 3, name: "Food Carnival", category: "food", date: "2025-08-22", location: "Downtown Square", description: "Taste the best street food from top chefs!", image: "images/event3.jpg" }
    ];

    // Function to display events on events.html
    function displayEvents(eventsToShow) {
        const eventContainer = document.getElementById('event-list');

        if (!eventContainer) return;

        eventContainer.innerHTML = '';

        if (eventsToShow.length === 0) {
            eventContainer.innerHTML = `<p class="text-center text-danger">No events found.</p>`;
            return;
        }

        eventsToShow.forEach(event => {
            eventContainer.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <img src="${event.image}" class="card-img-top" alt="${event.name}">
                        <div class="card-body">
                            <h5 class="card-title">${event.name}</h5>
                            <p class="card-text">${event.description}</p>
                            <a href="event-details.html?id=${event.id}" class="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    // Function to load event details in event-details.html
    if (window.location.pathname.includes("event-details.html")) {
        const params = new URLSearchParams(window.location.search);
        const eventId = params.get("id");
        const event = events.find(e => e.id == eventId);

        if (event) {
            document.getElementById("event-name").textContent = event.name;
            document.getElementById("event-description").textContent = event.description;
            document.getElementById("event-date").textContent = event.date;
            document.getElementById("event-location").textContent = event.location;
            document.getElementById("event-image").src = event.image;
        } else {
            document.querySelector(".container").innerHTML = `<p class="text-center text-danger">Event not found.</p>`;
        }
    }

    // Load events when on events.html
    if (window.location.pathname.includes("events.html")) {
        displayEvents(events);
    }
});
