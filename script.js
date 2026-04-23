const events = [
  { name: "🎉 Club Fair", date: "April 30", location: "Student Center" },
  { name: "🏀 Basketball Game", date: "May 2", location: "Main Gym" },
  { name: "🎬 Movie Night", date: "May 5", location: "Auditorium" }
];

const container = document.getElementById("events");

function loadEvents() {
  if (!container) return;

  container.innerHTML = "";

  events.forEach(event => {
    const col = document.createElement("div");
    col.className = "col-md-4";

    col.innerHTML = `
      <div class="card p-4 shadow-sm">
        <h5>${event.name}</h5>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Location:</strong> ${event.location}</p>
      </div>
    `;

    container.appendChild(col);
  });
}

loadEvents();