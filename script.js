// ── Mobile Menu ──
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// ── Stat Card Data ──
const statData = {

    doctors: {
        title: "Doctors At Work",
        data: [
            "Dr. Rajesh Kumar — Cardiologist",
            "Dr. Priya Sharma — General Physician",
            "Dr. Amit Verma — Neurologist",
            "Dr. Neha Singh — Pediatrician",
            "Dr. Arjun Gupta — Orthopedic Specialist"
        ]
    },

    patients: {
        title: "Satisfied Patients",
        data: [
            "Total Patients: 1030+",
            "Today's Patients: 48",
            "Successful Treatments: 970+",
            "Patient Satisfaction: 96%",
            "Average Rating: 4.8 / 5"
        ]
    },

    beds: {
        title: "Bed Facility",
        data: [
            "Total Beds: 490+",
            "Available Beds: 128",
            "Occupied Beds: 362",
            "ICU Beds: 42",
            "Emergency Beds: 25"
        ]
    },

    hospitals: {
        title: "Available Hospitals",
        data: [
            "City Care Hospital — 24/7",
            "LifeLine Hospital — 24/7",
            "Medicare Hospital — 24/7",
            "Sunrise Hospital — 24/7",
            "Apollo Medical Center — 24/7"
        ]
    }

};

function showStatData(type) {

    const selected = statData[type];

    document.getElementById("modalTitle").textContent =
        selected.title;

    document.getElementById("modalData").innerHTML =
        selected.data
            .map(item => `<div class="data-item">${item}</div>`)
            .join("");

    document.getElementById("statModal")
        .classList.add("active");
}

function closeStatData() {
    document.getElementById("statModal")
        .classList.remove("active");
}

/* Close when clicking outside */
document.getElementById("statModal").addEventListener("click", function(e) {
    if (e.target === this) {
        closeStatData();
    }
});

/* ESC key */
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        closeStatData();
    }
});
