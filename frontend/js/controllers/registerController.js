import { registerRequest } from "../services/api.js";
import { showModal } from "../views/modalView.js";

const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  try {
    await registerRequest({ email, senha });

    showModal("Cadastro realizado com sucesso!");

    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);

  } catch (error) {
    showModal(error.message);
  }
});