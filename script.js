const text = "Cybersecurity Analyst | Security Monitoring | Incident Support | Automation & Cloud Security";
let index = 0;

function typeEffect() {
    const typingElement = document.querySelector(".typing");
    if (!typingElement) return;

    if (index === 0) {
        typingElement.textContent = "";
    }

    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 60);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);