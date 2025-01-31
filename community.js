let events = [];

// Handle Create Event
document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let eventName = document.getElementById('eventName').value;
    let eventDateTime = document.getElementById('eventDateTime').value;
    let eventLocation = document.getElementById('eventLocation').value;
    let registrationFee = document.getElementById('registrationFee').value;

    events.push({ eventName, eventDateTime, eventLocation, registrationFee });
    updateEventList();
    alert(`Event Created: ${eventName}`);
    this.reset();
});

// Update Event List
function updateEventList() {
    let eventList = document.getElementById('eventList');
    let upcomingEventList = document.getElementById('upcomingEventList');
    
    eventList.innerHTML = '';
    upcomingEventList.innerHTML = '';

    events.forEach((event, index) => {
        let li = document.createElement('li');
        li.innerHTML = `<strong>${event.eventName}</strong> - ${event.eventDateTime}, ${event.eventLocation}, Fee: $${event.registrationFee}
            <button class="delete-btn" onclick="deleteEvent(${index})">Delete</button>`;
        
        eventList.appendChild(li);
        upcomingEventList.appendChild(li.cloneNode(true));
    });
}

// Handle Delete Event
function deleteEvent(index) {
    events.splice(index, 1);
    updateEventList();
}
