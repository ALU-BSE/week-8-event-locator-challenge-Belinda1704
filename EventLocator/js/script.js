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
        { id: 1, name: "Music Festival", category: "music", date: "2025-06-15", location: "Central Park", description: "Get ready for an unforgettable day filled with electrifying performances from world-renowned artists and emerging talent! The Central Park Music Festival brings together diverse genres, from pop and rock to hip-hop and jazz. Enjoy live music on multiple stages, interactive fan experiences, food vendors offering gourmet bites, and surprise guest appearances! Whether you're a die-hard music lover or just looking for a fun day out, this festival promises to be the highlight of your summer. Don't forget to bring your dancing shoes and good vibes! ", image: "EventFestival.jpeg" },
        { id: 2, name: "Art Showcase", category: "art", date: "2025-07-10", location: "Brooklyn Art Museum", description: "Immerse yourself in the Brooklyn Art Showcase, where imagination knows no bounds. This event will feature breathtaking paintings, sculptures, and digital art from both emerging and established artists. Experience interactive installations, live art demonstrations, and panel discussions with industry leaders. Whether you're an art collector, enthusiast, or creator yourself, this showcase is a celebration of artistic expression. Expect a night of elegance, inspiration, and networking with fellow art lovers.", image: "EventSpeaker1.jpg" },
        { id: 3, name: "Food Carnival", category: "food", date: "2025-08-22", location: "Downtown Square", description: "Taste, sip, and savor the flavors of the world at the Downtown Food Carnival! This vibrant food festival brings together the finest street food vendors, gourmet chefs, and local restaurants to serve up a feast of flavors. From juicy burgers to spicy tacos, from refreshing smoothies to decadent desserts, this carnival is a paradise for food lovers. Enjoy live cooking demonstrations, food-eating contests, and special chef meet-and-greets. Come hungry and leave happy!", image: "Eventfood.jpeg" },
        { id: 4, name: "Tech Conference", category: "technology", date: "2025-09-05", location: "Silicon Valley Convention Center", description: "Join industry leaders, entrepreneurs, and tech enthusiasts at the Tech Innovation Conference, where the latest advancements in AI, blockchain, cybersecurity, and emerging tech trends take center stage. Attend insightful keynote speeches, participate in interactive workshops, and network with top innovators in the field. Witness groundbreaking product launches and get a sneak peek into the next wave of technological evolution. Whether you're a startup founder, investor, or tech geek, this is the must-attend event of the year!", image: "EventSpeaker6.jpg" },
        { id: 5, name: "Marathon", category: "sports", date: "2025-10-12", location: "City Stadium", description: "Get ready to lace up your running shoes and participate in the Annual City Marathon! Whether you're a seasoned runner or a first-time participant, this event welcomes everyone with open arms. Enjoy a scenic route through the city’s most iconic landmarks, with hydration stations and cheering crowds along the way. There will be categories for professional athletes, casual runners, and even a fun run for kids! Finishers receive a commemorative medal, and winners earn exciting prizes. Challenge yourself, feel the adrenaline, and be part of something bigger!", image: "EventMarothon.jpeg" },
        { id: 6, name: "Film Premiere", category: "entertainment", date: "2025-11-20", location: "Downtown Cinema", description: "The red carpet awaits at the Downtown Cinema Film Premiere, where you'll get an exclusive first look at the most anticipated blockbuster of the year! Rub shoulders with filmmakers, actors, and industry professionals as you watch the movie before its official release. The event includes a Q&A session with the director, behind-the-scenes footage, and an after-party where fans and celebrities mingle. Dress to impress and prepare for an evening of cinematic magic!", image: "Eventfilm.jpeg" },
        { id: 7, name: "Literature Workshop", category: "education", date: "2025-12-01", location: "City Library", description: "oin renowned authors, poets, and literary experts at the City Library Literature Workshop, where aspiring writers can refine their craft. This interactive session covers everything from storytelling techniques and character development to self-publishing and marketing your book. Participate in live writing challenges, receive constructive feedback, and network with fellow wordsmiths. Whether you're working on your first novel or looking to improve your writing skills, this workshop will leave you inspired and motivated.", image: "Eventspeaker3.jpg" },
        { id: 8, name: "Charity Gala", category: "social", date: "2025-12-15", location: "Grand Hotel Ballroom", description: "Dine, dance, and donate at the Annual Charity Gala, an exquisite event that brings together philanthropists, business leaders, and community members for a night of giving back. Enjoy a gourmet dinner, live performances, and a silent auction featuring exclusive items and experiences. All proceeds will go towards supporting local charities that focus on education, healthcare, and community development. Dress in your finest attire and be a part of something truly meaningful.", image: "Eventcharity.jpeg" },
        { id: 9, name: "Science Expo", category: "science", date: "2026-01-10", location: "Exhibition Center", description: "Step into the world of discovery at the Annual Science Expo, where the latest innovations in robotics, space exploration, and medical research come to life. Meet scientists, engineers, and researchers as they present their cutting-edge projects. Enjoy interactive exhibits, hands-on experiments, and mind-blowing science demonstrations. This event is perfect for students, professionals, and anyone with a passion for science and technology!", image: "EventSpeaker2.jpg" },
        { id: 10, name: "Fashion Show", category: "fashion", date: "2026-02-05", location: "Fashion Avenue", description: "The runway is set, the lights are dimmed, and the models are ready to showcase the latest trends at the Fashion Avenue Runway Show. Experience a night of glamour as top designers unveil their newest collections. Expect celebrity appearances, exclusive designer showcases, and after-parties with the fashion elite. Whether you’re a fashion enthusiast, influencer, or designer, this event promises an unforgettable experience filled with style and sophistication.", image: "Eventfashion.jpeg" },
        { id: 11, name: "Yoga Retreat", category: "wellness", date: "2025-10-15", location: "Mountain Resort", description: "Escape to the serene Mountain Resort Yoga Retreat, where you can unwind and reconnect with yourself. This three-day wellness retreat offers guided meditation, yoga sessions with expert instructors, nature walks, and detoxifying meals. Experience total relaxation with spa treatments, mindfulness workshops, and campfire gatherings under the stars. Whether you're a beginner or a seasoned yogi, this retreat will leave you feeling refreshed and re-energized.", image: "Eventyoga.jpeg" },
        { id: 12, name: "Virtual Reality Gaming Expo", category: "technology", date: "2025-08-20", location: "Los Angeles", description: "Immerse yourself in the world of Virtual Reality Gaming at this highly anticipated expo. Test out the latest VR games, compete in live gaming tournaments, and witness groundbreaking developments in augmented and virtual reality. Meet top developers, attend panel discussions, and even try out next-gen gaming consoles before they hit the market. Whether you're a hardcore gamer, a developer, or just curious about the future of entertainment, this expo is a must-visit!", image: "EventGaming.jpeg" }
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
