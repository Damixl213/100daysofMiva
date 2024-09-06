
// script.js
const texts = [
  "Simple Omelette Recipe",
  "Quick Egg Dish Guide",
  "Easy Omelette Instructions",
  "Basic Breakfast Directions",
  "Simple Egg Cooking Steps",
  "Follow this quick guide to cooking a classic omelette.",

];

let currentIndex = 0;
let charIndex = 0;
const typingSpeed = 100; // Speed of typing
const erasingSpeed = 90; // Speed of erasing
const delayBetweenTexts = 2000; // Delay between texts
const textElement = document.getElementById("target");

function typeText() {
  if (charIndex < texts[currentIndex].length) {
      textElement.textContent += texts[currentIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, typingSpeed);
  } else {
      setTimeout(eraseText, delayBetweenTexts);
  }
}

function eraseText() {
  if (charIndex > 0) {
      textElement.textContent = texts[currentIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseText, erasingSpeed);
  } else {
      currentIndex = (currentIndex + 1) % texts.length; // Move to the next text
      setTimeout(typeText, typingSpeed + 500);
  }
}

// Start the typing effect
setTimeout(typeText, delayBetweenTexts + 500);
