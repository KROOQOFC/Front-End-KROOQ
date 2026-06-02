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
    throw new Error(data?.mensagem || "Erro ao conectar com os projetos.");
  }

  return data;
}

export async function listarProjetos() {
  const token = verificarToken();

  const response = await fetch(`${API_URL}/Projetos`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return tratarResposta(response);
}

export async function buscarProjetoPorId(id) {
  const token = verificarToken();

  const response = await fetch(`${API_URL}/Projetos/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return tratarResposta(response);
}

export async function criarProjeto(dadosProjeto) {
  const token = verificarToken();

  const response = await fetch(`${API_URL}/Projetos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dadosProjeto),
  });

  return tratarResposta(response);
}

export async function atualizarProjeto(id, dadosProjeto) {
  const token = verificarToken();

  const response = await fetch(`${API_URL}/Projetos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dadosProjeto),
  });

  return tratarResposta(response);
}

export async function deletarProjeto(id) {
  const token = verificarToken();

  const response = await fetch(`${API_URL}/Projetos/${id}`, {
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
    let data = null;

    try {
      data = await response.json();
    } catch {
      data = null;
    }

    throw new Error(data?.mensagem || "Erro ao deletar projeto.");
  }

  return true;
}