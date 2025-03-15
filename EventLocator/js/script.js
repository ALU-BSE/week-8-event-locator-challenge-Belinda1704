document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get('search') || '';
    const category = params.get('category') || '';
    const date = params.get('date') || '';
    const eventId = params.get('id'); // Get event ID from the URL

    console.log("Search Query:", searchQuery);
    console.log("Category:", category);
    console.log("Date:", date);
    console.log("Event ID:", eventId);

    const events = [
        { id: 1, name: "Music Festival", category: "music", date: "2025-06-15", location: "Central Park", description: "Live performances from top artists!", image: "EventFestival.jpeg" },
        { id: 2, name: "Art Showcase", category: "art", date: "2025-07-10", location: "Brooklyn Art Museum", description: "Discover amazing artwork by new and established artists.", image: "EventSpeaker1.jpg" },
        { id: 3, name: "Food Carnival", category: "food", date: "2025-08-22", location: "Downtown Square", description: "Taste the best street food from top chefs!", image: "Eventfood.jpeg" },
        { id: 4, name: "Tech Conference", category: "technology", date: "2025-09-05", location: "Silicon Valley Convention Center", description: "Explore the latest in tech innovations.", image: "EventSpeaker6.jpg" },
        { id: 5, name: "Marathon", category: "sports", date: "2025-10-12", location: "City Stadium", description: "Join the annual city marathon.", image: "EventMarothon.jpeg" },
        { id: 6, name: "Film Premiere", category: "entertainment", date: "2025-11-20", location: "Downtown Cinema", description: "Be the first to watch the latest blockbuster.", image: "Eventfilm.jpeg" },
        { id: 7, name: "Literature Workshop", category: "education", date: "2025-12-01", location: "City Library", description: "Enhance your writing skills with experts.", image: "Eventspeaker3.jpg" },
        { id: 8, name: "Charity Gala", category: "social", date: "2025-12-15", location: "Grand Hotel Ballroom", description: "Support local charities at this annual gala.", image: "Eventcharity.jpeg" },
        { id: 9, name: "Science Expo", category: "science", date: "2026-01-10", location: "Exhibition Center", description: "Discover groundbreaking scientific advancements.", image: "EventSpeaker2.jpg" },
        { id: 10, name: "Fashion Show", category: "fashion", date: "2026-02-05", location: "Fashion Avenue", description: "Witness the latest trends in fashion.", image: "Eventfashion.jpeg" },
        { id: 11, name: "Yoga Retreat", category: "wellness", date: "2025-10-15", location: "Mountain Resort", description: "Relax and rejuvenate with yoga and meditation sessions.", image: "Eventyoga.jpeg" },
        { id: 12, name: "Virtual Reality Gaming Expo", category: "technology", date: "2025-08-20", location: "Los Angeles", description: "Get hands-on with the latest virtual reality games and innovations.", image: "EventGaming.jpeg" }
    ];

    function fetchEvents(searchQuery, category, date) {
        const eventContainer = document.getElementById("event-list");

        if (!eventContainer) {
            console.error("Event container not found.");
            return;
        }

        eventContainer.innerHTML = "";

        const filteredEvents = events.filter(event => {
            return (
                (!searchQuery || event.name.toLowerCase().includes(searchQuery.toLowerCase()) || event.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
                (!category || event.category.toLowerCase() === category.toLowerCase()) &&
                (!date || event.date === date)
            );
        });

        console.log("Filtered Events:", filteredEvents);

        if (filteredEvents.length === 0) {
            eventContainer.innerHTML = `<p class="text-center text-danger">No events found.</p>`;
            return;
        }

        const fragment = document.createDocumentFragment();

        filteredEvents.forEach(event => {
            const eventDiv = document.createElement("div");
            eventDiv.className = "col-md-4 mb-4";
            eventDiv.innerHTML = `
                <div class="card h-100">
                    <img src="assets/images/${event.image}" class="card-img-top" alt="${event.name}">
                    <div class="card-body">
                        <h5 class="card-title">${event.name}</h5>
                        <p class="card-text">${event.description}</p>
                        <p><strong>Location:</strong> ${event.location}</p>
                        <p><strong>Date:</strong> ${event.date}</p>
                        <a href="event-details.html?id=${event.id}" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            `;
            fragment.appendChild(eventDiv);
        });

        eventContainer.appendChild(fragment);
    }

    if (eventId) {
        const event = events.find(e => e.id === parseInt(eventId));

        if (event) {
            document.getElementById("event-name").textContent = event.name;
            document.getElementById("event-description").textContent = event.description;
            document.getElementById("event-date").textContent = event.date;
            document.getElementById("event-location").textContent = event.location;
            document.getElementById("event-image").src = "assets/images/" + event.image;
            document.getElementById("event-image").alt = event.name;
        } else {
            console.error("Event not found.");
        }
    } else {
        fetchEvents(searchQuery, category, date);
    }
});
