import API_URL from "./api";

export async function buscarDashboard(usuarioId) {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${API_URL}/Dashboard/${usuarioId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao carregar dashboard");
  }

  return await response.json();
}