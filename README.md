# Event Locator Web Application

## Project Overview
The **Event Locator** is a web application that allows users to search for events happening in their city. The application displays a list of events with details such as event name, date, location, and description. Users can filter events by date and category, making it easier to find relevant events.

## Features
- **Home Page:** A landing page with a search bar and filters for date and category.
- **Event List:** Displays events based on search criteria with event cards.
- **Event Details:** Provides detailed information about a selected event.
- **Responsive Design:** Ensures mobile-friendly functionality using Bootstrap.

## Project Structure

EventLocator/
│── index.html          # Home Page with search and filters
│── events.html         # Displays a list of events based on search criteria
│── event-details.html  # Shows details of a selected event
│── css/                # Folder for CSS files
│   ├── style.css       # Custom styles
│── js/                 # Folder for JavaScript files
│   ├── script.js       # Handles search, filtering, and event display
│   ├── events.js       # Manages event data and dynamic content
│   ├── details.js      # Handles event details display
│── assets/             # Folder for images and other assets
│   ├── images/         # Stores images used in the project


## Technologies Used
- **HTML5** - Structure of the web pages
- **CSS & Bootstrap** - Styling and responsive design
- **JavaScript** - Interactivity and dynamic content

## Installation & Setup
1. **Clone the Repository**
   ```sh
   git clone https://github.com/ALU-BSE/week-8-event-locator-challenge-Belinda1704
   ```
2. **Navigate to the Project Directory**
   ```sh
   cd EventLocator
   ```
3. **Open `index.html` in a Browser**
   - You can simply open the file in a browser or use a local server like Live Server in VS Code.

## Usage
1. **Search for Events:**
   - Enter a city name in the search bar.
   - Use the date and category filters to refine results.
2. **View Event List:**
   - Browse the displayed event cards.
   - Click on "View Details" to see more information about an event.
3. **View Event Details:**
   - Get detailed information about the selected event.

## Troubleshooting
- **Cannot GET /EventLocator/event-details.html**
  - Ensure `event-details.html` is in the correct directory.
  - Check that your links are correct in `events.html`, e.g.,:
    ```html
    <a href="event-details.html?event_id=1">View Details</a>
    ```
- **Styles Not Loading Correctly?**
  - Ensure Bootstrap is correctly linked in your HTML files:
    ```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js">
    ```

## Author
Developed by **[Belinda Belange Larose]**

