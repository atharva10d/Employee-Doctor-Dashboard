/* START OF FILE script.js */
'use strict'; // Enable strict mode

/* ==========================================================================
   Sankeeravya Health Care Portal - JavaScript Logic
   Version: 1.7.0 (Functional Reports & Schedule Data Density)
   ========================================================================== */

// ------------------------------------
// --- 1. Data Simulation (Database) ---
// ------------------------------------

const doctorsDB = [
    // ... (keep existing doctorsDB array as is) ...
    { doctorId: "doc001", name: "Dr. Anil Deshpande", username: "anil.d", password: "password123", gender: "Male", age: 45, specialization: "Sports Injury Rehabilitation", experience: 15 },
    { doctorId: "doc002", name: "Dr. Priya Menon", username: "priya.m", password: "password123", gender: "Female", age: 38, specialization: "Pediatric Physiotherapy", experience: 10 },
    { doctorId: "doc003", name: "Dr. Rajiv Khanna", username: "rajiv.k", password: "password123", gender: "Male", age: 52, specialization: "Spinal Disorders", experience: 20 },
    { doctorId: "doc004", name: "Dr. Sunita Reddy", username: "sunita.r", password: "password123", gender: "Female", age: 41, specialization: "Geriatric Care", experience: 12 },
    { doctorId: "doc005", name: "Dr. Vikram Joshi", username: "vikram.j", password: "password123", gender: "Male", age: 48, specialization: "Post-Surgical Rehab", experience: 18 },
    { doctorId: "doc006", name: "Dr. Neha Sharma", username: "neha.s", password: "password123", gender: "Female", age: 36, specialization: "Neurological Rehab", experience: 8 },
    { doctorId: "doc007", name: "Dr. Arjun Patel", username: "arjun.p", password: "password123", gender: "Male", age: 43, specialization: "Orthopedic Physiotherapy", experience: 14 },
    { doctorId: "doc008", name: "Dr. Kavita Iyer", username: "kavita.i", password: "password123", gender: "Female", age: 50, specialization: "Cardiopulmonary Rehab", experience: 22 },
    { doctorId: "doc009", name: "Dr. Amit Malhotra", username: "amit.m", password: "password123", gender: "Male", age: 47, specialization: "Musculoskeletal Therapy", experience: 16 },
    { doctorId: "doc010", name: "Dr. Shreya Nair", username: "shreya.n", password: "password123", gender: "Female", age: 39, specialization: "Women's Health Physio", experience: 11 },
    { doctorId: "doc011", name: "Dr. Rahul Kumar", username: "rahul.k", password: "password123", gender: "Male", age: 54, specialization: "Chronic Pain Management", experience: 25 },
    { doctorId: "doc012", name: "Dr. Pooja Desai", username: "pooja.d", password: "password123", gender: "Female", age: 33, specialization: "Sports Performance", experience: 7 },
    { doctorId: "doc013", name: "Dr. Kunal Reddy", username: "kunal.r", password: "password123", gender: "Male", age: 44, specialization: "Post-Stroke Rehab", experience: 13 },
    { doctorId: "doc014", name: "Dr. Anjali Joshi", username: "anjali.j", password: "password123", gender: "Female", age: 42, specialization: "Vestibular Rehabilitation", experience: 9 },
    { doctorId: "doc015", name: "Dr. Deepak Sharma", username: "deepak.s", password: "password123", gender: "Male", age: 51, specialization: "Amputee Rehab", experience: 19 },
    { doctorId: "doc016", name: "Dr. Sonia Kapoor", username: "sonia.k", password: "password123", gender: "Female", age: 37, specialization: "Ergonomic Training", experience: 6 },
    { doctorId: "doc017", name: "Dr. Rohan Patel", username: "rohan.p", password: "password123", gender: "Male", age: 46, specialization: "TMJ Dysfunction", experience: 17 },
    { doctorId: "doc018", name: "Dr. Divya Khanna", username: "divya.k", password: "password123", gender: "Female", age: 40, specialization: "Pelvic Floor Therapy", experience: 10 },
    { doctorId: "doc019", name: "Dr. Sanjay Gupta", username: "sanjay.g", password: "password123", gender: "Male", age: 53, specialization: "Balance Disorders", experience: 21 },
    { doctorId: "doc020", name: "Dr. Meera Nair", username: "meera.n", password: "password123", gender: "Female", age: 35, specialization: "Post-Fracture Rehab", experience: 5 },
    { doctorId: "doc021", name: "Dr. Suresh Iyer", username: "suresh.i", password: "password123", gender: "Male", age: 49, specialization: "Occupational Therapy", experience: 20 },
    { doctorId: "doc022", name: "Dr. Preeti Malhotra", username: "preeti.m", password: "password123", gender: "Female", age: 45, specialization: "Lymphedema Management", experience: 16 },
    { doctorId: "doc023", name: "Dr. Aditya Singh", username: "aditya.s", password: "password123", gender: "Male", age: 39, specialization: "Post-Covid Rehab", experience: 8 },
    { doctorId: "doc024", name: "Dr. Ananya Reddy", username: "ananya.r", password: "password123", gender: "Female", age: 44, specialization: "Myofascial Release", experience: 14 },
    { doctorId: "doc025", name: "Dr. Rakesh Verma", username: "rakesh.v", password: "password123", gender: "Male", age: 50, specialization: "Prosthetic Training", experience: 18 }

];

const hospitalsDB = [
    // ... (keep existing hospitalsDB array as is) ...
    { name: "Apollo Physio Care", city: "Mumbai" }, { name: "Fortis Rehabilitation", city: "Delhi" }, { name: "Max Physio Center", city: "Bangalore" },
    { name: "Medanta Therapy Clinic", city: "Hyderabad" }, { name: "Columbia Asia Physiotherapy", city: "Pune" }, { name: "Kokilaben Physio Centre", city: "Mumbai" },
    { name: "Artemis Health Clinic", city: "Delhi" }, { name: "Manipal Physio Hub", city: "Bangalore" }, { name: "Nanavati Therapy Center", city: "Mumbai" },
    { name: "Sahyadri Rehab Clinic", city: "Pune" }, { name: "Global Hospital Physio", city: "Hyderabad" }, { name: "Wockhardt Physio Care", city: "Mumbai" },
    { name: "Asian Heart Institute", city: "Mumbai" }, { name: "Sri Ramachandra Clinic", city: "Chennai" }, { name: "Jaslok Physio Centre", city: "Mumbai" },
    { name: "Hiranandani Physio", city: "Mumbai" }, { name: "Ruby Hall Therapy", city: "Pune" }, { name: "Aster Physio Center", city: "Bangalore" },
    { name: "Breach Candy Rehab", city: "Mumbai" }, { name: "Holy Spirit Physio", city: "Delhi" }, { name: "Lilavati Physio Clinic", city: "Mumbai" },
    { name: "Max Super Specialty", city: "Delhi" }, { name: "Fortis Memorial", city: "Gurgaon" }, { name: "KIMS Physio Hub", city: "Hyderabad" },
    { name: "AIIMS Rehab Center", city: "Delhi" }

];

let rawTherapyDataTemplate = [ // Renamed to Template
    // ... (keep existing rawTherapyDataTemplate array as is) ...
    { name: "Divya Sharma", gender: "Female", age: 54, therapyTaken: "Hydrotherapy", duration: "2 weeks", results: "Significant Improvement" },
    { name: "Rajesh Nair", gender: "Male", age: 77, therapyTaken: "Electrotherapy", duration: "7 weeks", results: "Moderate Improvement" },
    { name: "Meera Das", gender: "Female", age: 61, therapyTaken: "Electrotherapy", duration: "11 weeks", results: "No Improvement" },
    { name: "Arjun Verma", gender: "Male", age: 30, therapyTaken: "Electrotherapy", duration: "4 weeks", results: "Significant Improvement" },
    { name: "Pooja Verma", gender: "Female", age: 27, therapyTaken: "Hydrotherapy", duration: "6 weeks", results: "Significant Improvement" },
    { name: "Amit Kumar", gender: "Male", age: 45, therapyTaken: "Manual Therapy", duration: "8 weeks", results: "Moderate Improvement" },
    { name: "Sunita Patel", gender: "Female", age: 68, therapyTaken: "Geriatric Rehab", duration: "12 weeks", results: "Slight Improvement" },
    { name: "Vikram Singh", gender: "Male", age: 35, therapyTaken: "Sports Rehab", duration: "5 weeks", results: "Full Recovery" },
    { name: "Neha Gupta", gender: "Female", age: 50, therapyTaken: "Post-Surgical Rehab", duration: "10 weeks", results: "Significant Improvement" },
    { name: "Anjali Mehta", gender: "Female", age: 29, therapyTaken: "Hydrotherapy", duration: "3 weeks", results: "Moderate Improvement" },
    { name: "Sanjay Sharma", gender: "Male", age: 72, therapyTaken: "Electrotherapy", duration: "9 weeks", results: "No Improvement" },
    { name: "Kavita Joshi", gender: "Female", age: 41, therapyTaken: "Manual Therapy", duration: "6 weeks", results: "Significant Improvement" },
    { name: "Rohan Desai", gender: "Male", age: 22, therapyTaken: "Sports Rehab", duration: "4 weeks", results: "Full Recovery" },
    { name: "Priya Reddy", gender: "Female", age: 55, therapyTaken: "Geriatric Rehab", duration: "15 weeks", results: "Moderate Improvement" },
    { name: "Deepak Malhotra", gender: "Male", age: 60, therapyTaken: "Post-Surgical Rehab", duration: "7 weeks", results: "Significant Improvement" },
    { name: "Shreya Iyer", gender: "Female", age: 33, therapyTaken: "Hydrotherapy", duration: "5 weeks", results: "Moderate Improvement" },
    { name: "Aditya Nair", gender: "Male", age: 48, therapyTaken: "Electrotherapy", duration: "10 weeks", results: "Slight Improvement" },
    { name: "Meena Khanna", gender: "Female", age: 65, therapyTaken: "Manual Therapy", duration: "8 weeks", results: "Moderate Improvement" },
    { name: "Rahul Patel", gender: "Male", age: 28, therapyTaken: "Sports Rehab", duration: "6 weeks", results: "Significant Improvement" },
    { name: "Divya Singh", gender: "Female", age: 59, therapyTaken: "Post-Surgical Rehab", duration: "12 weeks", results: "Moderate Improvement" },
    { name: "Raj Kumar", gender: "Male", age: 80, therapyTaken: "Geriatric Rehab", duration: "10 weeks", results: "Slight Improvement" },
    { name: "Simran Chopra", gender: "Female", age: 25, therapyTaken: "Hydrotherapy", duration: "4 weeks", results: "Significant Improvement" },
    { name: "Arnav Gupta", gender: "Male", age: 52, therapyTaken: "Manual Therapy", duration: "7 weeks", results: "Moderate Improvement" },
    { name: "Ishita Sharma", gender: "Female", age: 31, therapyTaken: "Sports Rehab", duration: "3 weeks", results: "Full Recovery" },
    { name: "Alok Mishra", gender: "Male", age: 42, therapyTaken: "Spinal Decompression", duration: "9 weeks", results: "Moderate Improvement" },
    { name: "Bhavna Chauhan", gender: "Female", age: 63, therapyTaken: "Geriatric Rehab", duration: "8 weeks", results: "Significant Improvement" },
    { name: "Chirag Shah", gender: "Male", age: 29, therapyTaken: "Sports Rehab", duration: "6 weeks", results: "Full Recovery" },
    { name: "Deepika Rao", gender: "Female", age: 38, therapyTaken: "Post-Surgical Rehab", duration: "7 weeks", results: "Moderate Improvement" },
    { name: "Eshan Agarwal", gender: "Male", age: 58, therapyTaken: "Electrotherapy", duration: "10 weeks", results: "Slight Improvement" },
    { name: "Farah Khan", gender: "Female", age: 47, therapyTaken: "Manual Therapy", duration: "5 weeks", results: "Significant Improvement" },
    { name: "Gaurav Mehta", gender: "Male", age: 70, therapyTaken: "Geriatric Rehab", duration: "11 weeks", results: "Moderate Improvement" },
    { name: "Harshita Singh", gender: "Female", age: 24, therapyTaken: "Hydrotherapy", duration: "3 weeks", results: "Significant Improvement" },

];

// --- INCREASE PATIENT COUNT ---
// Duplicate the raw data 5 times to get more patients
let rawTherapyData = [];
for (let i = 0; i < 5; i++) {
    // Create a deep copy of each item to avoid reference issues if modifying later
    rawTherapyDataTemplate.forEach(item => {
        rawTherapyData.push(JSON.parse(JSON.stringify(item)));
    });
}
console.log(`Total raw patient entries after duplication: ${rawTherapyData.length}`);
// --- End Increase Patient Count ---


// --- Process Raw Data into Structured Patient DB (IMPROVED ASSIGNMENT) ---
let patientsDB = [];
let patientIdCounter = 1001;
const assignedDoctorIds = doctorsDB.map(d => d.doctorId);
const uniquePatientMap = new Map(); // Use Map to handle potential duplicate names/ages across duplications
const numDoctors = doctorsDB.length;
const numPatientsRaw = rawTherapyData.length;
const basePatientsPerDoctor = Math.floor(numPatientsRaw / numDoctors);
const extraPatients = numPatientsRaw % numDoctors;

let currentDoctorIndex = 0;
let patientsAssignedToCurrentDoctor = 0;

rawTherapyData.forEach((item, index) => {
    if (!item || !item.name || typeof item.age !== 'number') {
        console.warn("Skipping invalid raw therapy data item:", item);
        return;
    }

    // Create a more unique key considering the index from the raw duplicated array
    const patientKey = `${item.name}-${item.age}-${index}`;
    let patient = uniquePatientMap.get(patientKey);

    if (!patient) {
        // Determine assigned doctor ID (balanced assignment)
        const targetPatientsForThisDoctor = basePatientsPerDoctor + (currentDoctorIndex < extraPatients ? 1 : 0);
        const assignedDoctorId = assignedDoctorIds[currentDoctorIndex];

        const nameParts = item.name.split(' ');
        const firstNameLower = nameParts[0]?.toLowerCase() ?? 'user';
        const lastNameInitialLower = nameParts[1]?.[0]?.toLowerCase() ?? '';
        const simpleUsername = `${firstNameLower}.${lastNameInitialLower}`;
        // Make username more unique using the index
        const uniqueUsername = `${simpleUsername}${item.age}_${index}`;
        const newPatientId = `pat${patientIdCounter++}`;

        patient = {
            patientId: newPatientId,
            username: uniqueUsername,
            password: "password123",
            name: item.name,
            age: item.age,
            gender: item.gender ?? 'Not specified',
            contact: `${uniqueUsername}@email.com`,
            assignedDoctorId: assignedDoctorId,
            medicalHistory: [`Initial Consultation for ${item.therapyTaken}`, "No major prior injuries reported."],
            lastVisits: [],
            prescribedTherapies: [],
            upcomingAppointments: [],
            recommendations: [`Follow prescribed ${item.therapyTaken} plan diligently.`, "Report any significant pain or discomfort immediately."] // Default notes
        };
        patientsDB.push(patient);
        uniquePatientMap.set(patientKey, patient); // Store using the unique key

        // Logic to move to the next doctor
        patientsAssignedToCurrentDoctor++;
        if (patientsAssignedToCurrentDoctor >= targetPatientsForThisDoctor && currentDoctorIndex < numDoctors - 1) {
            currentDoctorIndex++;
            patientsAssignedToCurrentDoctor = 0;
        }
    }

    // Add visit history based on raw data (even if patient object was technically created for a previous duplicate)
    const doctorName = doctorsDB.find(d => d.doctorId === patient.assignedDoctorId)?.name ?? "Unknown Doctor";

    // ADD MORE VISIT HISTORY PER PATIENT
    const numberOfVisits = Math.floor(Math.random() * 4) + 2; // Reduced number of extra visits per entry (2-5)
    for (let i = 0; i < numberOfVisits; i++) {
        const visitDate = new Date();
        // More recent visits: up to 180 days ago
        const daysAgo = Math.floor(Math.pow(Math.random(), 2) * 180) + 1;
        visitDate.setDate(visitDate.getDate() - daysAgo);
        const visitDateStr = visitDate.toISOString().split('T')[0];

        let visitNotes = "";
        const mainTherapy = patient.prescribedTherapies[0]?.type || item.therapyTaken || "General Physio";
        const secondaryTherapy = patient.prescribedTherapies[1]?.type;

        if (i === 0) { // First visit tied to the raw data item
            visitNotes = `Session for ${mainTherapy}. Duration: ${item.duration}. Assessment: ${item.results}. Established baseline.`;
        } else { // Subsequent visits
            const resultsOptions = ["Continued progress noted", "Adjusted therapy plan based on response", "Monitoring symptoms closely", "Slight setback addressed", "Good improvement seen"];
            const focusOptions = ["range of motion", "strengthening exercises", "pain management techniques", "functional mobility", "manual therapy techniques"];
            const therapyFocus = (i % 3 === 0 && secondaryTherapy) ? secondaryTherapy : mainTherapy;

            visitNotes = `Follow-up regarding ${therapyFocus}. ${resultsOptions[Math.floor(Math.random() * resultsOptions.length)]}. Session focused on ${focusOptions[Math.floor(Math.random() * focusOptions.length)]}. Patient advised on home exercises.`;
        }

        patient.lastVisits.push({
            id: `visit${Date.now()}${Math.random().toString(16).slice(2)}`,
            date: visitDateStr,
            doctorName: doctorName,
            diagnosis: `Physiotherapy follow-up`, // Simpler diagnosis
            notes: visitNotes,
        });
    }

    // Prescribed Therapies (ensure frequency, avoid duplicates for the same patient object)
    if (!patient.prescribedTherapies.some(t => t.type === item.therapyTaken)) {
        patient.prescribedTherapies.push({
            type: item.therapyTaken,
            frequency: `${Math.floor(Math.random() * 3) + 1}x/week`,
            duration: item.duration
        });
         // Add a potential second therapy sometimes
         if (Math.random() > 0.6 && patient.prescribedTherapies.length < 2) {
             const otherTherapies = ["Targeted Exercise Program", "Heat/Cold Therapy Application", "Stretching Routine", "Balance Training"];
             const randomTherapy = otherTherapies[Math.floor(Math.random() * otherTherapies.length)];
             if (!patient.prescribedTherapies.some(t => t.type === randomTherapy)) { // Ensure uniqueness
                  patient.prescribedTherapies.push({
                     type: randomTherapy,
                     frequency: `${Math.floor(Math.random() * 2) + 2}x/week`,
                     duration: "Ongoing"
                 });
             }
         }
    }
});

