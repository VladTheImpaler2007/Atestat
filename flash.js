// flash.js
document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.navbar .logo'); // adjust selector if needed
  if (!logo) return;

  // create overlay dynamically if not in HTML
  let flash = document.getElementById('flash-overlay');
  if (!flash) {
    flash = document.createElement('div');
    flash.id = 'flash-overlay';
    document.body.appendChild(flash);
  }

  logo.addEventListener('click', () => {
    flash.style.opacity = '1';
    setTimeout(() => {
      flash.style.opacity = '0';
    }, 200);
  });
});