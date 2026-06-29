// Bottom navigation mobile — iniettata in ogni pagina
(function() {
  const NAV_ITEMS = [
    { href: 'index.html',     icon: '🏠', label: 'Dash' },
    { href: 'attivita.html',  icon: '✅', label: 'Task' },
    { href: 'richieste.html', icon: '📩', label: 'Richieste' },
    { href: 'clienti.html',   icon: '👥', label: 'Clienti' },
  ];

  const DRAWER_ITEMS = [
    { href: 'proprieta.html',       icon: '🏡', label: 'Proprietà' },
    { href: 'social.html',          icon: '📱', label: 'Social' },
    { href: 'mara.html',            icon: '📊', label: 'Mara' },
    { href: 'valutazione.html',     icon: '💶', label: 'OMI' },
    { href: 'incarico.html',        icon: '📋', label: 'Incarico' },
    { href: 'agenti.html',          icon: '🤖', label: 'Agenti' },
    { href: 'fonti.html',           icon: '🗞', label: 'Fonti' },
    { href: 'storico-metriche.html',icon: '📈', label: 'Storico' },
  ];

  const current = location.pathname.split('/').pop() || 'index.html';

  const navHtml = NAV_ITEMS.map(item => {
    const active = item.href === current ? 'active' : '';
    return `<a class="bn-item ${active}" href="${item.href}"><span class="bn-icon">${item.icon}</span>${item.label}</a>`;
  }).join('');

  const drawerHtml = DRAWER_ITEMS.map(item =>
    `<a class="bn-drawer-item" href="${item.href}"><span class="icon">${item.icon}</span>${item.label}</a>`
  ).join('');

  const markup = `
    <div class="bn-drawer-overlay" id="bnOverlay" onclick="toggleBnDrawer()"></div>
    <div class="bn-drawer" id="bnDrawer">${drawerHtml}</div>
    <nav class="bottom-nav">
      ${navHtml}
      <button class="bn-item" onclick="toggleBnDrawer()"><span class="bn-icon">⋯</span>Altro</button>
    </nav>
  `;

  document.body.insertAdjacentHTML('beforeend', markup);

  window.toggleBnDrawer = function() {
    document.getElementById('bnDrawer').classList.toggle('open');
    document.getElementById('bnOverlay').classList.toggle('open');
  };
})();