// Sort visits for each patient after generation
patientsDB.forEach(p => {
    p.lastVisits.sort((a, b) => new Date(b.date) - new Date(a.date));
});

// *** CHANGE START: Adjusted Upcoming Appointments Generation for Density ***
doctorsDB.forEach((doctor) => {
    const assignedPatientsForDoctor = patientsDB.filter(p => p.assignedDoctorId === doctor.doctorId);
    // Schedule appointments for a larger portion of patients (e.g., up to 8 or fewer)
    const patientsToSchedule = assignedPatientsForDoctor
        .sort(() => 0.5 - Math.random()) // Shuffle patients
        .slice(0, Math.min(assignedPatientsForDoctor.length, 6 + Math.floor(Math.random() * 3))); // Give 6-8 appointments per doctor if possible

    patientsToSchedule.forEach((p, index) => {
        // Increase chance of 2 appointments
        const numAppointments = Math.random() > 0.4 ? 2 : 1;
        for (let i = 0; i < numAppointments; i++) {
             if (p.upcomingAppointments.length >= 3) continue; // Max 3 appts per patient

            const appointmentDate = new Date();
            // Slightly more condensed timeframe (next 5-40 days)
            appointmentDate.setDate(appointmentDate.getDate() + Math.floor(Math.random() * 36) + 5 + (3 * i)); // Spread them slightly
            const dateStr = appointmentDate.toISOString().split('T')[0];
            const hour = 9 + Math.floor(Math.random() * 8); // 9 AM to 4 PM
            const minute = Math.random() > 0.5 ? '30' : '00';
            const timeStr = `${String(hour).padStart(2, '0')}:${minute}`;
            const location = hospitalsDB[index % hospitalsDB.length]?.name ?? "Main Clinic";
            const appointmentId = `appt${Date.now()}${Math.random().toString(16).slice(2)}`;

            if (!p.upcomingAppointments.some(a => a.date === dateStr && a.time === timeStr)) {
                 p.upcomingAppointments.push({ id: appointmentId, date: dateStr, time: timeStr, doctorName: doctor.name, location: location });
            }
        }
    });
});
// *** CHANGE END ***

// Sort upcoming appointments for ALL patients after generation
patientsDB.forEach(p => {
    p.upcomingAppointments.sort((a, b) => new Date(`${a.date}T${a.time ?? '00:00'}:00`) - new Date(`${b.date}T${b.time ?? '00:00'}:00`));
});


console.log(`Data Simulation Complete: ${doctorsDB.length} doctors, ${patientsDB.length} unique patients generated.`);
console.log("Patient counts per doctor:", doctorsDB.map(doc => ({ doctor: doc.name, count: patientsDB.filter(p => p.assignedDoctorId === doc.doctorId).length })));
console.log("Upcoming appointments per doctor:", doctorsDB.map(doc => {
    const count = patientsDB
        .filter(p => p.assignedDoctorId === doc.doctorId)
        .reduce((sum, p) => sum + p.upcomingAppointments.length, 0);
    return { doctor: doc.name, appointmentCount: count };
}));


// ------------------------------------
// --- 2. Utility Functions        ---
// ------------------------------------

const getById = (id) => document.getElementById(id);
const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);

const addClass = (el, ...classNames) => el?.classList.add(...classNames);
const removeClass = (el, ...classNames) => el?.classList.remove(...classNames);
const toggleClass = (el, className, force) => el?.classList.toggle(className, force);
const hasClass = (el, className) => el?.classList.contains(className) ?? false;

const simulateNetworkDelay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms));

const showButtonLoading = (button) => {
    if (!button) return;
    button.disabled = true;
    const textEl = button.querySelector('.button-text');
    const spinnerEl = button.querySelector('.loading-spinner');
    if (textEl) addClass(textEl, 'hidden');
    if (spinnerEl) removeClass(spinnerEl, 'hidden');
};

const hideButtonLoading = (button) => {
     if (!button) return;
    button.disabled = false;
    const textEl = button.querySelector('.button-text');
    const spinnerEl = button.querySelector('.loading-spinner');
    if (textEl) removeClass(textEl, 'hidden');
    if (spinnerEl) addClass(spinnerEl, 'hidden');
};

function createRipple(event) {
    const targetElement = event.currentTarget;
    if (!targetElement || targetElement.disabled) return; // Added disabled check

    // Prevent multiple ripples on the same element rapidly
    if (targetElement.querySelector(".ripple")) return;

    const circle = document.createElement("span");
    const diameter = Math.max(targetElement.clientWidth, targetElement.clientHeight);
    const radius = diameter / 2;
    const rect = targetElement.getBoundingClientRect();

    circle.style.width = circle.style.height = `${diameter}px`;
    // Calculate click position relative to the button
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    addClass(circle, "ripple");

    // Robust removal: Use animationend and a fallback timeout
    const rippleTimeout = setTimeout(() => { circle.remove(); }, 601); // Slightly longer than animation
    circle.addEventListener('animationend', () => {
      clearTimeout(rippleTimeout); // Clear timeout if animation finishes first
      circle.remove();
    }, { once: true }); // Auto-remove listener after firing

    targetElement.appendChild(circle);
}

const setText = (element, text) => {
    if (element) {
        element.textContent = text ?? 'N/A';
    } else {
        // Avoid logging for non-critical optional elements like feedback areas
        // console.warn("Attempted to set text on a non-existent element.");
    }
};

const setHTML = (element, html) => {
     if (element) {
        element.innerHTML = html ?? '';
    } else {
        // console.warn("Attempted to set HTML on a non-existent element.");
    }
};

function showFeedback(element, message, type = 'info', duration = 3500) {
    if (!element) {
        console.warn("Feedback element not found for message:", message);
        return;
    }
    setText(element, message);
    element.className = 'feedback-message'; // Reset classes first
    addClass(element, type); // Add the type class (e.g., 'success', 'error')
    removeClass(element, 'hidden'); // Make it visible

    // Clear any existing timeout associated with this element
    if (element.feedbackTimeout) {
        clearTimeout(element.feedbackTimeout);
    }

    // Set a new timeout to hide the message if duration is positive
    if (duration > 0) {
        element.feedbackTimeout = setTimeout(() => {
            if (element) { // Check if element still exists
                setText(element, ''); // Clear the text
                addClass(element, 'hidden'); // Hide it
                removeClass(element, type); // Remove the type class
                element.feedbackTimeout = null; // Clear the timeout reference
            }
        }, duration);
    }
}


function renderList(containerElement, items, renderItemFunc, noResultsSelector, skeletonSelector) {
    if (!containerElement) {
        console.error("renderList: Container element is missing.");
        return;
    }

    // Find placeholders relative to the container
    const skeleton = skeletonSelector ? containerElement.querySelector(skeletonSelector) : containerElement.querySelector('.skeleton-loader');
    const noResults = noResultsSelector ? containerElement.querySelector(noResultsSelector) : containerElement.querySelector('.list-placeholder.no-results');

    // Hide placeholders initially
    if (skeleton) addClass(skeleton, 'hidden');
    if (noResults) addClass(noResults, 'hidden');

    // Clear only non-placeholder children more safely
    const childrenToRemove = [];
    for (const child of containerElement.children) {
        if (!hasClass(child, 'list-placeholder') && !hasClass(child, 'skeleton-loader')) {
            childrenToRemove.push(child);
        }
    }
    childrenToRemove.forEach(el => el.remove());

    if (items && items.length > 0) {
        const fragment = document.createDocumentFragment();
        items.forEach(item => {
             const tempDiv = document.createElement('div'); // Create a temporary div
             // Wrap renderItemFunc in try-catch for better error isolation
             try {
                tempDiv.innerHTML = renderItemFunc(item).trim(); // Render item HTML into it
             } catch (e) {
                console.error("Error rendering list item:", e, "Item data:", item);
                tempDiv.innerHTML = `<li class="data-list-item error-item" style="color: var(--warning-color);">Error rendering item.</li>`; // Display error in list
             }
             // Append all nodes from the temp div (handles cases where renderItemFunc returns multiple top-level elements or just text)
             while (tempDiv.firstChild) {
                 fragment.appendChild(tempDiv.firstChild);
             }
        });
        containerElement.appendChild(fragment);
    } else {
        // Show 'no results' placeholder if it exists
        if (noResults) {
            removeClass(noResults, 'hidden');
        } else {
            // Fallback if no specific placeholder found AND list is truly empty
            // Check if a fallback already exists before adding another one
            if (!containerElement.querySelector('.generic-fallback')) {
                const isList = containerElement.tagName === 'UL' || containerElement.tagName === 'OL';
                const placeholderTag = isList ? 'li' : 'div';
                containerElement.innerHTML = `<${placeholderTag} class="list-placeholder no-results generic-fallback" style="border: none; padding: 1rem; text-align: center; font-style: italic;">No data available.</${placeholderTag}>`;
                console.warn("renderList: No items and no specific 'no-results' placeholder found for", containerElement, ". Added generic fallback.");
            }
        }
    }
}


// ------------------------------------
// --- 3. Theme Management         ---
// ------------------------------------
let patientChartInstance = null; // Keep global

