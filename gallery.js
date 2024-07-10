document.addEventListener('DOMContentLoaded', function() {
  const screensavers = [
    { name: 'Poon Hill', author: 'Daniel Leone', image: 'assets/bg1.jpg' },
    { name: 'Nebulae', author: 'Christian Nielsen', image: 'assets/bg2.jpg' },
    { name: 'Högakustenbron', author: 'Anders Jildén', image: 'assets/bg3.jpg' },
    { name: 'Skyline', author: 'Aaliya Wahab', image: 'assets/bg4.jpg' },
    { name: 'Red Highlands', author: 'John Towner', image: 'assets/bg5.jpg' },

    { name: 'Fujisan', author: 'Tianshi Liu', image: 'assets/bg6.jpg' },
    { name: 'Lost in Tokyo', author: 'Andre Benz', image: 'assets/bg7.jpg' },
    { name: 'Planet Earth', author: 'NASA', image: 'assets/bg8.jpg' },
    { name: 'Galaxy', author: 'Richard Horvath', image: 'assets/bg9.jpg' },
    { name: 'Chicago Waterfront', author: 'Pedro Lastra', image: 'assets/bg10.jpg' },
  ];

  const gallery = document.getElementById('screensaverGallery');
  screensavers.forEach((screensaver) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${screensaver.image}" alt="${screensaver.name}">
      <h3>${screensaver.name}</h3>
      <p>${screensaver.author}</p>
    `;
    card.addEventListener('click', () => {
      localStorage.setItem('selectedScreensaver', screensaver.image);
      window.location.href = 'screensaver';
    });
    gallery.appendChild(card);
  });
});
