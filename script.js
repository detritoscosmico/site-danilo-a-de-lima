const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const leadForm = document.getElementById("leadForm");
const formMsg = document.getElementById("formMsg");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("active"));
});

leadForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!nome || !email) {
    formMsg.textContent = "Preencha nome e e-mail.";
    return;
  }

  const lead = { nome, email, data: new Date().toISOString() };
  localStorage.setItem("lead_universo_titanio", JSON.stringify(lead));

  formMsg.textContent = "Cadastro registrado neste navegador. Conecte a um serviço de e-mail depois.";
  leadForm.reset();
});
