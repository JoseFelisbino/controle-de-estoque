const BASE_URL = "http://localhost:3000";

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