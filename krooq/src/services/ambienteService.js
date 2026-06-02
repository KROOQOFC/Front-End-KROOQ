import API_URL from "./api";

async function tratarResposta(response, mensagemPadrao) {
  let data = null;

  try {
    const texto = await response.text();

    if (texto) {
      data = JSON.parse(texto);
    }
  } catch {
    data = null;
  }

  if (!response.ok || data?.sucesso === false) {
    throw new Error(data?.mensagem || mensagemPadrao);
  }

  return data;
}

export async function fazerLogin(email, senha) {
  const response = await fetch(`${API_URL}/Auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      senha,
    }),
  });

  return tratarResposta(response, "Erro ao fazer login.");
}

export async function fazerCadastro(dadosCadastro) {
  const response = await fetch(`${API_URL}/Auth/cadastro`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dadosCadastro),
  });

  return tratarResposta(response, "Erro ao cadastrar usuário.");
}

export function salvarDadosDoLogin(data) {
  localStorage.setItem("token", data.token);

  if (data.usuario) {
    localStorage.setItem("usuario", JSON.stringify(data.usuario));
  }
}

export function pegarToken() {
  return localStorage.getItem("token");
}

export function pegarUsuarioLogado() {
  const usuario = localStorage.getItem("usuario");

  if (!usuario) {
    return null;
  }

  return JSON.parse(usuario);
}

export function sairDaConta() {
  localStorage.removeItem("token");
  localStorage.removeItem("usuario");
}