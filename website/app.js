/* Gorman Medical site — shared behavior: icons, sticky-nav mobile menu. */
(function () {
  function initIcons() {
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
  }

  function buildMobileMenu() {
    var header = document.querySelector('.header');
    if (!header) return;
    var nav = header.querySelector('.nav');
    var brandImg = header.querySelector('.brand img');

    var menu = document.createElement('div');
    menu.className = 'mobile-menu';
    var links = nav ? Array.prototype.map.call(nav.querySelectorAll('a'), function (a) {
      return '<a href="' + a.getAttribute('href') + '"' + (a.classList.contains('active') ? ' class="active"' : '') + '>' + a.textContent + '</a>';
    }).join('') : '';

    menu.innerHTML =
      '<div class="backdrop"></div>' +
      '<div class="panel">' +
        '<button class="close" aria-label="Close menu"><i data-lucide="x"></i></button>' +
        (brandImg ? '<img src="' + brandImg.getAttribute('src') + '" alt="Gorman Medical">' : '') +
        links +
        '<a class="btn btn-primary" href="contact.html"><i data-lucide="calendar-check"></i> Book Appointment</a>' +
      '</div>';
    document.body.appendChild(menu);

    var toggle = header.querySelector('.menu-toggle');
    function open() { menu.classList.add('open'); document.body.style.overflow = 'hidden'; }
    function close() { menu.classList.remove('open'); document.body.style.overflow = ''; }
    if (toggle) toggle.addEventListener('click', open);
    menu.querySelector('.backdrop').addEventListener('click', close);
    menu.querySelector('.close').addEventListener('click', close);
    Array.prototype.forEach.call(menu.querySelectorAll('.panel a'), function (a) {
      a.addEventListener('click', close);
    });
  }

  function init() {
    buildMobileMenu();
    initIcons();
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
