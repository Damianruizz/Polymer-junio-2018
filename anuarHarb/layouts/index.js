(function() {
  'use strict';

  const sidenavButton = document.getElementsByClassName('toggleSidenav');
  const sideNav = document.querySelector('.sidenav');

  for(let button of sidenavButton) {
    button.addEventListener('click', () => {
      sideNav.classList.toggle('sidenav--open');
    });
  };

})();
