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