function applyTheme(theme) {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    const themeToggleButton = getById('theme-toggle-btn'); // Might be multiple, get the first one? Or handle both? Let's assume one ID is enough for styling logic.
    const toggleIcon = themeToggleButton?.querySelector('i');

    if (toggleIcon) {
        const isDark = theme === 'dark';
        toggleIcon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
        const label = isDark ? 'Activate Light Mode' : 'Activate Dark Mode';
        // Update all theme toggle buttons if multiple exist (e.g., header, login)
        qsa('#theme-toggle-btn').forEach(button => {
             button.setAttribute('aria-label', label);
             button.setAttribute('data-tooltip', label);
             const icon = button.querySelector('i');
             if (icon) icon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
        });
    }

     // Re-render chart with new theme colors if it exists and is visible
     if (typeof Chart !== 'undefined' && patientChartInstance) {
         const canvas = getById('patientChart');
         // Check if the canvas exists and is part of the currently active dashboard page
         const graphContainer = canvas?.closest('.graph-container-placeholder');
         // Re-render only if the graph container is visible and not showing loading/error
         if (canvas && canvas.isConnected && graphContainer && !hasClass(graphContainer, 'hidden') && !graphContainer.querySelector('.list-placeholder:not(.hidden)')) {
              const currentChartType = patientChartInstance.config.type ?? 'line';
              // Use a small delay to ensure theme variables have updated in the DOM/CSSOM
              setTimeout(() => {
                   renderPatientChart('patientChart', currentChartType).catch(console.error);
              }, 50);
         }
     }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') ?? 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('sankeeravyaTheme', newTheme);
    applyTheme(newTheme);
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('sankeeravyaTheme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme ?? (prefersDark ? 'dark' : 'light');
    applyTheme(initialTheme);

    // Ensure listener is attached ONLY ONCE to each button
    const themeToggleButtons = qsa('#theme-toggle-btn'); // Could be in header and login
    themeToggleButtons.forEach(button => {
        if (!button.hasThemeListener) { // Add flag to prevent multiple listeners
            button.addEventListener('click', toggleTheme);
            button.hasThemeListener = true;
        }
    });
}

// ------------------------------------
// --- 4. Authentication & Session ---
// ------------------------------------

function authenticatePatient(username, password) {
    return patientsDB.find(p => p.username === username && p.password === password);
}

function authenticateDoctor(username, password, doctorId) {
    // Ensure doctorId comparison is case-insensitive if necessary, but keep it strict for now
    return doctorsDB.find(d => d.username === username && d.password === password && d.doctorId === doctorId);
}

function login(role, credentials) {
    let user = null;
    console.log(`Attempting login for role: ${role}, user: ${credentials.username}`);
    try {
        if (role === 'patient') {
            user = authenticatePatient(credentials.username, credentials.password);
        } else if (role === 'doctor') {
            // Trim doctorId input just in case
            user = authenticateDoctor(credentials.username, credentials.password, credentials.doctorId?.trim());
        }

        if (user) {
            console.log("Login successful:", user.name);
            sessionStorage.clear(); // Clear previous session just in case
            sessionStorage.setItem('sankeeravyaUserRole', role);
            sessionStorage.setItem('sankeeravyaUserId', role === 'patient' ? user.patientId : user.doctorId);
            sessionStorage.setItem('sankeeravyaUserName', user.name);
            console.log("Session storage set:", sessionStorage.getItem('sankeeravyaUserRole'), sessionStorage.getItem('sankeeravyaUserId'));
            return true;
        }
        console.log("Login failed: Credentials did not match.");
        return false;
    } catch (error) {
        console.error("Error during authentication check:", error);
        return false;
    }
}

function logout() {
    showConfirmationModal('Are you sure you want to logout?', () => {
        console.log("Logging out...");
        sessionStorage.clear();
        // Clear any other relevant local storage if needed (e.g., journal prompts)
        localStorage.removeItem('patientJournalEntries'); // Example: Clear journal on logout
        sessionStorage.removeItem('completedAppointments'); // Clear completed status
        forceRedirectToLogin("User logged out");
    });
}

function checkAuth(requiredRole) {
    console.log(`--- checkAuth called. Required role: ${requiredRole || 'Any'} ---`);
    const role = sessionStorage.getItem('sankeeravyaUserRole');
    const userId = sessionStorage.getItem('sankeeravyaUserId');
    const userName = sessionStorage.getItem('sankeeravyaUserName');
    console.log(`Found in sessionStorage: role=${role}, userId=${userId}, userName=${userName}`);

    const currentPage = getCurrentPageName();
    const isLoginPage = currentPage === 'index.html';

    if (!role || !userId) {
        if (!isLoginPage) {
            console.warn("Auth check failed: No session data and not on login page. Redirecting.");
            forceRedirectToLogin("Session missing");
            return null; // Indicate redirection needed
        } else {
            console.log("Auth check: No session data, on login page. Proceeding.");
            return null; // Allow login page load
        }
    }

    // Session exists
    if (isLoginPage) {
        console.log(`Auth check: Session data found on login page. Redirecting ${role} to dashboard.`);
        const redirectUrl = role === 'patient' ? 'patient.html' : 'doctor.html';
        // Use replace to prevent back button returning to login
        window.location.replace(redirectUrl);
        return null; // Indicate redirection is happening
    }

    // On a protected page (patient.html or doctor.html)
    if (!requiredRole) {
         console.error("Auth check error: requiredRole not specified on a protected page:", currentPage);
         forceRedirectToLogin("Configuration Error");
         return null; // Indicate redirection needed
    }

    // Check if the role matches the required role for the page
    if (role === requiredRole) {
        console.log(`Auth check passed for required role: ${requiredRole}`);
        return { role, userId, userName }; // Authorized
    } else {
        // Role mismatch (e.g., patient trying to access doctor page)
        console.warn(`Auth check failed: Required role '${requiredRole}', but user has role '${role}'. Redirecting.`);
        forceRedirectToLogin("Incorrect role access attempt");
        return null; // Indicate redirection needed
    }
}

function forceRedirectToLogin(reason = "Authentication required") {
    console.log(`Redirecting to login page. Reason: ${reason}`);
    sessionStorage.clear();
    // Use replace to prevent issues with browser history (back button won't go to protected page)
    window.location.replace('index.html');
}

function getCurrentPageName() {
    try {
        const path = window.location.pathname;
        const pageName = path.substring(path.lastIndexOf('/') + 1);
        // Handle root URL or URLs ending with '/' (common in deployment)
        return (pageName === '' || pageName === '/') ? 'index.html' : pageName;
    } catch (e) {
        console.error("Error getting current page name:", e);
        return 'unknown';
    }
}

// ------------------------------------
// --- 5. Modal Dialog Logic       ---
// ------------------------------------
let confirmCallback = null; // Keep global

function showConfirmationModal(message, onConfirm) {
    const modal = getById('confirmation-modal');
    const modalMessage = getById('modal-message');
    const confirmBtn = getById('modal-confirm-btn');
    const cancelBtn = getById('modal-cancel-btn');
    const closeBtn = getById('modal-close-btn');

    if (!modal || !modalMessage || !confirmBtn || !cancelBtn || !closeBtn) { // Completed the check
        console.error("Modal elements not found! Using fallback confirm.");
        // Fallback to browser confirm
        if (window.confirm(`Fallback Confirmation:\n${message}`)) {
             if (typeof onConfirm === 'function') {
                try { onConfirm(); } catch(e) { console.error("Error in fallback confirm callback:", e); }
            }
        }
        return;
    }

    setText(modalMessage, message);
    confirmCallback = onConfirm; // Store the callback function

    // --- Listener Management: Remove old before adding new ---
    const prevConfirmHandler = confirmBtn.clickHandler;
    if (prevConfirmHandler) confirmBtn.removeEventListener('click', prevConfirmHandler);
    const prevCancelHandler = cancelBtn.clickHandler;
    if (prevCancelHandler) cancelBtn.removeEventListener('click', prevCancelHandler);
    const prevCloseHandler = closeBtn.clickHandler;
    if (prevCloseHandler) closeBtn.removeEventListener('click', prevCloseHandler);
    const prevBackdropHandler = modal.clickHandler;
     if (prevBackdropHandler) modal.removeEventListener('click', prevBackdropHandler);
    // --- End Listener Management ---

    // Define new handlers
    const handleConfirm = () => handleModalConfirm();
    const handleCancel = () => hideConfirmationModal();
    const handleBackdrop = (event) => handleModalBackdropClick(event);

    // Attach new listeners and store handlers for potential cleanup
    confirmBtn.addEventListener('click', handleConfirm, { once: true }); // Fire only once
    confirmBtn.clickHandler = handleConfirm; // Store handler reference

    cancelBtn.addEventListener('click', handleCancel, { once: true });
    cancelBtn.clickHandler = handleCancel;

    closeBtn.addEventListener('click', handleCancel, { once: true });
    closeBtn.clickHandler = handleCancel;

    // Add backdrop click listener (only closes if click is on backdrop itself)
    modal.addEventListener('click', handleBackdrop);
    modal.clickHandler = handleBackdrop; // Store handler reference

    // Show the modal
    modal.setAttribute('aria-hidden', 'false');
    removeClass(modal, 'hidden');
    // Focus management: Focus the confirm button for primary action
    confirmBtn.focus();
}

function hideConfirmationModal() {
    const modal = getById('confirmation-modal');
    if (modal) {
        modal.setAttribute('aria-hidden', 'true');
        addClass(modal, 'hidden');

        // Optional: Clean up listeners immediately on hide to be safe
        const confirmBtn = getById('modal-confirm-btn');
        const cancelBtn = getById('modal-cancel-btn');
        const closeBtn = getById('modal-close-btn');
        if(confirmBtn && confirmBtn.clickHandler) confirmBtn.removeEventListener('click', confirmBtn.clickHandler);
        if(cancelBtn && cancelBtn.clickHandler) cancelBtn.removeEventListener('click', cancelBtn.clickHandler);
        if(closeBtn && closeBtn.clickHandler) closeBtn.removeEventListener('click', closeBtn.clickHandler);
        if(modal.clickHandler) modal.removeEventListener('click', modal.clickHandler);
        // Clear stored handlers
        if(confirmBtn) confirmBtn.clickHandler = null;
        if(cancelBtn) cancelBtn.clickHandler = null;
        if(closeBtn) closeBtn.clickHandler = null;
        modal.clickHandler = null;
    }
    confirmCallback = null; // Clear the stored callback
}

function handleModalConfirm() {
    if (typeof confirmCallback === 'function') {
        try {
            confirmCallback(); // Execute the stored callback
        } catch (e) {
            console.error("Error executing modal confirm callback:", e);
        }
    }
    hideConfirmationModal(); // Ensure modal hides after confirm action
}

function handleModalBackdropClick(event) {
    // Hide only if clicking directly on the backdrop (event.target is the modal itself)
    if (event.target === getById('confirmation-modal')) {
        hideConfirmationModal();
    }
}


// ------------------------------------
// --- 6. Login Page Logic         ---
// ------------------------------------

function initLoginPage() {
    console.log("--- Initializing Login Page ---");

    // Check if already logged in; if so, checkAuth handles the redirect
    if (checkAuth()) {
        console.log("Login page init: User already logged in, redirection handled by checkAuth.");
        return; // Stop initialization if redirecting
    }
    console.log("Login page init: No session or redirect handled. Setting up form.");

    // Get elements
    const loginForm = getById('login-form');
    const patientRoleBtn = getById('patient-role-btn');
    const doctorRoleBtn = getById('doctor-role-btn');
    const doctorIdGroup = getById('doctor-id-group');
    const doctorIdInput = getById('doctor-id');
    const usernameInput = getById('username');
    const passwordInput = getById('password');
    const errorMessage = getById('login-error-message');
    const submitBtn = loginForm?.querySelector('button[type="submit"]');
    const passwordToggle = loginForm?.querySelector('.password-toggle');
    const forgotPasswordLink = qs('.forgot-password-link'); // Use querySelector

    // Check if essential elements exist
    if (!loginForm || !patientRoleBtn || !doctorRoleBtn || !doctorIdGroup || !submitBtn || !usernameInput || !passwordInput || !errorMessage || !doctorIdInput || !passwordToggle || !forgotPasswordLink) {
         console.error("Login page initialization failed: One or more critical elements are missing.");
         // Display a user-friendly error if possible, or just log
         displayFatalError("Login Error", "The login form could not be loaded correctly. Please refresh the page.");
         return; // Stop initialization
    }

    let selectedRole = 'patient'; // Default role

    // Function to switch role UI
    const switchRole = (newRole) => {
        if (selectedRole === newRole) return; // No change needed
        selectedRole = newRole;
        const isPatient = newRole === 'patient';

        // Toggle button active states and ARIA attributes
        toggleClass(patientRoleBtn, 'active', isPatient);
        toggleClass(doctorRoleBtn, 'active', !isPatient);
        patientRoleBtn.setAttribute('aria-pressed', String(isPatient));
        doctorRoleBtn.setAttribute('aria-pressed', String(!isPatient));

        // Toggle Doctor ID field visibility and requirement
        toggleClass(doctorIdGroup, 'visible', !isPatient);
        toggleClass(doctorIdGroup, 'hidden', isPatient);
        doctorIdInput.required = !isPatient; // Set required attribute for HTML5 validation
        if (isPatient) doctorIdInput.value = ''; // Clear Doctor ID field if switching to patient

        // Clear any previous errors on role switch
        setText(errorMessage, '');
        removeClass(errorMessage, 'global-error'); // Remove error styling
        removeClass(usernameInput, 'invalid');
        removeClass(passwordInput, 'invalid');
        removeClass(doctorIdInput, 'invalid');
        qsa('.form-group .error-text').forEach(el => setText(el, '')); // Clear field-level errors
    };

    // Add event listeners for role buttons
    patientRoleBtn.addEventListener('click', () => switchRole('patient'));
    doctorRoleBtn.addEventListener('click', () => switchRole('doctor'));

    // Password visibility toggle
    passwordToggle.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        const icon = passwordToggle.querySelector('i');
        if (icon) icon.className = isPassword ? 'fas fa-eye-slash' : 'fas fa-eye'; // Toggle icon class
        // Update ARIA label and tooltip for accessibility
        const tooltipText = isPassword ? 'Hide password' : 'Show password';
        passwordToggle.setAttribute('aria-label', tooltipText);
        passwordToggle.setAttribute('data-tooltip', tooltipText); // Update tooltip if used
    });
    // Initialize icon state based on initial input type
     const initialIcon = passwordToggle.querySelector('i');
     if(initialIcon) initialIcon.className = (passwordInput.type === 'password') ? 'fas fa-eye' : 'fas fa-eye-slash';
     passwordToggle.setAttribute('aria-label', (passwordInput.type === 'password') ? 'Show password' : 'Hide password');


    // --- Forgot Password Placeholder ---
    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        showFeedback(errorMessage, "Forgot Credentials feature is a placeholder in this demo.", 'info', 5000);
        // In a real app, this would redirect or show a password reset modal/form.
    });

    // Login Form Submission Handler
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Clear previous errors
        setText(errorMessage, '');
        removeClass(errorMessage, 'global-error');
        qsa('.form-group .error-text').forEach(el => setText(el, ''));
        qsa('.form-group .form-control.invalid').forEach(el => removeClass(el, 'invalid'));

        showButtonLoading(submitBtn); // Show loading state on the button

        // Get credentials from the form
        const credentials = {
            username: usernameInput.value.trim(),
            password: passwordInput.value,
            // Get doctorId only if the selected role is 'doctor'
            doctorId: selectedRole === 'doctor' ? doctorIdInput.value.trim() : null
        };

        // --- Basic Client-Side Validation ---
        let isValid = true;
        const invalidateField = (input, message) => {
            if (!input) return;
            const errorEl = input.closest('.form-group')?.querySelector('.error-text');
            if (errorEl) setText(errorEl, message);
            addClass(input, 'invalid');
            isValid = false; // Mark form as invalid
        };

        if (!credentials.username) invalidateField(usernameInput, 'Username is required.');
        if (!credentials.password) invalidateField(passwordInput, 'Password is required.');
        // Validate doctorId only if the role is 'doctor'
        if (selectedRole === 'doctor' && !credentials.doctorId) invalidateField(doctorIdInput, 'Doctor ID is required.');

        if (!isValid) {
            setText(errorMessage, 'Please fix the errors above.'); // Show global error message
            addClass(errorMessage, 'global-error');
            hideButtonLoading(submitBtn); // Hide loading state
            // Trigger shake animation on error
            const formWrapper = loginForm.closest('.login-form-wrapper');
            if (formWrapper && !hasClass(formWrapper, 'shake-animation')) {
                 addClass(formWrapper, 'shake-animation');
                 // Remove animation class after it finishes
                 setTimeout(() => { removeClass(formWrapper, 'shake-animation') }, 500);
             }
            return; // Stop submission
        }
        // --- End Validation ---

        await simulateNetworkDelay(500); // Simulate network latency

        try {
            // Attempt login (this function also sets session storage on success)
            const loggedIn = login(selectedRole, credentials);

            if (loggedIn) {
                // Determine redirect URL based on role
                const redirectUrl = selectedRole === 'patient' ? 'patient.html' : 'doctor.html';
                console.log(`Login successful. Redirecting to: ${redirectUrl}`);
                if (submitBtn) submitBtn.disabled = true; // Prevent double clicks during redirect

                // Redirect using replace (prevents back button to login page) after a short delay
                setTimeout(() => {
                     try {
                        window.location.replace(redirectUrl);
                     } catch (redirectError) {
                         console.error("Redirect failed:", redirectError);
                         setText(errorMessage, 'Login succeeded but redirection failed. Please reload.');
                         addClass(errorMessage, 'global-error');
                         if (submitBtn) submitBtn.disabled = false; // Re-enable button if redirect fails
                         hideButtonLoading(submitBtn);
                     }
                }, 150); // Short delay to allow UI feedback

            } else {
                // Login failed (credentials didn't match)
                hideButtonLoading(submitBtn);
                const errorMsg = selectedRole === 'patient' ? 'Invalid username or password.' : 'Invalid username, password, or Doctor ID.';
                setText(errorMessage, errorMsg);
                addClass(errorMessage, 'global-error');
                // Mark fields as invalid again
                addClass(usernameInput, 'invalid');
                addClass(passwordInput, 'invalid');
                if (selectedRole === 'doctor') addClass(doctorIdInput, 'invalid');

                // Trigger shake animation on error
                const formWrapper = loginForm.closest('.login-form-wrapper');
                if (formWrapper && !hasClass(formWrapper, 'shake-animation')) {
                    addClass(formWrapper, 'shake-animation');
                    setTimeout(() => { removeClass(formWrapper, 'shake-animation') }, 500);
                }
            }
        } catch (error) {
             // Catch unexpected errors during the login process
             console.error("Critical error during login submission:", error);
             hideButtonLoading(submitBtn);
             setText(errorMessage, 'An unexpected error occurred. Please try again later.');
             addClass(errorMessage, 'global-error');
        }
    });

    console.log("Login Page Initialized Successfully.");
}


// ------------------------------------
// --- 7. Patient Dashboard Logic  ---
// ------------------------------------

let currentPatientData = null;
let currentVisitSort = 'date-desc';
let currentChartType = 'line';
let completedAppointmentIds = new Set(
    // Load completed appointment IDs from session storage, default to empty array string
    JSON.parse(sessionStorage.getItem('completedAppointments') || '[]')
);

async function initPatientDashboard() {
    console.log("--- Initializing Patient Dashboard ---");

    const auth = checkAuth('patient');
    if (!auth) {
        console.log("Patient dashboard init failed: Authentication check failed or redirection needed.");
        return; // Stop initialization if auth fails or redirects
    }
    console.log(`Patient authenticated: ${auth.userName} (ID: ${auth.userId})`);

    // Find patient data in the simulated DB
    currentPatientData = patientsDB.find(p => p.patientId === auth.userId);
    if (!currentPatientData) {
        console.error(`FATAL: Patient data not found for ID: ${auth.userId}. Redirecting to login.`);
        forceRedirectToLogin("Patient data missing"); // Redirect if data is corrupted or missing
        return;
    }
    console.log(`Patient data loaded for: ${currentPatientData.name}`);

    try {
        // --- Setup Header ---
        const userNameHeader = getById('user-name-header');
        const logoutBtn = getById('logout-btn');
        if (userNameHeader) setText(userNameHeader, currentPatientData.name);
        if (logoutBtn) {
            // Ensure listener is attached only once
            if (!logoutBtn.hasLogoutListener) {
                 logoutBtn.addEventListener('click', logout);
                 logoutBtn.hasLogoutListener = true;
            }
        } else console.warn("Logout button not found in header.");

        // --- Initial UI State: Show Skeletons ---
        qsa('.skeleton-loader').forEach(loader => removeClass(loader, 'hidden'));
        qsa('.actual-content').forEach(content => addClass(content, 'hidden'));
        qsa('.list-placeholder.no-results').forEach(p => addClass(p, 'hidden')); // Hide 'no results' initially
        // Handle graph placeholders
        const graphLoadingMsg = getById('graph-loading-message');
        const graphErrorMsg = getById('graph-error-message');
        const graphCanvas = getById('patientChart');
        const graphFeedback = getById('graph-feedback'); // Added feedback area
        if(graphLoadingMsg) removeClass(graphLoadingMsg, 'hidden');
        if(graphErrorMsg) addClass(graphErrorMsg, 'hidden');
        if(graphCanvas) addClass(graphCanvas, 'hidden');
        if(graphFeedback) addClass(graphFeedback, 'hidden'); // Hide feedback area initially

        await simulateNetworkDelay(400); // Simulate loading delay

        // --- Populate Content ---
        populatePatientInfoCard();
        renderPatientVisitsList(); // Render visits based on current sort
        renderPatientTherapiesList();
        renderUpcomingAppointmentsList();
        renderPatientJournal(); // Load journal from localStorage
        renderPatientRecommendationsList(); // Render doctor's notes

        // --- Render Graph ---
        if (typeof Chart !== 'undefined') {
             await renderPatientChart('patientChart', currentChartType); // Render initial chart
        } else {
            console.warn("Chart.js library not loaded. Skipping graph rendering.");
            if(graphLoadingMsg) addClass(graphLoadingMsg, 'hidden'); // Hide loading msg
            if (graphErrorMsg) { // Show error msg if element exists
                setText(graphErrorMsg.querySelector('p') ?? graphErrorMsg, 'Graph library failed to load. Cannot display trends.');
                removeClass(graphErrorMsg, 'hidden');
            }
        }

        // --- Final UI State: Hide Skeletons, Show Content ---
        qsa('.skeleton-loader').forEach(loader => addClass(loader, 'hidden'));
        qsa('.actual-content').forEach(content => removeClass(content, 'hidden'));

        // --- Setup Event Listeners ---
        setupPatientDashboardEventListeners();

        console.log("Patient Dashboard Initialized Successfully.");

    } catch (error) {
        console.error("Error during Patient Dashboard initialization:", error);
        // Display a user-friendly error overlay
        displayFatalError(
            "Dashboard Loading Error",
            "Sorry, there was a problem loading your dashboard content.",
            `Details: ${error.message}`
        );
    }
}

