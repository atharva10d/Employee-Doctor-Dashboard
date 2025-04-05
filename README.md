# Employee-Doctor-Dashboard

This project is a responsive Health Care Portal web application built with HTML, CSS, and vanilla JavaScript. It simulates a system with distinct interfaces for Patients and Doctors, featuring:

Role-Based Login: Separate login flows for patients and doctors (requiring a Doctor ID).

Patient Dashboard: Displays personal info, upcoming appointments (with completion toggle), visit history, prescribed therapies, doctor's notes, a personal health journal (using localStorage), and a health trends chart (using Chart.js).

Doctor Dashboard: Provides doctor information, a list of assigned patients (searchable and sortable), a schedule view, and a detailed patient view with tabbed sections (History, Visits, Exercises, Notes, Log Visit). Doctors can add notes/recommendations and log new visits for selected patients.

Modern UI: Features include light/dark theme support, responsive design across different screen sizes, skeleton loaders for simulating data loading, interactive components (buttons, cards, forms, modals, tooltips), and visual effects like glassmorphism and neon glows.

Client-Side Logic: All data (doctors, patients, visits, etc.) is simulated within the JavaScript file, and all application logic, including authentication, data rendering, and interactions, is handled client-side.

