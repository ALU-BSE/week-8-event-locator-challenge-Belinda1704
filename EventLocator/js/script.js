const events = [
    { id: 1, name: "Rock Concert", date: "2025-03-15", category: "music", location: "City Arena", description: "A live rock concert featuring top bands." },
    { id: 2, name: "Tech Conference", date: "2025-03-20", category: "tech", location: "Tech Hub", description: "A conference on emerging technologies." },
    { id: 3, name: "Art Exhibition", date: "2025-03-18", category: "art", location: "Art Gallery", description: "A showcase of modern art." },
    // Add more event data here...
];

// Function to display event list
function displayEvents(eventsToShow) {
    const eventList = document.getElementById('event-list');
    eventList.innerHTML = ''; // Clear current list
    eventsToShow.forEach(event => {
        const card = `
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${event.name}</h5>
                        <p class="card-text">${event.date}</p>
                        <a href="event-details.html?id=${event.id}" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>
        `;
        eventList.innerHTML += card;
    });
}

// Event listeners for search/filter
document.getElementById('searchInput').addEventListener('input', filterEvents);
document.getElementById('dateFilter').addEventListener('change', filterEvents);
document.getElementById('categoryFilter').addEventListener('change', filterEvents);

function filterEvents() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const selectedDate = document.getElementById('dateFilter').value;
    const selectedCategory = document.getElementById('categoryFilter').value.toLowerCase();

    const filteredEvents = events.filter(event => {
        const matchesSearch = event.name.toLowerCase().includes(searchText);
        const matchesDate = selectedDate ? event.date === selectedDate : true;
        const matchesCategory = selectedCategory ? event.category.toLowerCase() === selectedCategory : true;
        return matchesSearch && matchesDate && matchesCategory;
    });

    displayEvents(filteredEvents);
}

// Call filterEvents on page load to display all events initially
filterEvents();



