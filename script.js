// YES button action
function yesClick() {
  document.querySelector('.reel').innerHTML = `
    <h1>YAYYY 😍❤️</h1>
    <p style="margin-top:20px; font-size:18px;">
      Best decision ever.
    </p>
    <p style="margin-top:10px;">
      Happy Valentine’s Day 💕
    </p>
  `;
}

// NO button runs away
function moveNo() {
  const noBtn = document.querySelector('.no');
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Floating hearts generator
const heartsContainer = document.querySelector('.hearts');

setInterval(() => {
  const heart = document.createElement('span');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 400);
