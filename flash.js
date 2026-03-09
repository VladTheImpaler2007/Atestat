document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.navbar .logo');
  if (!logo) return;

  // FLASH OVERLAY
  let flash = document.getElementById('flash-overlay');
  if (!flash) {
    flash = document.createElement('div');
    flash.id = 'flash-overlay';
    document.body.appendChild(flash);
  }

  // AUDIO (creat automat)
  let sound = document.getElementById('flashSound');
  if (!sound) {
    sound = document.createElement('audio');
    sound.id = 'flashSound';
    sound.src = '/shutter.mp3'; // AICI pui numele fișierului
    document.body.appendChild(sound);
  }

  logo.addEventListener('click', () => {
    flash.style.opacity = '1';

    sound.currentTime = 0;
    sound.play();

    setTimeout(() => {
      flash.style.opacity = '0';
    }, 200);
  });
});