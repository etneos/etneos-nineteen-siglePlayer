(() => {
  const menu = document.getElementById('mobile-menu');
  const aboutDialog = document.getElementById('about-dialog');
  const openAboutButton = document.querySelector('[data-open-about]');

  if (menu) {
    document.addEventListener('click', (event) => {
      if (menu.open && !menu.contains(event.target)) {
        menu.open = false;
      }
    });

    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        menu.open = false;
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        menu.open = false;
      }
    });
  }

  if (aboutDialog && openAboutButton) {
    openAboutButton.addEventListener('click', () => {
      menu.open = false;
      if (typeof aboutDialog.showModal === 'function') {
        aboutDialog.showModal();
      } else {
        aboutDialog.setAttribute('open', '');
      }
    });

    aboutDialog.addEventListener('click', (event) => {
      if (event.target === aboutDialog) {
        aboutDialog.close();
      }
    });
  }
})();
