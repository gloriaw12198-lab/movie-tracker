function getItems() {
  const data = localStorage.getItem("items");
  return data ? JSON.parse(data) : [];
}
