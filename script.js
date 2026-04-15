const text = "Aspiring SOC Analyst | Blue Team | Threat Detection | Log Analysis";
let index = 0;

function typeEffect() {
    const typingElement = document.querySelector(".typing");

    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 70);
    }
}

window.onload = typeEffect;