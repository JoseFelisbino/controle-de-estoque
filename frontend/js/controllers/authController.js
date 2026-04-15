import { loginRequest } from "../services/api.js";
import { showModal } from "../views/modalView.js";

const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  try {
    await loginRequest({ email, senha });

    window.location.href = "dashboard.html";

  } catch (error) {
    showModal(error.message);
  }
});