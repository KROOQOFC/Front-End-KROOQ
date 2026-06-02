import API_URL from "./api";
import { pegarToken, sairDaConta } from "./authService";

function verificarToken() {
  const token = pegarToken();

  if (!token) {
    throw new Error("Usuário não autenticado.");
  }

  return token;
}

async function tratarResposta(response) {
  if (response.status === 401) {
    sairDaConta();
    throw new Error("Sessão expirada. Faça login novamente.");
  }

  let data = null;

  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new Error(data?.mensagem || "Erro ao conectar com os ambientes.");
  }

  return data;
}

export async function listarAmbientesPorProjeto(projetoId) {
  const token = verificarToken();

  const response = await fetch(`${API_URL}/Ambientes/projeto/${projetoId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return tratarResposta(response);
}

export async function criarAmbiente(projetoId, dadosAmbiente) {
  const token = verificarToken();

  const response = await fetch(`${API_URL}/Ambientes/projeto/${projetoId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dadosAmbiente),
  });

  return tratarResposta(response);
}