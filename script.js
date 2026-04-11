// Homepage button
function showMessage() {
  alert("Welcome to Campus Life App!");
}

// EVENTS API (working)
function loadEvents() {
  const list = document.getElementById("eventsList");
  list.innerHTML = "Loading events...";

  fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then(response => response.json())
    .then(data => {
      list.innerHTML = "";

      data.forEach(event => {
        const li = document.createElement("li");
        li.textContent = event.title;
        list.appendChild(li);
      });
    })
    .catch(error => {
      list.innerHTML = "Error loading events.";
      console.error(error);
    });
}

// DINING API (working)
function getFood() {
  const list = document.getElementById("foodList");
  list.innerHTML = "Loading dining options...";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      list.innerHTML = "";

      data.forEach(place => {
        const li = document.createElement("li");
        li.textContent = place.company.name;
        list.appendChild(li);
      });
    })
    .catch(error => {
      list.innerHTML = "Error loading food.";
      console.error(error);
    });
}