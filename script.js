const text = "Junior SOC Analyst | Blue Team | Threat Detection";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.querySelector(".typing").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

window.onload = typeEffect;
