const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const card = document.getElementById("card");
const success = document.getElementById("success");

const noTexts = [
  "No 😐",
  "Are you sure?",
  "Think again 😏",
  "Please? 🥺",
  "You can’t 😈"
];

let noCount = 0;

// NO button escape
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  noBtn.innerText = noTexts[noCount % noTexts.length];
  noCount++;
});

// YES button
yesBtn.addEventListener("click", () => {
  card.classList.add("hidden");
  success.classList.remove("hidden");
  startConfetti();
});

// Hearts generator
const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 300);

// Simple confetti
function startConfetti() {
  for (let i = 0; i < 30; i++) {
    const c = document.createElement("span");
    c.innerText = "🎉";
    c.style.position = "absolute";
    c.style.left = Math.random() * 100 + "vw";
    c.style.top = Math.random() * 100 + "vh";
    c.style.fontSize = "20px";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 2000);
  }
}
