const form = document.getElementById('loginForm');
const overlay = document.getElementById('loadingOverlay');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Previene invio del form
  overlay.style.display = 'flex'; // Mostra il caricamento
});
