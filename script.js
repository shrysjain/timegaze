document.addEventListener('DOMContentLoaded', function() {
  updateClock();

  const selectedBackground = localStorage.getItem('selectedScreensaver');
  const backgroundElement = document.getElementById('background');

  backgroundElement.style.backgroundImage = `url('./${selectedBackground}')`;

  setInterval(updateClock, 1000);
});

function updateClock() {
  const now = new Date();
  const hours = (now.getHours() % 12).toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const clockElement = document.getElementById('clock');
  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}
