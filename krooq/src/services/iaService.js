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
    throw new Error(data?.mensagem || "Erro ao conectar com a IA.");
  }

  return data;
}

export async function buscarHistoricoIA(projetoId) {
  const token = verificarToken();

  const response = await fetch(`${API_URL}/Ia/historico/${projetoId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return tratarResposta(response);
}

export async function enviarMensagemIA(projetoId, mensagem) {
  const token = verificarToken();

  const response = await fetch(`${API_URL}/Ia/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      projetoId,
      mensagem,
    }),
  });

  return tratarResposta(response);
}

export async function limparHistoricoIA(projetoId) {
  const token = verificarToken();

  const response = await fetch(`${API_URL}/Ia/historico/${projetoId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 401) {
    sairDaConta();
    throw new Error("Sessão expirada. Faça login novamente.");
  }

  if (!response.ok) {
    throw new Error("Não foi possível limpar o histórico.");
  }

  return true;
}

export async function gerarImagemIA(projetoId, prompt) {
  const token = verificarToken();

  const response = await fetch(`${API_URL}/Ia/imagem/gerar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      projetoId,
      prompt,
    }),
  });

  return tratarResposta(response);
}

export async function listarImagensIA(projetoId) {
  const token = verificarToken();

  const response = await fetch(`${API_URL}/Ia/imagem/projeto/${projetoId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return tratarResposta(response);
}