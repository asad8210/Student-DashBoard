const sideMenu = document.querySelector(".sidebar");
const profileBtn = document.querySelector("#profile-btn");
const themeToggler = document.querySelector(".theme-toggler");
const nextDay = document.getElementById('nextDay');
const prevDay = document.getElementById('prevDay');
const menuToggle = document.getElementById('menu-toggle'); // Hamburger menu

// Toggle sidebar with hamburger menu
menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close sidebar on scroll and toggle header style based on scroll position
window.addEventListener('scroll', () => {
    sideMenu.classList.remove('active');
    menuToggle.classList.remove('active');
    document.querySelector('header').classList.toggle('active', window.scrollY > 0);
});

// Toggle dark/light theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});

// Function to set timetable data for the selected day
const setData = (day) => {
    const tbody = document.querySelector('table tbody');
    tbody.innerHTML = ''; // Clear previous table data

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.querySelector('.timetable div h2').textContent = dayNames[day];

    // Assume these arrays (Sunday, Monday, etc.) are defined elsewhere or fetched from a database
    let currentDay;
    switch (day) {
        case 0: currentDay = Sunday; break;
        case 1: currentDay = Monday; break;
        case 2: currentDay = Tuesday; break;
        case 3: currentDay = Wednesday; break;
        case 4: currentDay = Thursday; break;
        case 5: currentDay = Friday; break;
        case 6: currentDay = Saturday; break;
    }

    currentDay.forEach(sub => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${sub.time}</td>
            <td>${sub.roomNumber}</td>
            <td>${sub.subject}</td>
            <td>${sub.type}</td>
        `;
        tbody.appendChild(tr);
    });
};

// Set today's timetable and initialize the day variable
const now = new Date();
let day = now.getDay(); // Get the current day

// Toggle timetable visibility and load today's data
const timeTableAll = () => {
    document.getElementById('timetable').classList.toggle('active');
    setData(day);
    document.querySelector('.timetable div h2').textContent = "Today's Timetable";
};

// Next day button functionality
nextDay.addEventListener('click', () => {
    day = (day + 1) % 7;  // Move to the next day, wrap around to Sunday after Saturday
    setData(day);
});

// Previous day button functionality
prevDay.addEventListener('click', () => {
    day = (day - 1 + 7) % 7;  // Move to the previous day, wrap around to Saturday after Sunday
    setData(day);
});

// Initial setup: load today's timetable
setData(day);
document.querySelector('.timetable div h2').textContent = "Today's Timetable";
