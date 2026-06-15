import API_URL from "./api";

export async function buscarMetas(usuarioId) {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${API_URL}/Meta/${usuarioId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao carregar metas");
  }

  return await response.json();
}