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


