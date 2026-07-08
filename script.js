const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
const leadForm = document.getElementById('leadForm');
const formMsg = document.getElementById('formMsg');

if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', () => {
    if (navMenu) navMenu.classList.remove('active');
  });
});

if (leadForm && formMsg) {
  leadForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome')?.value.trim();
    const email = document.getElementById('email')?.value.trim();

    if (!nome || !email) {
      formMsg.textContent = 'Preencha nome e e-mail.';
      return;
    }

    const lead = {
      nome,
      email,
      origem: 'site-danilo-a-de-lima',
      data: new Date().toISOString()
    };

    const leads = JSON.parse(localStorage.getItem('leads_universo_titanio') || '[]');
    leads.push(lead);

    localStorage.setItem('lead_universo_titanio', JSON.stringify(lead));
    localStorage.setItem('leads_universo_titanio', JSON.stringify(leads));

    formMsg.textContent = 'Cadastro registrado neste navegador. Próximo passo: conectar com Brevo, Mailchimp ou Google Forms.';
    leadForm.reset();
  });
}
