import API_URL from "./api";

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

  const data = await response.json();

  if (!response.ok || data.sucesso === false) {
    throw new Error(data.mensagem || "Erro ao fazer login.");
  }

  return data;
}

export async function fazerCadastro(dadosCadastro) {
  const response = await fetch(`${API_URL}/Auth/cadastro`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dadosCadastro),
  });

  const data = await response.json();

  if (!response.ok || data.sucesso === false) {
    throw new Error(data.mensagem || "Erro ao cadastrar usuário.");
  }

  return data;
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