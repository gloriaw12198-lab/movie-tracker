function getItems() {
  const data = localStorage.getItem("items");
  return data ? JSON.parse(data) : [];
}function saveItems(items) {
  localStorage.setItem("items", JSON.stringify(items));
}document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("itemForm");