function populatePatientInfoCard() {
    if (!currentPatientData) return;
    const card = getById('patient-info-card');
    if (!card) return console.error("Patient info card element not found.");
    // Target the actual content container to avoid overwriting the skeleton
    const contentContainer = card.querySelector('.actual-content');
    if (!contentContainer) return console.error("Patient info content container not found.");

    // Use utility function to set text content safely
    setText(contentContainer.querySelector('#patient-name'), currentPatientData.name);
    setText(contentContainer.querySelector('#patient-age'), currentPatientData.age);
    setText(contentContainer.querySelector('#patient-gender'), currentPatientData.gender);
    setText(contentContainer.querySelector('#patient-contact'), currentPatientData.contact);
    setText(contentContainer.querySelector('#patient-id'), currentPatientData.patientId);
}

function renderPatientVisitsList() {
    if (!currentPatientData) return;
    const visitsListEl = getById('last-visits-list');
    if (!visitsListEl) return console.error("Visits list element (#last-visits-list) not found.");

    const visits = currentPatientData.lastVisits ?? [];
    // Sort visits based on the current sort state
    const sortedVisits = [...visits].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return currentVisitSort === 'date-asc' ? dateA - dateB : dateB - dateA; // Default to descending
    });

    // Use renderList utility to populate the list
    renderList(visitsListEl, sortedVisits, visit => `
        <li class="data-list-item hover-effect">
            <p><span class="list-label">Date:</span> <span class="visit-date">${visit.date ?? 'N/A'}</span></p>
            <p><span class="list-label">Doctor:</span> <span class="visit-doctor">${visit.doctorName ?? 'N/A'}</span></p>
            <p><span class="list-label">Reason:</span> <span class="visit-diagnosis">${visit.diagnosis ?? 'N/A'}</span></p>
            ${visit.notes ? `<p><span class="list-label">Notes:</span> <span class="visit-notes">${visit.notes}</span></p>` : ''}
        </li>`,
        '#last-visits-card .no-results', // Use specific selector
        '#last-visits-card .skeleton-loader' // Use specific selector
    );
}

function renderPatientTherapiesList() {
     if (!currentPatientData) return;
    const therapiesListEl = getById('therapies-list');
     if (!therapiesListEl) return console.error("Therapies list element (#therapies-list) not found.");

    // Use renderList to populate
    renderList(therapiesListEl, currentPatientData.prescribedTherapies ?? [], therapy => `
         <li class="data-list-item hover-effect">
             <p><span class="list-label">Type:</span> <span class="therapy-type">${therapy.type ?? 'N/A'}</span></p>
             <p><span class="list-label">Frequency:</span> <span class="therapy-frequency">${therapy.frequency ?? 'N/A'}</span></p>
             <p><span class="list-label">Duration:</span> <span class="therapy-duration">${therapy.duration ?? 'N/A'}</span></p>
         </li>`,
         '#therapies-exercises-card .no-results', // Use specific selector
         '#therapies-exercises-card .skeleton-loader' // Use specific selector
    );
}

function renderUpcomingAppointmentsList() {
     if (!currentPatientData) return;
    const appointmentsListEl = getById('appointments-list');
    if (!appointmentsListEl) return console.error("Appointments list element (#appointments-list) not found.");

    const today = new Date().setHours(0, 0, 0, 0); // Get start of today

    // Filter for upcoming appointments (today or future) and sort them
    const upcoming = (currentPatientData.upcomingAppointments ?? [])
        .filter(a => a.date && new Date(a.date).setHours(0,0,0,0) >= today)
        .sort((a, b) => new Date(`${a.date}T${a.time ?? '00:00'}:00`) - new Date(`${b.date}T${b.time ?? '00:00'}:00`)); // Sort by date and time

     // Use renderList to populate
     renderList(appointmentsListEl, upcoming, appt => {
        // Check if the appointment ID is in the completed set
        const isCompleted = completedAppointmentIds.has(appt.id);
        const tooltipText = isCompleted ? 'Mark as Pending' : 'Mark as Completed';
        // Determine which icon to display based on completion status
        const checkDisplay = isCompleted ? 'inline-block' : 'none';
        const circleDisplay = isCompleted ? 'none' : 'inline-block';

        // Add 'completed' class and data attribute for styling and JS targeting
        return `
        <li class="data-list-item hover-effect appointment-item ${isCompleted ? 'completed' : ''}" data-appt-id="${appt.id}">
            <div> <!-- Wrapper for appointment details -->
                <p><span class="list-label">Date:</span> <span class="appt-date">${appt.date}</span></p>
                <p><span class="list-label">Time:</span> <span class="appt-time">${appt.time ?? 'N/A'}</span></p>
                <p><span class="list-label">Doctor:</span> <span class="appt-doctor">${appt.doctorName ?? 'N/A'}</span></p>
                <p><span class="list-label">Location:</span> <span class="appt-location">${appt.location ?? 'N/A'}</span></p>
            </div>
            <!-- Completion toggle button -->
            <button class="complete-toggle-btn btn btn-ghost btn-sm" data-tooltip="${tooltipText}" aria-label="${tooltipText}">
                <i class="fas fa-check" style="display: ${checkDisplay};" aria-hidden="true"></i>
                <i class="far fa-circle" style="display: ${circleDisplay};" aria-hidden="true"></i>
            </button>
        </li>`;
     },
        '#upcoming-appointments-card .no-results', // Use specific selector
        '#upcoming-appointments-card .skeleton-loader' // Use specific selector
     );

    // Attach listeners to the completion toggle buttons AFTER rendering
    appointmentsListEl.querySelectorAll('.complete-toggle-btn').forEach(btn => {
        // Remove potential old listener before adding new one to prevent duplicates
        btn.removeEventListener('click', handleAppointmentCompleteToggle);
        btn.addEventListener('click', handleAppointmentCompleteToggle);
    });
}

// *** Function to render doctor's notes/recommendations for the patient ***
function renderPatientRecommendationsList() {
    if (!currentPatientData) return;
    const notesListEl = getById('doctor-notes-list'); // Use the new ID from patient.html
    if (!notesListEl) return console.error("Doctor notes list element (#doctor-notes-list) not found.");

    const recommendations = currentPatientData.recommendations ?? [];

    // Use renderList utility to populate the list
    renderList(notesListEl, recommendations, rec => {
        // Basic sanitization: Display recommendation text safely
        const safeRec = (rec || '').replace(/</g, "&lt;").replace(/>/g, "&gt;");
        return `<li class="data-list-item">${safeRec}</li>`;
        },
        '#doctor-notes-card .no-results', // Selector for the 'no results' placeholder within the list
        '#doctor-notes-card .skeleton-loader' // Selector for the skeleton loader within the list
    );
}


function handleAppointmentCompleteToggle(event) {
    event.stopPropagation(); // Prevent triggering other listeners on the list item if any
    const button = event.currentTarget;
    const listItem = button.closest('.appointment-item'); // Find the parent list item
    const appointmentId = listItem?.dataset.apptId; // Get the appointment ID
    if (!appointmentId) return; // Exit if no ID found

    const checkIcon = button.querySelector('.fa-check');
    const circleIcon = button.querySelector('.far.fa-circle');
    if (!checkIcon || !circleIcon) return; // Exit if icons are missing

    const wasCompleted = completedAppointmentIds.has(appointmentId);
    const isNowCompleted = !wasCompleted; // Toggle the state
    const tooltipText = isNowCompleted ? 'Mark as Pending' : 'Mark as Completed';

    // Update the Set of completed IDs
    if (isNowCompleted) {
        completedAppointmentIds.add(appointmentId);
    } else {
        completedAppointmentIds.delete(appointmentId);
    }

    // Update UI: toggle class, button tooltip/label, and icon visibility
    toggleClass(listItem, 'completed', isNowCompleted);
    button.setAttribute('data-tooltip', tooltipText);
    button.setAttribute('aria-label', tooltipText);
    checkIcon.style.display = isNowCompleted ? 'inline-block' : 'none';
    circleIcon.style.display = isNowCompleted ? 'none' : 'inline-block';

    // Persist the updated state to sessionStorage
    try {
        sessionStorage.setItem('completedAppointments', JSON.stringify(Array.from(completedAppointmentIds)));
    } catch (e) {
        console.error("Failed to save completed appointments state to sessionStorage:", e);
        // Optionally: Revert UI change if saving fails critically
    }
}

// --- Patient Journal Logic (Uses localStorage) ---
function getJournalEntries() {
    try {
        const entries = JSON.parse(localStorage.getItem('patientJournalEntries') || '[]');
        // Basic validation and sort: Ensure entries are objects with text and timestamp, sort newest first
        return entries
            .filter(entry => entry && typeof entry.text === 'string' && typeof entry.timestamp === 'number')
            .sort((a,b) => b.timestamp - a.timestamp);
    } catch (e) {
        console.error("Error reading journal entries from localStorage:", e);
        localStorage.removeItem('patientJournalEntries'); // Clear potentially corrupted data
        return []; // Return empty array on error
    }
}

function saveJournalEntries(entries) {
    try {
        localStorage.setItem('patientJournalEntries', JSON.stringify(entries));
    } catch (e) {
        console.error("Error saving journal entries to localStorage:", e);
        // Provide user feedback about the error if possible
        const feedbackEl = getById('journal-feedback'); // Assuming feedback element exists
        if (feedbackEl) showFeedback(feedbackEl, 'Error saving entry. Browser storage might be full or disabled.', 'error', 5000);
    }
}

function renderPatientJournal() {
    const listEl = getById('journal-entries-list');
    if (!listEl) return console.error("Journal entries list element (#journal-entries-list) not found.");
    const listContainer = listEl.closest('#journal-entries-list-container'); // Find the container for placeholder logic
    if (!listContainer) return console.error("Journal entries container element not found.");

    const entries = getJournalEntries(); // Get sorted entries

    // Use renderList utility to display entries
    renderList(listEl, entries, entry => {
        const entryDate = new Date(entry.timestamp);
        // Format date and time nicely
        const formattedDate = entryDate.toLocaleDateString(undefined, { day: '2-digit', month: 'short', year: 'numeric'});
        const formattedTime = entryDate.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });

        // Sanitize content before rendering HTML (Basic: use textContent)
        // Create elements programmatically for safety rather than using innerHTML directly with user content
        const entryContentDiv = document.createElement('div');
        entryContentDiv.className = 'entry-content';
        entryContentDiv.textContent = entry.text; // Safely set text content

        return `
        <li class="data-list-item">
            ${entryContentDiv.outerHTML} <!-- Use the safely created div -->
            <div class="entry-meta">
                <span class="entry-date">${formattedDate}</span>
                <span class="entry-time">${formattedTime}</span>
            </div>
        </li>`;
        },
        '#journal-entries-list .list-placeholder', // Selector for the placeholder within the list
        null // No specific skeleton loader for journal entries needed here
    );

     // Handle placeholder visibility after rendering list
     const journalPlaceholder = listContainer.querySelector('#journal-entries-list .list-placeholder');
     if (journalPlaceholder) {
         const hasEntries = entries.length > 0;
         toggleClass(journalPlaceholder, 'hidden', hasEntries); // Hide if entries exist
         if (!hasEntries) setText(journalPlaceholder, "No journal entries yet. Use the form above to add notes."); // Set placeholder text
     }
}

function handleSaveJournalEntry(event) {
    event.preventDefault(); // Prevent form submission
    const textarea = getById('journal-entry-textarea');
    const feedbackEl = getById('journal-feedback');
    const saveButton = getById('save-journal-entry-btn'); // Assuming button has this ID
    if (!textarea || !feedbackEl || !saveButton) return console.error("Journal form elements missing.");

    const text = textarea.value.trim();
    removeClass(textarea, 'invalid'); // Reset any previous validation state

    if (!text) {
        showFeedback(feedbackEl, 'Please enter some text for your journal entry.', 'error');
        addClass(textarea, 'invalid'); // Mark textarea as invalid
        textarea.focus(); // Focus the textarea
        return; // Stop processing
    }

    showButtonLoading(saveButton); // Show loading state on button

    // Simulate async save (replace with actual API call if needed)
    setTimeout(() => {
        try {
            const newEntry = {
                id: `journal${Date.now()}${Math.random().toString(16).slice(2)}`, // Generate a simple unique ID
                text: text, // Store the raw text
                timestamp: Date.now() // Record the time saved
            };
            const entries = getJournalEntries(); // Get current entries
            entries.unshift(newEntry); // Add the new entry to the beginning (newest first)
            saveJournalEntries(entries); // Save updated entries to localStorage
            renderPatientJournal(); // Re-render the list to show the new entry
            textarea.value = ''; // Clear the textarea
            showFeedback(feedbackEl, 'Journal entry saved successfully!', 'success'); // Show success message
        } catch(e) {
            // Error saving handled within saveJournalEntries, log here just in case
            console.error("Caught error during journal save process:", e);
            // Feedback is shown by saveJournalEntries on failure
        } finally {
            hideButtonLoading(saveButton); // Hide loading state regardless of success/failure
        }
    }, 300); // Simulate 300ms delay
}

function handleClearJournal() {
    const feedbackEl = getById('journal-feedback'); // Get feedback element for messages
    // Use confirmation modal before deleting
    showConfirmationModal('Are you sure you want to delete all your journal entries? This action cannot be undone.', () => {
        try {
            saveJournalEntries([]); // Save an empty array to clear entries
            renderPatientJournal(); // Re-render the now empty list
             if (feedbackEl) showFeedback(feedbackEl, 'All journal entries have been cleared.', 'info'); // Show confirmation message
        } catch (e) {
            console.error("Error clearing journal entries:", e);
             if (feedbackEl) showFeedback(feedbackEl, 'Failed to clear journal entries. Please try again.', 'error'); // Show error message
        }
    });
}

