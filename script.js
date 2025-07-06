// Simulate boot sequence
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('boot').classList.add('hidden');
    document.getElementById('main').classList.remove('hidden');
  }, 3000); // 3-second boot
});
