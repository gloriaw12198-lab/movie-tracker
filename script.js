function getItems() {
  const data = localStorage.getItem("items");
  return data ? JSON.parse(data) : [];
}function saveItems(items) {
  localStorage.setItem("items", JSON.stringify(items));
}document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("itemForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const type = document.getElementById("type").value;
      const title = document.getElementById("title").value.trim();
      const creator = document.getElementById("creator").value.trim();
      const rating = document.getElementById("rating").value;
      const notes = document.getElementById("notes").value.trim();
      const status = document.getElementById("status").value;
      const error = document.getElementById("error");  

      if (title === "" || creator === "") {
        error.textContent = "⚠️ Please fill in all required fields.";
        error.style.color = "red";
        return;
      }
const newItem = {
        id: Date.now(),
        type: type,
        title: title,
        creator: creator,
        rating: rating,
        notes: notes,
        status: status
      };


 const items = getItems();
      items.push(newItem);
      saveItems(items);
        error.textContent = "✅ Entry saved successfully!";
      error.style.color = "green";
      form.reset();
    });
  }
   const container = document.getElementById("itemsContainer");

  if (container) {
    displayItems(container);
  }
});

function displayItems(container) {
  const items = getItems();
  container.innerHTML = "";

  if (items.length === 0) {
    container.innerHTML = "<p>📭 No entries yet. Add some!</p>";
    return;
  }
  items.forEach(function (item) {
    const card = document.createElement("div");
    card.className = "item-card";

    const icon = item.type === "Book" ? "📖" : "🎬"; 
    card.innerHTML = `
      <h3>${icon} ${item.title}</h3>
      <p><strong>Author / Director:</strong> ${item.creator}</p>
      <p><strong>Status:</strong> ${item.status}</p>
      ${item.rating ? `<p><strong>Rating:</strong> ⭐ ${item.rating}/5</p>` : ""}
      ${item.notes ? `<p><strong>Notes:</strong> ${item.notes}</p>` : ""}
      <button class="delete-btn" data-id="${item.id}">🗑️ Delete</button>
    `;
      container.appendChild(card);
  });

  addDeleteEvents(container);
}
function addDeleteEvents(container) {
  const buttons = container.querySelectorAll(".delete-btn");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const id = Number(this.getAttribute("data-id"));

      let items = getItems();
      items = items.filter(function (item) {
        return item.id !== id;
      });

      saveItems(items);
      displayItems(container);
    });
  });
}