// --- Patient Dashboard Event Listener Setup ---
function setupPatientDashboardEventListeners() {
    console.log("Setting up Patient Dashboard event listeners...");

    // Visit Sorting Buttons
    qsa('#last-visits-card .sort-btn').forEach(btn => {
         if (!btn.hasVisitSortListener) { // Prevent adding multiple listeners
            btn.addEventListener('click', handleVisitSortClick);
            btn.hasVisitSortListener = true; // Mark as listener added
         }
    });

    // Chart Type Toggle Button
    const chartToggleBtn = getById('toggle-chart-type-btn');
    if (chartToggleBtn && !chartToggleBtn.hasChartToggleListener) {
         chartToggleBtn.addEventListener('click', handleChartToggleClick);
         chartToggleBtn.hasChartToggleListener = true;
         // Set initial button state based on currentChartType
         const isLine = currentChartType === 'line';
         const icon = chartToggleBtn.querySelector('i');
         const text = chartToggleBtn.querySelector('.chart-type-text');
         if(icon) icon.className = isLine ? 'fas fa-chart-bar' : 'fas fa-chart-line';
         if(text) setText(text, isLine ? 'View Bar Chart' : 'View Line Chart');
         chartToggleBtn.setAttribute('data-tooltip', isLine ? 'Switch to Bar Chart' : 'Switch to Line Chart');
    } else if (!chartToggleBtn) console.warn("Chart toggle button not found.");

    // --- Placeholder / Implemented Feature Listeners ---
    // **Schedule New Appointment Link** (Now Functional)
    const scheduleNewLink = qs('#upcoming-appointments-card .action-link');
    if (scheduleNewLink && !scheduleNewLink.hasScheduleListener) {
        scheduleNewLink.addEventListener('click', (e) => {
            e.preventDefault();
            handleScheduleNewAppointment(); // Call the new handler function
        });
        scheduleNewLink.hasScheduleListener = true;
    } else if (!scheduleNewLink) console.warn("Schedule new appointment link not found.");

    // *** CHANGE START: Updated "View All Reports" Listener ***
    const viewReportsLink = qs('#health-graphs-card .view-more-link');
    if (viewReportsLink && !viewReportsLink.hasReportListener) {
        viewReportsLink.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("View All Reports clicked!");
            // Show the report modal instead of feedback
            showReportModal();
        });
        viewReportsLink.hasReportListener = true;
    } else if (!viewReportsLink) console.warn("View all reports link not found.");
    // *** CHANGE END ***

    // Journal Form Submission
    const journalForm = getById('patient-journal-form');
    if (journalForm && !journalForm.hasJournalSubmitListener) {
        journalForm.addEventListener('submit', handleSaveJournalEntry);
        journalForm.hasJournalSubmitListener = true;
    } else if(!journalForm) console.warn("Patient journal form not found.");

    // Clear Journal Button
    const clearJournalBtn = getById('clear-journal-btn');
    if (clearJournalBtn && !clearJournalBtn.hasClearJournalListener) {
        clearJournalBtn.addEventListener('click', handleClearJournal);
        clearJournalBtn.hasClearJournalListener = true;
    } else if (!clearJournalBtn) console.warn("Clear journal button not found.");

    // Note: Appointment completion toggle listeners are added dynamically in renderUpcomingAppointmentsList

    console.log("Patient Dashboard event listeners registered.");
}

function handleVisitSortClick(e) {
    const button = e.currentTarget;
    const newSort = button?.dataset?.sort; // Get the sort type from data attribute
    // Exit if no sort type or if it's the same as the current sort
    if (!newSort || newSort === currentVisitSort) return;

    currentVisitSort = newSort; // Update the current sort state
    // Update active button styling
    qsa('#last-visits-card .sort-btn.active').forEach(b => removeClass(b, 'active'));
    addClass(button, 'active');
    // Re-render the list with the new sort order applied
    renderPatientVisitsList();
}

async function handleChartToggleClick() {
     const chartToggleBtn = getById('toggle-chart-type-btn');
     // Exit if button or Chart library is not available
     if (!chartToggleBtn || typeof Chart === 'undefined') return;

    // Toggle the chart type state
    currentChartType = currentChartType === 'line' ? 'bar' : 'line';
    try {
        // Re-render the chart with the new type
        await renderPatientChart('patientChart', currentChartType);
        // Update button appearance AFTER chart renders successfully
        const isLine = currentChartType === 'line';
        const icon = chartToggleBtn.querySelector('i');
        const text = chartToggleBtn.querySelector('.chart-type-text');
        // Update icon, text, tooltip, and ARIA label
        if (icon) icon.className = isLine ? 'fas fa-chart-bar' : 'fas fa-chart-line';
        if (text) setText(text, isLine ? 'View Bar Chart' : 'View Line Chart');
        chartToggleBtn.setAttribute('data-tooltip', isLine ? 'Switch to Bar Chart' : 'Switch to Line Chart');
        chartToggleBtn.setAttribute('aria-label', isLine ? 'Switch to Bar Chart' : 'Switch to Line Chart');

    } catch(e) {
        console.error("Failed to re-render chart after type toggle:", e);
        // Optionally show an error message to the user using showFeedback
        const feedbackEl = getById('graph-feedback'); // Use the graph feedback area
        if (feedbackEl) showFeedback(feedbackEl, 'Error switching chart type.', 'error');
    }
}

// --- Handler for Scheduling a New Appointment ---
function handleScheduleNewAppointment() {
    if (!currentPatientData) return;

    const doctorName = doctorsDB.find(d => d.doctorId === currentPatientData.assignedDoctorId)?.name ?? "Your Doctor";

    showConfirmationModal(`Schedule a new (placeholder) appointment with ${doctorName} for next week?`, async () => {
        console.log("Scheduling placeholder appointment...");
        const feedbackEl = getById('appointments-list')?.closest('.card-content')?.querySelector('.feedback-message'); // Find a suitable feedback location
        const addButton = qs('#upcoming-appointments-card .action-link'); // The link itself can act as button visually

        await simulateNetworkDelay(400);

        try {
            const appointmentDate = new Date();
            appointmentDate.setDate(appointmentDate.getDate() + 7 + Math.floor(Math.random() * 7)); // 7-13 days from now
            const dateStr = appointmentDate.toISOString().split('T')[0];
            const hour = 10 + Math.floor(Math.random() * 6); // 10 AM to 3 PM
            const timeStr = `${String(hour).padStart(2, '0')}:00`; // On the hour
            const location = "Main Clinic (Scheduled via Portal)";
            const appointmentId = `appt${Date.now()}${Math.random().toString(16).slice(2)}`;

            const newAppt = { id: appointmentId, date: dateStr, time: timeStr, doctorName: doctorName, location: location };

            // Add to patient data in memory
            currentPatientData.upcomingAppointments.push(newAppt);
            // Re-sort the appointments list (important!)
            currentPatientData.upcomingAppointments.sort((a, b) => new Date(`${a.date}T${a.time ?? '00:00'}:00`) - new Date(`${b.date}T${b.time ?? '00:00'}:00`));

            // Re-render the list UI to show the new appointment
            renderUpcomingAppointmentsList();

            if (feedbackEl) {
                showFeedback(feedbackEl, `Placeholder appointment scheduled for ${dateStr} at ${timeStr}.`, 'success', 5000);
                // removeClass(feedbackEl, 'hidden'); // showFeedback handles visibility
            } else {
                alert(`Placeholder appointment scheduled for ${dateStr} at ${timeStr}.`); // Fallback alert
            }

        } catch (error) {
             console.error("Error simulating appointment schedule:", error);
             if (feedbackEl) showFeedback(feedbackEl, "Failed to schedule appointment.", 'error');
             else alert("Failed to schedule appointment.");
        } finally {
             // No button loading state to hide for this link
        }
    });
}


// --- Shared Graph Rendering ---
async function renderPatientChart(canvasId = 'patientChart', chartType = 'line') {
    const canvas = getById(canvasId);
    const errorMessageEl = getById('graph-error-message'); // Error message element
    const loadingMessageEl = getById('graph-loading-message'); // Loading message element
    const feedbackEl = getById('graph-feedback'); // General feedback area

    // Clear previous feedback
    if(feedbackEl) { setText(feedbackEl, ''); addClass(feedbackEl, 'hidden'); }

    if (!canvas) {
        console.error(`Canvas element '${canvasId}' not found.`);
        if (loadingMessageEl) addClass(loadingMessageEl, 'hidden');
        if (errorMessageEl) {
             setText(errorMessageEl.querySelector('p') ?? errorMessageEl, `Graph canvas element not found. Cannot display chart.`);
             removeClass(errorMessageEl, 'hidden');
        }
        return;
    }

    if (!canvas.getContext) {
         console.error(`Canvas '${canvasId}' does not support getContext.`);
         if (loadingMessageEl) addClass(loadingMessageEl, 'hidden');
         if (errorMessageEl) {
             setText(errorMessageEl.querySelector('p') ?? errorMessageEl, `Cannot draw graph. Your browser might be outdated.`);
             removeClass(errorMessageEl, 'hidden');
         }
         return;
     }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
         console.error(`Could not get 2D context for canvas '${canvasId}'.`);
         if (loadingMessageEl) addClass(loadingMessageEl, 'hidden');
          if (errorMessageEl) {
             setText(errorMessageEl.querySelector('p') ?? errorMessageEl, `Error initializing the graph drawing context.`);
             removeClass(errorMessageEl, 'hidden');
         }
         return;
    }

    // Reset UI state before loading/rendering
    if(loadingMessageEl) removeClass(loadingMessageEl, 'hidden');
    if(errorMessageEl) addClass(errorMessageEl, 'hidden');
    addClass(canvas, 'hidden'); // Hide canvas during load/re-render

    // Destroy previous chart instance if it exists
    if (patientChartInstance) {
        patientChartInstance.destroy();
        patientChartInstance = null;
    }

    await simulateNetworkDelay(600); // Simulate data fetching/processing

    try {
        // Check if Chart.js library is loaded properly
        if (typeof Chart === 'undefined' || typeof Chart !== 'function') {
             throw new Error("Chart.js library is not loaded or failed to initialize.");
        }
        const ChartJS = window.Chart; // Access Chart constructor

        // Basic check for color helper (might need refinement for specific Chart.js versions)
        if (!ChartJS.helpers || typeof ChartJS.helpers.color !== 'function') {
            console.warn("Chart.js helpers.color might be missing or changed. Using basic color conversion.");
        }

        // Generate mock data for the chart
        const { labels, dataPoints } = generateMockChartData();
        if (!labels || !dataPoints || labels.length === 0) {
             throw new Error("Failed to generate valid data for the graph.");
        }

        // Get theme-dependent colors from CSS variables
        const rootStyle = getComputedStyle(document.documentElement);
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const accentColor = rootStyle.getPropertyValue(isDark ? '--accent-color-dark' : '--accent-color-light').trim() || '#8A2BE2'; // Fallback Purple
        const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
        const tickColor = isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)';
        const tooltipBgColor = isDark ? 'rgba(31, 41, 55, 0.9)' : 'rgba(255, 255, 255, 0.9)';
        const tooltipTitleColor = isDark ? '#F3F4F6' : '#1F2937';
        const tooltipBodyColor = isDark ? '#D1D5DB' : '#4B5563';
        const pointBorderColor = rootStyle.getPropertyValue(isDark ? '--background-secondary-dark' : '--background-secondary-light').trim() || (isDark ? '#2d3748' : '#ffffff');

        // Helper for color transparency (with fallback)
        const getRgbaString = (color, alpha) => {
             try {
                // Try Chart.js helper first if available
                if (ChartJS.helpers && typeof ChartJS.helpers.color === 'function') {
                    return ChartJS.helpers.color(color).alpha(alpha).rgbString();
                }
            } catch (e) { /* Ignore helper error, use fallback */ }

            // Basic fallback for hex/rgb(a) - assumes valid CSS color input
            let r=0, g=0, b=0;
            if (color.startsWith('#')) { // Handle hex
                const bigint = parseInt(color.slice(1), 16);
                r = (bigint >> 16) & 255; g = (bigint >> 8) & 255; b = bigint & 255;
            } else if (color.startsWith('rgb')) { // Handle rgb/rgba
                const parts = color.match(/\d+/g);
                if (parts && parts.length >= 3) { r = parseInt(parts[0]); g = parseInt(parts[1]); b = parseInt(parts[2]); }
            } else { // Unsupported format, fallback needed
                console.warn(`Unsupported color format "${color}" for transparency fallback. Using accent color base.`);
                 // Attempt to use accent color components if possible, else hardcoded purple
                 const accentHue = rootStyle.getPropertyValue(isDark ? '--accent-hue-dark' : '--accent-hue-light').trim();
                 if (accentHue) return `hsla(${accentHue}, 90%, 70%, ${alpha})`; // Attempt HSL conversion
                 else return `rgba(138, 43, 226, ${alpha})`; // Hardcoded Purple fallback
            }
            return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        };
        const accentColorTransparent = getRgbaString(accentColor, 0.1); // For line chart fill

        // Create the new Chart instance
        patientChartInstance = new Chart(ctx, {
            type: chartType, // 'line' or 'bar'
            data: {
                labels: labels,
                datasets: [{
                    label: 'Wellness Score', // Used in tooltip fallback
                    data: dataPoints,
                    fill: chartType === 'line', // Fill area only for line charts
                    borderColor: accentColor,
                    backgroundColor: chartType === 'bar' ? accentColor : accentColorTransparent, // Solid for bar, transparent for line fill
                    tension: chartType === 'line' ? 0.4 : 0, // Curve line charts, no tension for bars
                    pointBackgroundColor: accentColor,
                    pointBorderColor: pointBorderColor, // Contrasting border for points
                    pointBorderWidth: 1,
                    pointRadius: chartType === 'line' ? 4 : 0, // Show points only on line charts
                    pointHoverRadius: chartType === 'line' ? 7 : 0, // Larger hover radius for line points
                    pointHoverBackgroundColor: accentColor,
                    pointHoverBorderColor: pointBorderColor,
                    pointHoverBorderWidth: 2,
                    borderRadius: chartType === 'bar' ? 4 : 0, // Rounded corners for bars
                    borderSkipped: false, // Render full bar borders if needed
                }]
            },
            options: {
                responsive: true, // Make chart responsive
                maintainAspectRatio: false, // Allow chart to fill container height better
                scales: {
                    y: {
                        beginAtZero: false, // Don't force axis to start at 0 unless data is near 0
                        // Set min/max dynamically based on data for better visualization
                        min: Math.max(0, Math.min(...dataPoints) - 5), // Sensible min, ensure not negative
                        max: Math.max(50, Math.max(...dataPoints) + 5), // Sensible max, ensure at least 50 if data is low
                        grid: { color: gridColor, drawBorder: false }, // Grid line styling
                        ticks: { color: tickColor, padding: 10, precision: 0 } // Y-axis labels (ticks)
                    },
                    x: {
                        grid: { display: false }, // Hide vertical grid lines for cleaner look
                        ticks: { color: tickColor, padding: 10 } // X-axis labels (ticks)
                    }
                },
                plugins: {
                    legend: { display: false }, // Hide the default legend
                    tooltip: { // Customize tooltips
                         enabled: true,
                         backgroundColor: tooltipBgColor,
                         titleColor: tooltipTitleColor,
                         bodyColor: tooltipBodyColor,
                         titleFont: { weight: 'bold', family: "'Poppins', sans-serif" },
                         bodyFont: { family: "'Poppins', sans-serif" },
                         padding: 12, cornerRadius: 6, boxPadding: 5,
                         displayColors: false, // Don't show the color box in tooltip
                         borderColor: gridColor, borderWidth: 1,
                         caretPadding: 10, // Space between point/bar and tooltip
                         callbacks: {
                             // Customize tooltip label text
                             label: context => `Score: ${context.parsed.y}`
                         }
                     }
                },
                interaction: {
                    mode: 'index', // Show tooltips for all datasets at that x-index on hover
                    intersect: false // Trigger tooltip even if not directly hovering over the point/bar
                },
                hover: {
                    mode: 'nearest', // Highlight the item closest to the cursor
                    intersect: true // Only highlight when the cursor is directly over the item
                }
            }
        });

        // Success: Hide loading message, show canvas
        if(loadingMessageEl) addClass(loadingMessageEl, 'hidden');
        removeClass(canvas, 'hidden');
        console.log("Patient chart rendered successfully.");

    } catch (error) {
         // Handle errors during chart rendering
         console.error("Chart rendering failed:", error);
         if(loadingMessageEl) addClass(loadingMessageEl, 'hidden'); // Hide loading
         if (errorMessageEl) {
            // Display the error message
            setText(errorMessageEl.querySelector('p') ?? errorMessageEl, `Error loading graph: ${error.message}`);
            removeClass(errorMessageEl, 'hidden');
         }
         addClass(canvas, 'hidden'); // Ensure canvas remains hidden on error
    }
}


function generateMockChartData(numPoints = 7) {
    const labels = [];
    const dataPoints = [];
    const today = new Date();
    for (let i = numPoints - 1; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i); // Go back i days
        // Format date as 'Mon DD' (e.g., 'Aug 23')
        labels.push(date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }));
        // Generate scores roughly between 65 and 95, simulating progress/fluctuations
        dataPoints.push(Math.floor(Math.random() * 31) + 65);
    }
    return { labels, dataPoints };
}


// ------------------------------------
// --- 8. Doctor Dashboard Logic   ---
// ------------------------------------

let currentDoctorData = null;
let assignedPatients = []; // All patients assigned to this doctor
let displayedPatients = []; // Patients currently shown after filtering/sorting
let selectedPatientId = null; // ID of the patient whose details are shown
let currentPatientSort = 'name-asc'; // Default sort order
let doctorSearchDebounceTimer = null; // For debouncing search input

