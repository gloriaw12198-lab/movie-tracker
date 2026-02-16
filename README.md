# 📚🎬 Book & Movie Tracker

A simple and stylish web application that allows users to track **books and movies** they have read or watched.  
Users can add entries, view details, and delete entries, with data saved using **localStorage**.

---

## 🌟 Features

- ➕ Add books or movies
- 📖 Track title, author/director, status, rating, and notes
- 💾 Save entries using browser localStorage
- 👀 View all saved entries on the home page
- 🗑️ Delete entries easily
- 🎨 Clean, responsive design with matching colors
- 📱 Works well on both desktop and mobile

---

## 🧩 Pages Overview

### 🏠 index.html
- Displays all saved book and movie entries
- Shows details in styled cards
- Allows users to delete entries

### ➕ entries.html
- Form for adding new books or movies
- Input validation for required fields
- Saves data to localStorage

### ℹ️ about.html
- Explains the purpose of the project
- Describes features and technologies used

---

## 🛠️ Technologies Used

- **HTML5** – Structure
- **CSS3** – Styling and layout
- **JavaScript (ES6)** – Logic and interactivity
- **localStorage** – Data persistence

---

## ⚙️ How It Works

1. User fills out the form on `entries.html`
2. JavaScript validates the input
3. Entry is saved to `localStorage`
4. Entries are displayed dynamically on `index.html`
5. Clicking delete removes the entry from both the page and localStorage

---

## 📂 Project Structure

```text
book-movie-tracker/
│
├── index.html
├── entries.html
├── about.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── README.md
