window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('boot-screen').classList.add('hidden');
    document.getElementById('main-ui').classList.remove('hidden');
  }, 3000);
});

function toggleWindow(id) {
  const el = document.getElementById(id);
  el.style.display = (el.style.display === 'block') ? 'none' : 'block';
}