async function initDoctorDashboard() {
    console.log("--- Initializing Doctor Dashboard ---");

    const auth = checkAuth('doctor');
    if (!auth) {
        console.log("Doctor dashboard init failed: Auth check failed or redirected.");
        return;
    }
    console.log(`Doctor authenticated: ${auth.userName} (ID: ${auth.userId})`);

    currentDoctorData = doctorsDB.find(d => d.doctorId === auth.userId);
    if (!currentDoctorData) {
        console.error(`FATAL: Doctor data not found for ID: ${auth.userId}. Redirecting.`);
        forceRedirectToLogin("Doctor data missing");
        return;
    }
    console.log(`Doctor data loaded for: ${currentDoctorData.name}`);

    // Fetch assigned patients from the global DB
    assignedPatients = patientsDB.filter(p => p.assignedDoctorId === currentDoctorData.doctorId);
    displayedPatients = [...assignedPatients]; // Initially display all assigned
    console.log(`Found ${assignedPatients.length} patients assigned to Dr. ${currentDoctorData.name}.`);

    const elements = getDoctorDashboardElements(); // Get all relevant DOM elements
    if (!elements) {
        console.error("Doctor dashboard initialization failed: Essential elements missing.");
        displayFatalError("Dashboard Error", "Sorry, essential dashboard components could not be loaded.");
        return;
    }

    try {
        // --- Setup Header ---
        if(elements.userNameHeader) setText(elements.userNameHeader, currentDoctorData.name);
        if (elements.logoutBtn && !elements.logoutBtn.hasLogoutListener) {
            elements.logoutBtn.addEventListener('click', logout);
            elements.logoutBtn.hasLogoutListener = true;
        } else if (!elements.logoutBtn) console.warn("Logout button not found.");

        // --- Initial UI State (Show Skeletons/Placeholders) ---
        addClass(elements.patientDetailsContent, 'hidden');
        removeClass(elements.patientDetailsPlaceholder, 'hidden');
        elements.patientDetailsSection?.setAttribute('aria-hidden', 'true'); // Initially hidden semantically
        // Ensure skeletons are visible initially
        if(elements.patientsListSkeleton) removeClass(elements.patientsListSkeleton, 'hidden');
        if(elements.scheduledVisitsSkeleton) removeClass(elements.scheduledVisitsSkeleton, 'hidden');
        // Ensure 'no results' are hidden initially
        if(elements.patientsListNoResults) addClass(elements.patientsListNoResults, 'hidden');
        if(elements.scheduledVisitsNoResults) addClass(elements.scheduledVisitsNoResults, 'hidden');
        // Hide tab skeletons initially
         elements.tabPanes?.forEach(pane => {
            const skeleton = pane.querySelector('.skeleton-loader');
            const noResults = pane.querySelector('.no-results');
            if (skeleton) removeClass(skeleton, 'hidden'); // Should be visible if parent is
            if (noResults) addClass(noResults, 'hidden');
         });


        await simulateNetworkDelay(200); // Short delay for perceived loading

        // --- Populate Content ---
        populateDoctorInfo(elements);
        renderScheduledVisits(elements); // Render schedule based on assigned patients
        applyPatientSortAndFilter(elements, true); // Apply initial sort, don't render list yet
        renderPatientList(elements); // Initial render of sorted/filtered list

        // --- Final UI State (Hide Skeletons) ---
        if(elements.patientsListSkeleton) addClass(elements.patientsListSkeleton, 'hidden');
        if(elements.scheduledVisitsSkeleton) addClass(elements.scheduledVisitsSkeleton, 'hidden');
        // Skeletons within tabs are handled during renderPatientDetails

        // --- Setup Listeners ---
        setupDoctorDashboardEventListeners(elements);

        // Set initial active sort button state visually
        elements.sortButtons?.forEach(btn => removeClass(btn, 'active'));
        const initialSortBtn = elements.patientsListContainer?.closest('.card')?.querySelector(`.sort-btn[data-sort="${currentPatientSort}"]`);
        if(initialSortBtn) addClass(initialSortBtn, 'active');

        console.log("Doctor Dashboard Initialized Successfully.");

    } catch (error) {
        console.error("Error during Doctor Dashboard initialization:", error);
        displayFatalError(
            "Dashboard Error",
            "Sorry, there was a problem loading the doctor dashboard.",
            `Error: ${error.message}`
        );
    }
}

function getDoctorDashboardElements() {
    const elements = {
        logoutBtn: getById('logout-btn'),
        userNameHeader: getById('user-name-header'),
        doctorNameInfo: getById('doctor-name-info'),
        doctorSpecInfo: getById('doctor-specialization-info'),
        doctorIdInfo: getById('doctor-id-info'),
        searchInput: getById('patient-search-input'),
        patientsListContainer: getById('assigned-patients-list'),
        sortButtons: qsa('#assigned-patients-card .sort-btn'), // Get all sort buttons
        scheduledVisitsList: getById('scheduled-visits-list'),
        patientDetailsSection: getById('patient-details-section'),
        patientDetailsPlaceholder: getById('patient-details-placeholder'),
        patientDetailsContent: getById('patient-details-content'),
        closeDetailsBtn: getById('close-patient-details'),
        selectedPatientHeading: getById('selected-patient-heading'),
        selectedPatientName: getById('selected-patient-name'),
        selectedPatientAge: getById('selected-patient-age'),
        selectedPatientGender: getById('selected-patient-gender'),
        selectedPatientIdDisplay: getById('selected-patient-id'),
        tabs: qsa('#patient-details-section .tab-link'), // Get all tab buttons
        tabPanes: qsa('#patient-details-section .tab-pane'), // Get all tab content panes
        historyList: getById('patient-history-list'),
        treatmentsList: getById('patient-treatments-list'), // Visits list
        exercisesList: getById('patient-exercises-list'),
        recommendationsList: getById('patient-recommendations-list'),
        recommendationForm: getById('recommendation-form'),
        recommendationTextarea: getById('recommendation-textarea'),
        recommendationFeedback: getById('recommendation-feedback'),
        addRecommendationBtn: getById('add-recommendation-btn'),
         // Placeholders (safer selectors relative to their lists)
         patientsListSkeleton: qs('#assigned-patients-list .skeleton-loader'),
         patientsListNoResults: qs('#assigned-patients-list .no-results'),
         scheduledVisitsSkeleton: qs('#scheduled-visits-list .skeleton-loader'),
         scheduledVisitsNoResults: qs('#scheduled-visits-list .no-results'),
         // **NEW:** Elements for Log Visit Form
         logVisitForm: getById('log-visit-form'),
         logVisitDateInput: getById('log-visit-date'),
         logVisitReasonInput: getById('log-visit-reason'),
         logVisitNotesTextarea: getById('log-visit-notes'),
         logVisitFeedback: getById('log-visit-feedback'),
         logVisitBtn: getById('log-visit-btn'),
         logVisitPane: getById('log-visit-content'), // The tab pane itself
    };

    // Basic check for critical layout elements
    const criticalElements = [
        elements.patientsListContainer, elements.scheduledVisitsList, elements.patientDetailsSection,
        elements.patientDetailsPlaceholder, elements.patientDetailsContent, elements.tabs, elements.tabPanes,
        elements.historyList, elements.treatmentsList, elements.exercisesList, elements.recommendationsList, // Ensure tab lists exist
        elements.logVisitForm // Check new form exists
    ];
    if (criticalElements.some(el => !el)) {
        console.error("Essential doctor dashboard layout elements are missing! Check HTML IDs.", { missing: criticalElements.map((el, i) => !el ? Object.keys(elements)[i] : null).filter(Boolean) });
        return null; // Indicate failure
    }
    return elements;
}


function populateDoctorInfo(elements) {
    if (!currentDoctorData || !elements) return;
    setText(elements.doctorNameInfo, currentDoctorData.name);
    setText(elements.doctorSpecInfo, currentDoctorData.specialization);
    setText(elements.doctorIdInfo, currentDoctorData.doctorId);
}

function setupDoctorDashboardEventListeners(elements) {
    if (!elements) return;
    console.log("Setting up Doctor Dashboard event listeners...");

    // Search Input (Debounced)
    if (elements.searchInput && !elements.searchInput.hasSearchListener) {
         elements.searchInput.addEventListener('input', handleDebouncedSearch);
         elements.searchInput.hasSearchListener = true;
    } else if (!elements.searchInput) console.warn("Patient search input not found.");

    // Close Details Button
    if (elements.closeDetailsBtn && !elements.closeDetailsBtn.hasCloseListener) {
        elements.closeDetailsBtn.addEventListener('click', handleCloseDetailsClick);
        elements.closeDetailsBtn.hasCloseListener = true;
    } else if (!elements.closeDetailsBtn) console.warn("Close patient details button not found.");

    // Tab Navigation (Click and Keyboard)
    elements.tabs?.forEach(tab => {
        if (!tab.hasTabListeners) {
            tab.addEventListener('click', handleTabClick);
            tab.addEventListener('keydown', handleTabKeydown);
            tab.hasTabListeners = true;
        }
    });

    // Recommendation Form Submission
    if (elements.recommendationForm && !elements.recommendationForm.hasRecSubmitListener) {
         elements.recommendationForm.addEventListener('submit', handleRecommendationSubmit);
         elements.recommendationForm.hasRecSubmitListener = true;
     } else if (!elements.recommendationForm) console.warn("Recommendation form not found.");

     // Sort Buttons Click Handler
     elements.sortButtons?.forEach(btn => {
        if (!btn.hasSortListener) {
            btn.addEventListener('click', handleSortButtonClick);
            btn.hasSortListener = true;
        }
     });

     // **NEW:** Log Visit Form Submission
     if (elements.logVisitForm && !elements.logVisitForm.hasVisitSubmitListener) {
        elements.logVisitForm.addEventListener('submit', handleVisitLogSubmit); // Use specific handler
        elements.logVisitForm.hasVisitSubmitListener = true;
     } else if (!elements.logVisitForm) console.warn("Log visit form not found.");

     // Note: Patient list item click/keydown listeners added dynamically in renderPatientList
     // Note: Schedule item click/keydown listeners added dynamically in renderScheduledVisits

     console.log("Doctor Dashboard event listeners registered.");
}

// Debounced search handler
function handleDebouncedSearch() {
    clearTimeout(doctorSearchDebounceTimer);
    doctorSearchDebounceTimer = setTimeout(() => {
        console.log("Debounced search triggered.");
        const elements = getDoctorDashboardElements(); // Get fresh elements reference
        if(elements) applyPatientSortAndFilter(elements); // Filter and re-render list
    }, 300); // 300ms delay after last input
}

// Event handler wrappers calling main functions with 'elements' context
function handleCloseDetailsClick() { const els = getDoctorDashboardElements(); if(els) hidePatientDetails(els); }
function handleTabClick(event) { const els = getDoctorDashboardElements(); if(els) handleTabSwitch(event.currentTarget, els); }
function handleTabKeydown(event) { const els = getDoctorDashboardElements(); if(els) handleTabKeyboardNav(event, els); }
function handleRecommendationSubmit(event) { event.preventDefault(); const els = getDoctorDashboardElements(); if(els) handleAddRecommendation(els); }
function handleVisitLogSubmit(event) { event.preventDefault(); const els = getDoctorDashboardElements(); if(els) handleAddVisitNote(els); } // New handler
function handleSortButtonClick(event) {
     const button = event.currentTarget;
     const elements = getDoctorDashboardElements();
     const newSort = button?.dataset?.sort;
     if (!newSort || !elements || newSort === currentPatientSort) return;

     currentPatientSort = newSort;
     // Update button active states visually
     elements.sortButtons.forEach(b => removeClass(b, 'active'));
     addClass(button, 'active');
     // Apply filter/sort and re-render the patient list
     applyPatientSortAndFilter(elements);
}

function applyPatientSortAndFilter(elements, isInitialLoad = false) {
    if (!elements || !assignedPatients) {
        console.error("applyPatientSortAndFilter: Missing elements or assignedPatients data.");
        return; // Exit if required data is missing
    }

    // --- Continue from here ---
    const searchTerm = elements.searchInput?.value.toLowerCase().trim() ?? '';
    console.log(`Filtering/Sorting patients. Search: "${searchTerm}", Sort: ${currentPatientSort}`);

    // 1. Filter based on search term (name or patient ID)
    let filteredPatients = assignedPatients.filter(p =>
        p && ( // Ensure patient object exists and has properties
            (p.name && p.name.toLowerCase().includes(searchTerm)) ||
            (p.patientId && p.patientId.toLowerCase().includes(searchTerm))
        )
    );

    // 2. Sort the filtered results based on currentPatientSort
    // Make a copy before sorting to avoid modifying the filtered array directly if needed elsewhere (though assigned to displayedPatients anyway)
    displayedPatients = [...filteredPatients].sort((a, b) => {
        // Handle potential null/undefined values during comparison
        const nameA = a?.name ?? '';
        const nameB = b?.name ?? '';
        const ageA = a?.age ?? 0;
        const ageB = b?.age ?? 0;

        switch (currentPatientSort) {
            case 'name-asc':
                return nameA.localeCompare(nameB);
            case 'name-desc':
                return nameB.localeCompare(nameA);
            case 'age-asc':
                return ageA - ageB;
            case 'age-desc':
                return ageB - ageA;
            default:
                return 0; // Default: no specific sort order / maintain original filter order
        }
    });
    console.log(`Found ${displayedPatients.length} patients after filter/sort.`);

    // 3. Re-render the list unless it's the initial load
    // (Initial load calls renderPatientList separately after this)
    if (!isInitialLoad) {
       renderPatientList(elements);
    }

    // 4. Hide details panel if the currently selected patient is no longer in the displayed list
    if (selectedPatientId && !displayedPatients.some(p => p?.patientId === selectedPatientId)) {
        console.log(`Selected patient ${selectedPatientId} was filtered out or removed, hiding details panel.`);
        hidePatientDetails(elements);
        // selectedPatientId remains the same until a new one is explicitly selected,
        // but the UI for it is hidden.
    }
} // --- End of applyPatientSortAndFilter function ---

// --- Previous function (applyPatientSortAndFilter) ends here ---

function renderPatientList(elements) {
    if (!elements?.patientsListContainer) return console.error("Patient list container not found.");
    console.log(`Rendering patient list: ${displayedPatients.length} items.`);

    // Use renderList utility
    renderList(elements.patientsListContainer, displayedPatients, p => `
        <div class="patient-list-item ${p.patientId === selectedPatientId ? 'selected' : ''}"
             data-patient-id="${p.patientId}"
             role="button" tabindex="0" aria-label="Select patient ${p.name ?? 'Unknown'}">
             <div> <!-- Wrapper for name/age for better flex control -->
                 <span class="patient-name">${p.name ?? 'Unknown Name'}</span>
                 <span class="patient-age">${p.age ?? 'N/A'} yrs</span>
             </div>
            <i class="fas fa-chevron-right arrow-icon" aria-hidden="true"></i> <!-- Visual indicator -->
        </div>
    `,
    '#assigned-patients-list .no-results', // Use more specific selectors for placeholders
    '#assigned-patients-list .skeleton-loader'
    );

    // Attach click and keydown listeners to newly rendered items
    elements.patientsListContainer.querySelectorAll('.patient-list-item').forEach(item => {
        // Remove previous listeners first to prevent duplicates if re-rendering
        item.removeEventListener('click', handlePatientItemClick);
        item.removeEventListener('keydown', handlePatientItemKeydown);
        // Add new listeners
        item.addEventListener('click', handlePatientItemClick);
        item.addEventListener('keydown', handlePatientItemKeydown);
    });
}

// Patient list item click/keydown handlers (need access to scope with `elements`)
function handlePatientItemClick(event) {
    const patientId = event.currentTarget?.dataset.patientId;
    const elements = getDoctorDashboardElements(); // Get fresh elements reference
    if (!patientId || !elements) return;

    const isCurrentlySelected = patientId === selectedPatientId;
    // Check if details section is currently visible (using aria-hidden)
    const isDetailsVisible = elements.patientDetailsSection && elements.patientDetailsSection.getAttribute('aria-hidden') === 'false';

    // Behavior depends on screen size
    if (window.innerWidth >= 1024) { // Large screen (details usually sticky)
        if (!isCurrentlySelected) {
             renderPatientDetails(patientId, elements); // Load details for the new patient
        }
        // Clicking the already selected patient on large screen does nothing special here
    }
    else { // Smaller screen (details likely overlay or appear below)
         if (isCurrentlySelected && isDetailsVisible) {
              hidePatientDetails(elements); // Clicking selected patient again hides details
         } else {
              renderPatientDetails(patientId, elements); // Show/load details for the clicked patient
         }
    }
}
function handlePatientItemKeydown(event) {
     // Trigger click logic on Enter or Space key press for accessibility
     if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault(); // Prevent default spacebar scroll
          handlePatientItemClick(event); // Trigger the same logic as a click
     }
}

