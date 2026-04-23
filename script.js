const text = "Cyber Security | Security Monitoring | Detection | Penetration Testing";
let index = 0;

function typeEffect() {
    const typingElement = document.querySelector('.typing');

    if (!typingElement) return;

    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 60);
    }
}

document.addEventListener('DOMContentLoaded', typeEffect);
