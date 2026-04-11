// EVENTS (realistic data)
function loadEvents() {
  const list = document.getElementById("eventsList");
  list.innerHTML = "";

  const events = [
    { title: "Basketball Game", desc: "Join us at the gym at 6 PM." },
    { title: "Club Fair", desc: "Meet clubs on campus at 12 PM." },
    { title: "Movie Night", desc: "Free movie in the auditorium." },
    { title: "Study Session", desc: "Group study in the library." }
  ];

  events.forEach(event => {
    const div = document.createElement("div");
    div.className = "card p-3 m-2";

    div.innerHTML = `
      <h5>${event.title}</h5>
      <p>${event.desc}</p>
    `;

    list.appendChild(div);
  });
}

// DINING (realistic data)
function getFood() {
  const list = document.getElementById("foodList");
  list.innerHTML = "";

  const places = [
    { name: "Campus Cafe", location: "Student Center" },
    { name: "Pizza Spot", location: "Near Dorms" },
    { name: "Healthy Bites", location: "Gym Area" },
    { name: "Burger Grill", location: "Main Hall" }
  ];

  places.forEach(place => {
    const div = document.createElement("div");
    div.className = "card p-3 m-2";

    div.innerHTML = `
      <h5>${place.name}</h5>
      <p>${place.location}</p>
    `;

    list.appendChild(div);
  });
}