async function renderPatientDetails(patientId, elements) {
    if (!patientId || !elements) return;
    const patient = patientsDB.find(p => p.patientId === patientId);
    if (!patient) {
        console.error(`Cannot find patient data for ID: ${patientId}`);
        // Show feedback using a stable element like recommendation feedback area
        if (elements.recommendationFeedback) {
            showFeedback(elements.recommendationFeedback, `Error: Could not load details for patient ID ${patientId}.`, 'error', 5000);
        }
        hidePatientDetails(elements); // Attempt to hide the potentially broken details section
        return;
    }

    console.log(`Rendering details for patient: ${patient.name} (${patientId})`);
    selectedPatientId = patientId; // Update the global selected patient ID

    renderPatientList(elements); // Re-render patient list immediately to update highlighting

    // Check if essential details section elements exist
    if (!elements.patientDetailsSection || !elements.patientDetailsPlaceholder || !elements.patientDetailsContent) {
        return console.error("Patient details section elements are missing in the DOM.");
    }

    // Show Details Section & Content, Hide Placeholder
    removeClass(elements.patientDetailsSection, 'hidden'); // Remove basic hidden if present
    elements.patientDetailsSection.setAttribute('aria-hidden', 'false'); // Make accessible
    addClass(elements.patientDetailsPlaceholder, 'hidden'); // Hide the 'Select a patient' placeholder
    removeClass(elements.patientDetailsContent, 'hidden'); // Show the main content area for details

    // Show Loading Skeletons in Tab Panes before fetching/rendering data
    elements.tabPanes?.forEach(pane => {
        const skeleton = pane.querySelector('.skeleton-loader');
        const noResults = pane.querySelector('.no-results'); // Placeholder for empty data
        const list = pane.querySelector('.data-list, ul'); // Find the list within the pane
        // Clear previous items (but not placeholders/skeletons)
        if (list) {
            const childrenToRemove = [];
            for (const child of list.children) {
                 if (!hasClass(child, 'list-placeholder') && !hasClass(child, 'skeleton-loader')) {
                     childrenToRemove.push(child);
                 }
            }
            childrenToRemove.forEach(el => el.remove());
        }
        if (skeleton) removeClass(skeleton, 'hidden'); // Show skeleton loader
        if (noResults) addClass(noResults, 'hidden'); // Hide 'no results' message
    });

    // Update Basic Patient Info Display at the top of the details section
    setText(elements.selectedPatientHeading, `Details: ${patient.name ?? 'N/A'}`);
    setText(elements.selectedPatientName, patient.name ?? 'N/A');
    setText(elements.selectedPatientAge, `Age: ${patient.age ?? 'N/A'}`);
    setText(elements.selectedPatientGender, `Gender: ${patient.gender ?? 'N/A'}`);
    setText(elements.selectedPatientIdDisplay, `ID: ${patient.patientId}`);

    try {
        await simulateNetworkDelay(400); // Simulate fetching detailed data

        // Render Content for Each Tab
        // History Tab
        if(elements.historyList) renderList(elements.historyList, patient.medicalHistory ?? [], item => `<li class="data-list-item">${item}</li>`, '#history-content .no-results', '#history-content .skeleton-loader');
        // Visits/Treatments Tab
        if(elements.treatmentsList) renderList(elements.treatmentsList, patient.lastVisits ?? [], visit => `
            <li class="data-list-item hover-effect">
                <p><span class="list-label">Date:</span> ${visit.date ?? 'N/A'}</p>
                <p><span class="list-label">Doctor:</span> ${visit.doctorName ?? 'N/A'}</p>
                <p><span class="list-label">Reason:</span> ${visit.diagnosis ?? 'N/A'}</p>
                ${visit.notes ? `<p><span class="list-label">Notes:</span> ${visit.notes}</p>` : ''}
            </li>`, '#treatments-content .no-results', '#treatments-content .skeleton-loader');
        // Exercises Tab
        if(elements.exercisesList) renderList(elements.exercisesList, patient.prescribedTherapies ?? [], therapy => `
            <li class="data-list-item hover-effect">
                <p><span class="list-label">Type:</span> ${therapy.type ?? 'N/A'}</p>
                <p><span class="list-label">Frequency:</span> ${therapy.frequency ?? 'N/A'}</p>
                <p><span class="list-label">Duration:</span> ${therapy.duration ?? 'N/A'}</p>
            </li>`, '#exercises-content .no-results', '#exercises-content .skeleton-loader');
        // Recommendations/Notes Tab
        if(elements.recommendationsList) renderList(elements.recommendationsList, patient.recommendations ?? [], rec => {
             // Basic sanitization: Display recommendation text safely
             const safeRec = (rec || '').replace(/</g, "<").replace(/>/g, ">");
             return `<li class="data-list-item">${safeRec}</li>`;
        }, '#recommendations-content .no-results', '#recommendations-content .skeleton-loader');
        // Log Visit tab doesn't need initial list rendering here

    } catch (renderError) {
        console.error("Error rendering patient details tabs:", renderError);
        setText(elements.selectedPatientHeading, `Error Loading Details`);
        // Optionally show a specific error message within the details area
        if(elements.patientDetailsPlaceholder) { // Reuse placeholder area for error
            removeClass(elements.patientDetailsPlaceholder, 'hidden');
            addClass(elements.patientDetailsContent, 'hidden');
            setText(elements.patientDetailsPlaceholder, "Error loading patient details. Please try selecting again.");
        }
    } finally {
        // Hide Tab Skeletons AFTER rendering attempt (success or fail)
        elements.tabPanes?.forEach(pane => {
            const skeleton = pane.querySelector('.skeleton-loader');
            if(skeleton) addClass(skeleton, 'hidden');
        });
    }

    // Reset Recommendation Form state
    if (elements.recommendationTextarea) elements.recommendationTextarea.value = '';
    if (elements.recommendationFeedback) {
        setText(elements.recommendationFeedback, '');
        addClass(elements.recommendationFeedback, 'hidden');
    }
    if (elements.recommendationTextarea) removeClass(elements.recommendationTextarea, 'invalid');
    if (elements.addRecommendationBtn) hideButtonLoading(elements.addRecommendationBtn);

    // **NEW:** Reset Log Visit Form state
    if (elements.logVisitForm) elements.logVisitForm.reset(); // Reset the form fields
     if (elements.logVisitDateInput) elements.logVisitDateInput.valueAsDate = new Date(); // Default date to today
    if (elements.logVisitFeedback) {
         setText(elements.logVisitFeedback, '');
         addClass(elements.logVisitFeedback, 'hidden');
    }
    if (elements.logVisitReasonInput) removeClass(elements.logVisitReasonInput, 'invalid');
    if (elements.logVisitNotesTextarea) removeClass(elements.logVisitNotesTextarea, 'invalid');
    if (elements.logVisitBtn) hideButtonLoading(elements.logVisitBtn);


    // Activate the first tab ('History') by default when loading new patient details
    if (elements.tabs?.length > 0) {
        handleTabSwitch(elements.tabs[0], elements);
    }

    // Focus management: Move focus to the details heading for screen reader announcement
    elements.selectedPatientHeading?.focus();

     // Scroll details section into view on smaller screens if it wasn't already visible
     if (window.innerWidth < 1024) {
         elements.patientDetailsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
     }
}


function hidePatientDetails(elements) {
     // Only proceed if details are currently shown (selectedPatientId is not null)
     if (!selectedPatientId || !elements?.patientDetailsSection) return;
     console.log("Hiding patient details section.");
     const previouslySelected = selectedPatientId;
     selectedPatientId = null; // Clear the selected patient ID

     // Hide content, show placeholder, update ARIA state
     addClass(elements.patientDetailsContent, 'hidden');
     removeClass(elements.patientDetailsPlaceholder, 'hidden');
     elements.patientDetailsSection.setAttribute('aria-hidden', 'true'); // Hide from accessibility tree

     // Update patient list highlighting: Remove 'selected' class from the previously selected item
     if (previouslySelected) {
        const selectedItem = elements.patientsListContainer?.querySelector(`.patient-list-item[data-patient-id="${previouslySelected}"]`);
        if (selectedItem) removeClass(selectedItem, 'selected');
     }

     // Optional: On smaller screens, move focus back to a logical place like the search input
     if (window.innerWidth < 1024) {
         elements.searchInput?.focus();
     }
}

function renderScheduledVisits(elements) {
    if (!elements?.scheduledVisitsList || !assignedPatients) return console.error("Scheduled visits list or assigned patients data not found.");

    const today = new Date().setHours(0,0,0,0); // Start of today

    // Get all upcoming appointments ONLY for patients assigned to the CURRENT doctor
    let allUpcoming = assignedPatients
        .flatMap(p => (p?.upcomingAppointments ?? []).map(appt => ({ ...appt, patientName: p.name, patientId: p.patientId }))) // Add patient name/ID to each appointment
        .filter(a => a.date && new Date(a.date).setHours(0,0,0,0) >= today); // Filter for today or future dates

    // Sort by date and then time
    allUpcoming.sort((a, b) => new Date(`${a.date}T${a.time ?? '00:00'}:00`) - new Date(`${b.date}T${b.time ?? '00:00'}:00`));

    console.log(`Rendering ${allUpcoming.length} upcoming appointments for Dr. ${currentDoctorData?.name}.`);

    // Use renderList utility
    renderList(elements.scheduledVisitsList, allUpcoming, appt => `
        <li class="data-list-item hover-effect schedule-item" data-patient-id="${appt.patientId}"
            role="button" tabindex="0" aria-label="View details for appointment with ${appt.patientName} on ${appt.date}">
            <p><span class="list-label">Date:</span> ${appt.date} | ${appt.time ?? 'N/A'}</p>
            <p>
                <span class="list-label">Patient:</span>
                <!-- Make patient name a link to load their details -->
                <a href="#" class="patient-link" data-patient-id="${appt.patientId}" aria-label="View details for patient ${appt.patientName}">${appt.patientName ?? 'Unknown'}</a>
                <span style="font-size: 0.85em; color: var(--text-muted);"> (ID: ${appt.patientId})</span>
            </p>
            <p><span class="list-label">Location:</span> ${appt.location ?? 'N/A'}</p>
        </li>`,
        '#scheduled-visits-list .no-results', // Specific selectors for placeholders
        '#scheduled-visits-list .skeleton-loader'
    );

     // Attach listeners to newly rendered schedule items AND the patient links within them
     elements.scheduledVisitsList.querySelectorAll('.schedule-item, .patient-link').forEach(item => {
          item.removeEventListener('click', handleScheduleItemClick); // Remove previous listener first
          item.removeEventListener('keydown', handleScheduleItemKeydown);
          item.addEventListener('click', handleScheduleItemClick); // Add new click listener
          item.addEventListener('keydown', handleScheduleItemKeydown); // Add new keydown listener
     });
}

// Handlers for schedule items/links (load patient details on click/enter/space)
function handleScheduleItemClick(e) {
     e.preventDefault(); // Prevent default link behavior if it's an anchor
     e.stopPropagation(); // Prevent event bubbling up if nested (e.g., link inside list item)
     const patientId = e.currentTarget?.dataset.patientId;
     const elements = getDoctorDashboardElements();
     if (patientId && elements) {
         renderPatientDetails(patientId, elements); // Load details for the clicked patient
     }
}
function handleScheduleItemKeydown(event){
     if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault(); // Prevent default action (scrolling, form submission)
          handleScheduleItemClick(event); // Trigger the same action as a click
     }
}

// Tab Switching Logic
function handleTabSwitch(tabToActivate, elements) {
     if (!tabToActivate || !elements?.tabs || !elements.tabPanes) return;
     const targetPaneId = tabToActivate.getAttribute('aria-controls');
     if (!targetPaneId) return console.warn("Tab is missing aria-controls attribute.");

     const targetPane = getById(targetPaneId);
     if (!targetPane) return console.error(`Target tab pane '${targetPaneId}' not found in the DOM.`);

     // Update tab button states (ARIA attributes and 'active' class)
     elements.tabs.forEach(tab => {
        const isTarget = tab === tabToActivate;
        toggleClass(tab, 'active', isTarget); // Visual active state
        tab.setAttribute('aria-selected', String(isTarget)); // ARIA selected state
        tab.setAttribute('tabindex', isTarget ? '0' : '-1'); // Make only active tab focusable in sequence
    });

    // Show/Hide tab content panes using 'hidden' attribute and 'active' class
     elements.tabPanes.forEach(pane => {
         const isTarget = pane.id === targetPaneId;
         pane.hidden = !isTarget; // Use hidden attribute for semantics and accessibility
         toggleClass(pane, 'active', isTarget); // Use class for potential animation/styling
    });
}

// Keyboard navigation for tabs (Arrow keys, Home, End)
function handleTabKeyboardNav(event, elements) {
    if (!elements?.tabs) return;
    const tabs = Array.from(elements.tabs); // Convert NodeList to Array
    if (tabs.length <= 1) return; // No navigation needed for single tab

    const currentTab = event.currentTarget;
    let currentTabIndex = tabs.indexOf(currentTab);
    if (currentTabIndex === -1) return; // Should not happen

    let newIndex = currentTabIndex;
    let shouldMoveFocus = false;

    // Handle arrow keys, Home, End for tab navigation
    switch(event.key) {
        case 'ArrowRight': case 'ArrowDown': // Move to next tab, wrap around
            newIndex = (currentTabIndex + 1) % tabs.length;
            shouldMoveFocus = true;
            break;
        case 'ArrowLeft': case 'ArrowUp': // Move to previous tab, wrap around
            newIndex = (currentTabIndex - 1 + tabs.length) % tabs.length;
            shouldMoveFocus = true;
            break;
        case 'Home': // Move to first tab
            newIndex = 0;
            shouldMoveFocus = true;
            break;
        case 'End': // Move to last tab
            newIndex = tabs.length - 1;
            shouldMoveFocus = true;
            break;
    }

    // If a navigation key was pressed and the index changed
    if (shouldMoveFocus && newIndex !== currentTabIndex) {
        event.preventDefault(); // Prevent default browser scroll behavior
        const newTab = tabs[newIndex];
        if (newTab) {
            handleTabSwitch(newTab, elements); // Switch the active tab appearance/state
            newTab.focus(); // Move focus to the new tab button
        }
    }
}

// Add Recommendation Logic
async function handleAddRecommendation(elements) {
    // Prevent default handled by wrapper
    if (!selectedPatientId || !elements?.recommendationTextarea || !elements?.addRecommendationBtn || !elements?.recommendationFeedback || !elements?.recommendationsList) {
        console.warn("Cannot add recommendation: Missing elements or no patient selected.");
        if(elements?.recommendationFeedback) showFeedback(elements.recommendationFeedback, "Please select a patient first before adding a note.", "error");
        return;
    }

    const recommendation = elements.recommendationTextarea.value.trim();
    const feedbackEl = elements.recommendationFeedback;

    // Clear previous feedback/validation states
    setText(feedbackEl, '');
    addClass(feedbackEl, 'hidden');
    removeClass(elements.recommendationTextarea, 'invalid');

    if (!recommendation) {
        showFeedback(feedbackEl, 'Recommendation note cannot be empty.', 'error');
        addClass(elements.recommendationTextarea, 'invalid');
        elements.recommendationTextarea.focus();
        return;
    }

    showButtonLoading(elements.addRecommendationBtn); // Show loading state

    await simulateNetworkDelay(600); // Simulate saving delay

    try {
        // Find the patient in the main DB array
        const patientIndex = patientsDB.findIndex(p => p.patientId === selectedPatientId);
        if (patientIndex === -1) throw new Error("Selected patient data could not be found to save recommendation.");

        // Ensure the recommendations array exists
        if (!Array.isArray(patientsDB[patientIndex].recommendations)) {
            patientsDB[patientIndex].recommendations = [];
        }

        // Add a timestamp to the recommendation text
        const timestamp = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
        const newRecommendation = `${recommendation} (Added by Dr. ${currentDoctorData?.name} on ${timestamp})`; // Indicate doctor and date
        // Basic sanitization before adding to data (prevent basic HTML injection)
        const safeRecommendation = newRecommendation.replace(/</g, "<").replace(/>/g, ">");

        // Add the new recommendation to the beginning of the array (newest first)
        patientsDB[patientIndex].recommendations.unshift(safeRecommendation);

        // Re-render only the recommendations list within its tab
        renderList(elements.recommendationsList, patientsDB[patientIndex].recommendations, rec => `<li class="data-list-item">${rec}</li>`, '#recommendations-content .no-results', '#recommendations-content .skeleton-loader');

        elements.recommendationTextarea.value = ''; // Clear the textarea
        showFeedback(feedbackEl, 'Note added successfully!', 'success'); // Show success feedback

    } catch (error) {
        console.error("Error saving recommendation:", error);
        showFeedback(feedbackEl, `Error saving note: ${error.message}`, 'error'); // Show error feedback
    } finally {
        hideButtonLoading(elements.addRecommendationBtn); // Hide loading state
    }
}

