const BASE_URL = "http://localhost:3000";

export async function registerRequest(data) {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    throw new Error("Erro ao cadastrar");
  }

  return res.json();
}

export async function loginRequest(data) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    throw new Error("Credenciais inválidas");
  }

  return res.json();
}

export async function getProdutos() {
  const res = await fetch(`${BASE_URL}/produtos`, {
    credentials: "include"
  });

  return res.json();
}

export async function getMovimentacoes() {
  const res = await fetch(`${BASE_URL}/movimentacoes`, {
    credentials: "include"
  });

  return res.json();
}