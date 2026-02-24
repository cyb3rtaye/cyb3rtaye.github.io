// Typing Effect
const text = "Junior SOC Analyst | Blue Team | Threat Detection Focused";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.querySelector(".typing").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 40);
    }
}

window.onload = typeEffect;

// Live Clock
function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent =
        "SOC Time: " + now.toLocaleTimeString();
}
setInterval(updateClock, 1000);

// Fake Alert Counter
let alerts = 0;
setInterval(() => {
    alerts += Math.floor(Math.random() * 2);
    document.getElementById("alerts").textContent = alerts;
}, 3000);