// Add Visit Note Logic
async function handleAddVisitNote(elements) {
     if (!selectedPatientId || !elements?.logVisitForm || !elements?.logVisitBtn || !elements?.logVisitFeedback || !elements?.treatmentsList) {
         console.warn("Cannot log visit: Missing elements or no patient selected.");
         if(elements?.logVisitFeedback) showFeedback(elements.logVisitFeedback, "Select a patient first.", "error");
         return;
     }

    // Get form values
    const visitDate = elements.logVisitDateInput.value;
    const visitReason = elements.logVisitReasonInput.value.trim();
    const visitNotes = elements.logVisitNotesTextarea.value.trim();
    const feedbackEl = elements.logVisitFeedback;

    // Clear previous feedback/validation
    setText(feedbackEl, ''); addClass(feedbackEl, 'hidden');
    removeClass(elements.logVisitReasonInput, 'invalid');
    removeClass(elements.logVisitNotesTextarea, 'invalid');
    removeClass(elements.logVisitDateInput, 'invalid');

    // Basic Validation
    let isValid = true;
    if (!visitDate) {
        showFeedback(feedbackEl, 'Please select a visit date.', 'error');
        addClass(elements.logVisitDateInput, 'invalid');
        isValid = false;
    }
    if (!visitReason) {
        showFeedback(feedbackEl, 'Please enter a reason/diagnosis.', 'error');
        addClass(elements.logVisitReasonInput, 'invalid');
        isValid = false;
    }
     if (!visitNotes) {
        showFeedback(feedbackEl, 'Please enter visit notes.', 'error');
        addClass(elements.logVisitNotesTextarea, 'invalid');
        isValid = false;
    }
    if (!isValid) {
         elements.logVisitForm.querySelector('.invalid')?.focus(); // Focus first invalid field
         return;
    }

    showButtonLoading(elements.logVisitBtn);
    await simulateNetworkDelay(500); // Simulate saving

    try {
         // Find the patient in the main DB
        const patientIndex = patientsDB.findIndex(p => p.patientId === selectedPatientId);
        if (patientIndex === -1) throw new Error("Selected patient data not found.");

        // Ensure lastVisits array exists
        if (!Array.isArray(patientsDB[patientIndex].lastVisits)) {
            patientsDB[patientIndex].lastVisits = [];
        }

        // Create new visit object
        const newVisit = {
             id: `visit${Date.now()}${Math.random().toString(16).slice(2)}`,
             date: visitDate,
             doctorName: currentDoctorData?.name ?? "Current Doctor", // Use logged-in doctor's name
             diagnosis: visitReason,
             notes: `${visitNotes} (Logged: ${new Date().toLocaleDateString()})`, // Add log timestamp to notes
         };

         // Add to beginning of visits array and re-sort (important!)
         patientsDB[patientIndex].lastVisits.unshift(newVisit);
         patientsDB[patientIndex].lastVisits.sort((a, b) => new Date(b.date) - new Date(a.date));

         // Re-render the "Visits" tab list (elements.treatmentsList)
         renderList(elements.treatmentsList, patientsDB[patientIndex].lastVisits, visit => `
             <li class="data-list-item hover-effect">
                 <p><span class="list-label">Date:</span> ${visit.date ?? 'N/A'}</p>
                 <p><span class="list-label">Doctor:</span> ${visit.doctorName ?? 'N/A'}</p>
                 <p><span class="list-label">Reason:</span> ${visit.diagnosis ?? 'N/A'}</p>
                 ${visit.notes ? `<p><span class="list-label">Notes:</span> ${visit.notes}</p>` : ''}
             </li>`, '#treatments-content .no-results', '#treatments-content .skeleton-loader');

         elements.logVisitForm.reset(); // Clear the form
         elements.logVisitDateInput.valueAsDate = new Date(); // Reset date to today
         showFeedback(feedbackEl, 'Visit logged successfully!', 'success');
         removeClass(feedbackEl, 'hidden'); // Ensure feedback visible

         // Optional: Switch back to the 'Visits' tab after logging?
         const visitsTab = getById('tab-treatments');
         if(visitsTab) handleTabSwitch(visitsTab, elements);

    } catch (error) {
         console.error("Error logging visit:", error);
         showFeedback(feedbackEl, `Error logging visit: ${error.message}`, 'error');
         removeClass(feedbackEl, 'hidden'); // Ensure feedback visible
    } finally {
         hideButtonLoading(elements.logVisitBtn);
    }
}

// *** CHANGE START: Add Report Modal Logic ***
function showReportModal() {
    if (!currentPatientData) {
        console.error("Cannot generate report: No patient data loaded.");
        // Show feedback using a different mechanism if modal isn't ready
        const graphFeedback = getById('graph-feedback');
        if(graphFeedback) showFeedback(graphFeedback, "Error: Could not load patient data for report.", "error");
        return;
    }

    const modal = getById('confirmation-modal'); // Reuse the existing modal structure
    const modalTitle = getById('modal-title');
    const modalBody = modal?.querySelector('.modal-body'); // Target body within modal
    const modalFooter = modal?.querySelector('.modal-footer');

    if (!modal || !modalTitle || !modalBody || !modalFooter) {
        console.error("Report modal elements not found. Cannot display report.");
        alert("Error displaying report. Required elements missing."); // Fallback alert
        return;
    }

    // --- Generate Report Content ---
    let reportHTML = `<div class="patient-report">`; // Add a wrapper class

    // Patient Info
    reportHTML += `<h4>Health Summary for ${currentPatientData.name}</h4>`;
    reportHTML += `<p><strong>Patient ID:</strong> ${currentPatientData.patientId}</p>`;
    reportHTML += `<p><strong>Age:</strong> ${currentPatientData.age} | <strong>Gender:</strong> ${currentPatientData.gender}</p>`;
    reportHTML += `<p><strong>Assigned Doctor:</strong> ${doctorsDB.find(d => d.doctorId === currentPatientData.assignedDoctorId)?.name ?? 'N/A'}</p>`;

    // Medical History
    reportHTML += `<hr style="margin: 1.5rem 0;"><h5>Medical History</h5>`;
    if (currentPatientData.medicalHistory?.length > 0) {
        reportHTML += `<ul>${currentPatientData.medicalHistory.map(item => `<li>${item}</li>`).join('')}</ul>`;
    } else {
        reportHTML += `<p><i>No significant medical history recorded.</i></p>`;
    }

    // Recent Visits (Show latest 5, sorted)
    reportHTML += `<hr style="margin: 1.5rem 0;"><h5>Recent Visits (Latest 5)</h5>`;
    const sortedVisits = [...(currentPatientData.lastVisits ?? [])].sort((a, b) => new Date(b.date) - new Date(a.date));
    if (sortedVisits.length > 0) {
        reportHTML += `<ul class="data-list">`; // Use data-list for consistency
        sortedVisits.slice(0, 5).forEach(visit => {
            reportHTML += `<li class="data-list-item" style="font-size: 0.9rem;">
                           <p><strong>Date:</strong> ${visit.date ?? 'N/A'} | <strong>Doctor:</strong> ${visit.doctorName ?? 'N/A'}</p>
                           <p><strong>Reason:</strong> ${visit.diagnosis ?? 'N/A'}</p>
                           ${visit.notes ? `<p style="margin-top: 0.3rem;"><i>Notes: ${visit.notes}</i></p>` : ''}
                       </li>`;
        });
        reportHTML += `</ul>`;
    } else {
        reportHTML += `<p><i>No recent visit data available.</i></p>`;
    }

     // Prescribed Therapies
     reportHTML += `<hr style="margin: 1.5rem 0;"><h5>Prescribed Therapies/Exercises</h5>`;
     if (currentPatientData.prescribedTherapies?.length > 0) {
         reportHTML += `<ul class="data-list">`;
         currentPatientData.prescribedTherapies.forEach(therapy => {
             reportHTML += `<li class="data-list-item" style="font-size: 0.9rem;">
                             <p><strong>Type:</strong> ${therapy.type ?? 'N/A'}</p>
                             <p><strong>Frequency:</strong> ${therapy.frequency ?? 'N/A'} | <strong>Duration:</strong> ${therapy.duration ?? 'N/A'}</p>
                           </li>`;
         });
         reportHTML += `</ul>`;
     } else {
         reportHTML += `<p><i>No therapies or exercises currently prescribed.</i></p>`;
     }

    // Doctor's Notes (Recommendations)
    reportHTML += `<hr style="margin: 1.5rem 0;"><h5>Doctor's Notes & Recommendations</h5>`;
    if (currentPatientData.recommendations?.length > 0) {
        reportHTML += `<ul class="data-list">`;
        currentPatientData.recommendations.forEach(rec => {
            // Basic sanitization
            const safeRec = (rec || '').replace(/</g, "<").replace(/>/g, ">");
            reportHTML += `<li class="data-list-item" style="font-size: 0.9rem;">${safeRec}</li>`;
        });
        reportHTML += `</ul>`;
    } else {
        reportHTML += `<p><i>No specific notes from the doctor available.</i></p>`;
    }

    reportHTML += `</div>`; // Close wrapper div

    // --- Update and Show Modal ---
    setText(modalTitle, `Patient Report: ${currentPatientData.name}`); // Set modal title
    setHTML(modalBody, reportHTML); // Set the generated report content

    // Modify footer buttons for the report view
    // Hide Confirm button, change Cancel to "Close"
    const confirmBtn = getById('modal-confirm-btn');
    const cancelBtn = getById('modal-cancel-btn');
    if(confirmBtn) addClass(confirmBtn, 'hidden'); // Hide confirm
    if(cancelBtn) {
        setText(cancelBtn, "Close Report"); // Change text
        removeClass(cancelBtn, 'hidden'); // Ensure close is visible
    }

    // Use the existing modal show/hide logic but without a confirmation callback
    confirmCallback = null; // Ensure no action on confirm button (which is hidden anyway)

    // --- Listener Management (Simplified for Report Modal) ---
    const closeHandler = () => hideConfirmationModal();
    const backdropHandler = (event) => handleModalBackdropClick(event);

    const prevCancelHandler = cancelBtn?.clickHandler;
    if (prevCancelHandler) cancelBtn.removeEventListener('click', prevCancelHandler);
    const prevCloseHandler = getById('modal-close-btn')?.clickHandler;
    if (prevCloseHandler) getById('modal-close-btn').removeEventListener('click', prevCloseHandler);
    const prevBackdropHandler = modal.clickHandler;
    if (prevBackdropHandler) modal.removeEventListener('click', prevBackdropHandler);
    // ---

    // Attach new listeners
    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeHandler, { once: true });
        cancelBtn.clickHandler = closeHandler;
    }
    const closeBtn = getById('modal-close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeHandler, { once: true });
        closeBtn.clickHandler = closeHandler;
    }
    modal.addEventListener('click', backdropHandler);
    modal.clickHandler = backdropHandler;
    // ---

    // Show the modal
    modal.setAttribute('aria-hidden', 'false');
    removeClass(modal, 'hidden');
    cancelBtn?.focus(); // Focus the close button

    // After hiding, restore modal footer buttons (important!)
    modal.addEventListener('transitionend', () => {
        if (hasClass(modal, 'hidden')) {
            if (confirmBtn) removeClass(confirmBtn, 'hidden');
            if (cancelBtn) setText(cancelBtn, "Cancel");
        }
    }, { once: true });
}
// *** CHANGE END ***


// ------------------------------------
// --- 9. Global Initialization    ---
// ------------------------------------

function initializeApp() {
    console.log("--- Sankeeravya Portal Initializing (v1.7.0) ---");
    initializeTheme(); // Set theme early based on preference/localStorage

    // Global Ripple Effect Listener (using event delegation on body)
    document.body.addEventListener('click', (event) => {
        const rippleTarget = event.target.closest('.btn, .role-btn, .icon-button, .tab-link, .patient-list-item, .schedule-item, .data-list-item, .view-more-link, .action-link, .card-hover-lift, .card-hover-glow, .password-toggle');
        if (rippleTarget && !rippleTarget.disabled) {
            createRipple({ clientX: event.clientX, clientY: event.clientY, currentTarget: rippleTarget });
        }
    });

    // Header Scroll Effect (Add 'scrolled' class to header)
    const header = qs('.page-header');
    if (header) {
         let lastScrollTop = 0;
         window.addEventListener('scroll', () => {
              let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
              toggleClass(header, 'scrolled', scrollTop > 30);
              lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
         }, { passive: true });
     } else if (getCurrentPageName() !== 'index.html') {
         console.warn("Page header element not found for scroll effects.");
     }

    // Page-Specific Initialization Logic
    const pageName = getCurrentPageName();
    console.log(`Current page detected: ${pageName}`);

    try {
        switch (pageName) {
            case 'index.html':
                initLoginPage();
                break;
            case 'patient.html':
                initPatientDashboard();
                break;
            case 'doctor.html':
                initDoctorDashboard();
                break;
            default:
                console.warn(`Page type not explicitly identified: ${pageName}. Running basic auth check...`);
                checkAuth();
                if (!['index.html', 'patient.html', 'doctor.html'].includes(getCurrentPageName())) {
                     console.error("Navigation error: Ended up on an unknown page.", pageName);
                     forceRedirectToLogin("Invalid page access");
                 }
                break;
        }
    } catch (initError) {
        console.error(`!!! Critical error during ${pageName} initialization !!!`, initError);
        displayFatalError(
            `Application Error on ${pageName}`,
            "A critical error occurred while loading this page. Please try refreshing or returning to the login page.",
            `Error Details: ${initError.message}`
        );
    }

    console.log("--- Sankeeravya Portal Initialization Complete ---");
}

// Helper function to display a fatal error overlay
function displayFatalError(title = "Application Error", message = "An unexpected error occurred.", details = "") {
    // Prevent multiple error overlays from stacking
    if (document.getElementById('fatal-error-overlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'fatal-error-overlay';
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.backgroundColor = 'var(--background-primary, #f0f0f0)';
    overlay.style.color = 'var(--text-primary, #111)';
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.padding = '2rem';
    overlay.style.textAlign = 'center';
    overlay.style.zIndex = '99999';
    overlay.style.fontFamily = 'var(--font-body, sans-serif)';

    overlay.innerHTML = `
        <div style="max-width: 600px; background: var(--background-secondary, #fff); padding: 2rem; border-radius: var(--border-radius-lg, 8px); box-shadow: var(--shadow-lg);">
            <h2 style="color: var(--warning-color, #dc3545); margin-bottom: 1rem; font-family: var(--font-heading, sans-serif);">${title}</h2>
            <p style="margin-bottom: 1.5rem; line-height: 1.6;">${message}</p>
            ${details ? `<p style="font-size: 0.9em; color: var(--text-muted, #666); margin-bottom: 2rem; max-width: 500px; word-wrap: break-word; background: var(--background-primary, #f0f0f0); padding: 0.5rem; border-radius: 4px;">${details}</p>` : ''}
            <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
                <button onclick="window.location.reload();" style="padding: 0.7rem 1.5rem; border: 1px solid var(--border, #ccc); border-radius: 6px; cursor: pointer; background-color: var(--background-secondary, #fff); color: var(--text-primary, #111); font-weight: 600;">Refresh Page</button>
                <button onclick="sessionStorage.clear(); window.location.replace('index.html');" style="padding: 0.7rem 1.5rem; border: 1px solid transparent; border-radius: 6px; cursor: pointer; background-color: var(--primary-color, #007bff); color: var(--text-on-primary, #fff); font-weight: 600;">Go to Login</button>
            </div>
        </div>`;
    document.body.appendChild(overlay);
}


// --- Run Initialization on DOMContentLoaded ---
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

/* END OF FILE script.js */
