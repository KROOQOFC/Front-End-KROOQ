import { useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import { fazerCadastro } from "../../services/authService";
import "./Cadastro.css";
import Banner from "../../assets/nome_Krooq_verde.png";
import GoogleIcon from "../../assets/google.png";

function Cadastro() {
  const { tipoUsuario } = useParams();
  const navigate = useNavigate();

  const tiposPermitidos = ["profissional", "cliente", "fornecedor"];

  if (!tiposPermitidos.includes(tipoUsuario)) {
    return <Navigate to="/escolha-login" />;
  }

  const nomesCadastro = {
    profissional: "Profissional",
    cliente: "Cliente",
    fornecedor: "Fornecedor",
  };

  const tipoFormatado = nomesCadastro[tipoUsuario];

  const [dadosCadastro, setDadosCadastro] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "+55 ",
    cpf: "",
    cnpj: "",
    areaAtuacao: "",
    registroProfissional: "",
    nomeEmpresa: "",
    senha: "",
    confirmarSenha: "",
    aceitouTermos: false,
  });

  const [mensagensErro, setMensagensErro] = useState({});
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

  function pegarSomenteNumeros(valor) {
    return valor.replace(/\D/g, "");
  }

  function formatarCPF(valor) {
    const numeros = pegarSomenteNumeros(valor).slice(0, 11);

    if (numeros.length <= 3) return numeros;

    if (numeros.length <= 6) {
      return `${numeros.slice(0, 3)}.${numeros.slice(3)}`;
    }

    if (numeros.length <= 9) {
      return `${numeros.slice(0, 3)}.${numeros.slice(3, 6)}.${numeros.slice(6)}`;
    }

    return `${numeros.slice(0, 3)}.${numeros.slice(3, 6)}.${numeros.slice(
      6,
      9
    )}-${numeros.slice(9, 11)}`;
  }

  function formatarTelefone(valor) {
    let numeros = pegarSomenteNumeros(valor);

    if (numeros.startsWith("55")) {
      numeros = numeros.slice(2);
    }

    numeros = numeros.slice(0, 11);

    if (numeros.length === 0) return "+55 ";

    if (numeros.length <= 2) {
      return `+55 (${numeros}`;
    }

    if (numeros.length <= 6) {
      return `+55 (${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
    }

    if (numeros.length <= 10) {
      return `+55 (${numeros.slice(0, 2)}) ${numeros.slice(
        2,
        6
      )}-${numeros.slice(6)}`;
    }

    return `+55 (${numeros.slice(0, 2)}) ${numeros.slice(
      2,
      7
    )}-${numeros.slice(7, 11)}`;
  }

  function formatarCNPJ(valor) {
    const numeros = pegarSomenteNumeros(valor).slice(0, 14);

    if (numeros.length <= 2) return numeros;

    if (numeros.length <= 5) {
      return `${numeros.slice(0, 2)}.${numeros.slice(2)}`;
    }

    if (numeros.length <= 8) {
      return `${numeros.slice(0, 2)}.${numeros.slice(2, 5)}.${numeros.slice(5)}`;
    }

    if (numeros.length <= 12) {
      return `${numeros.slice(0, 2)}.${numeros.slice(2, 5)}.${numeros.slice(
        5,
        8
      )}/${numeros.slice(8)}`;
    }

    return `${numeros.slice(0, 2)}.${numeros.slice(2, 5)}.${numeros.slice(
      5,
      8
    )}/${numeros.slice(8, 12)}-${numeros.slice(12, 14)}`;
  }

  function senhaEhValida(senha) {
    const temNoMinimo8Caracteres = senha.length >= 8;
    const temArroba = senha.includes("@");
    const temLetraMaiuscula = /[A-Z]/.test(senha);
    const temLetraMinuscula = /[a-z]/.test(senha);

    return (
      temNoMinimo8Caracteres &&
      temArroba &&
      temLetraMaiuscula &&
      temLetraMinuscula
    );
  }

  function telefoneEhValido(telefone) {
    const numeros = pegarSomenteNumeros(telefone);

    return numeros.length === 12 || numeros.length === 13;
  }

  function emailEhValido(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function impedirCopiarEColar(evento) {
    evento.preventDefault();
  }

  function limparErroDoCampo(nomeCampo) {
    if (!mensagensErro[nomeCampo]) {
      return;
    }

    setMensagensErro((errosAtuais) => {
      const novosErros = { ...errosAtuais };
      delete novosErros[nomeCampo];
      return novosErros;
    });
  }

  function mostrarErrosPorPoucoTempo(erros) {
    setMensagensErro(erros);

    setTimeout(() => {
      setMensagensErro({});
    }, 3500);
  }

  function atualizarCampoDoFormulario(evento) {
    const { name, value, type, checked } = evento.target;

    limparErroDoCampo(name);
    setMensagemSucesso("");

    if (name === "telefone") {
      setDadosCadastro({
        ...dadosCadastro,
        telefone: formatarTelefone(value),
      });

      return;
    }

    if (name === "cpf") {
      setDadosCadastro({
        ...dadosCadastro,
        cpf: formatarCPF(value),
      });

      return;
    }

    if (name === "cnpj") {
      setDadosCadastro({
        ...dadosCadastro,
        cnpj: formatarCNPJ(value),
      });

      return;
    }

    setDadosCadastro({
      ...dadosCadastro,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function verificarCamposDoCadastro() {
    const errosEncontrados = {};

    if (!dadosCadastro.nome.trim()) {
      errosEncontrados.nome = "Informe seu nome para continuar.";
    }

    if (!dadosCadastro.sobrenome.trim()) {
      errosEncontrados.sobrenome = "Informe seu sobrenome para continuar.";
    }

    if (!dadosCadastro.email.trim()) {
      errosEncontrados.email = "Informe seu e-mail para continuar.";
    } else if (!emailEhValido(dadosCadastro.email)) {
      errosEncontrados.email = "Digite um e-mail válido.";
    }

    if (!dadosCadastro.telefone.trim() || dadosCadastro.telefone === "+55 ") {
      errosEncontrados.telefone = "Informe seu telefone para continuar.";
    } else if (!telefoneEhValido(dadosCadastro.telefone)) {
      errosEncontrados.telefone =
        "Digite um telefone válido com +55, DDD e número.";
    }

    if (tipoUsuario === "cliente" || tipoUsuario === "profissional") {
      const cpfSomenteNumeros = pegarSomenteNumeros(dadosCadastro.cpf);

      if (!cpfSomenteNumeros) {
        errosEncontrados.cpf = "Informe seu CPF para continuar.";
      } else if (cpfSomenteNumeros.length !== 11) {
        errosEncontrados.cpf = "O CPF precisa conter exatamente 11 números.";
      }
    }

    if (tipoUsuario === "profissional") {
      if (!dadosCadastro.areaAtuacao.trim()) {
        errosEncontrados.areaAtuacao = "Informe sua área de atuação.";
      }

      if (!dadosCadastro.registroProfissional.trim()) {
        errosEncontrados.registroProfissional =
          "Informe seu registro profissional.";
      }
    }

    if (tipoUsuario === "fornecedor") {
      const cnpjSomenteNumeros = pegarSomenteNumeros(dadosCadastro.cnpj);

      if (!dadosCadastro.nomeEmpresa.trim()) {
        errosEncontrados.nomeEmpresa = "Informe o nome da empresa.";
      }

      if (!cnpjSomenteNumeros) {
        errosEncontrados.cnpj = "Informe o CNPJ da empresa.";
      } else if (cnpjSomenteNumeros.length !== 14) {
        errosEncontrados.cnpj = "O CNPJ precisa conter exatamente 14 números.";
      }
    }

    if (!dadosCadastro.senha) {
      errosEncontrados.senha = "Crie uma senha para continuar.";
    } else if (!senhaEhValida(dadosCadastro.senha)) {
      errosEncontrados.senha =
        "A senha precisa ter no mínimo 8 caracteres, conter @, letra maiúscula e letra minúscula.";
    }

    if (!dadosCadastro.confirmarSenha) {
      errosEncontrados.confirmarSenha = "Confirme sua senha para continuar.";
    } else if (dadosCadastro.confirmarSenha !== dadosCadastro.senha) {
      errosEncontrados.confirmarSenha = "As senhas precisam ser iguais.";
    }

    if (!dadosCadastro.aceitouTermos) {
      errosEncontrados.aceitouTermos =
        "Você precisa aceitar os termos e a política de privacidade.";
    }

    return errosEncontrados;
  }

  async function cadastrarUsuario(evento) {
    evento.preventDefault();

    const erros = verificarCamposDoCadastro();

    if (Object.keys(erros).length > 0) {
      mostrarErrosPorPoucoTempo(erros);
      return;
    }

    setMensagensErro({});
    setMensagemSucesso("");

    const dadosProntosParaEnviar = {
      tipoUsuario: tipoUsuario,
      nome: dadosCadastro.nome.trim(),
      sobrenome: dadosCadastro.sobrenome.trim(),
      email: dadosCadastro.email.trim(),
      telefone: pegarSomenteNumeros(dadosCadastro.telefone),
      cpf:
        tipoUsuario === "cliente" || tipoUsuario === "profissional"
          ? pegarSomenteNumeros(dadosCadastro.cpf)
          : null,
      cnpj:
        tipoUsuario === "fornecedor"
          ? pegarSomenteNumeros(dadosCadastro.cnpj)
          : null,
      areaAtuacao:
        tipoUsuario === "profissional"
          ? dadosCadastro.areaAtuacao.trim()
          : null,
      registroProfissional:
        tipoUsuario === "profissional"
          ? dadosCadastro.registroProfissional.trim()
          : null,
      nomeEmpresa:
        tipoUsuario === "fornecedor" ? dadosCadastro.nomeEmpresa.trim() : null,
      senha: dadosCadastro.senha,
    };

    try {
      setCarregando(true);

      await fazerCadastro(dadosProntosParaEnviar);

      setMensagemSucesso("Cadastro realizado com sucesso!");

      setTimeout(() => {
        navigate(`/login/${tipoUsuario}`);
      }, 1500);
    } catch (error) {
      mostrarErrosPorPoucoTempo({
        geral: error.message || "Erro ao cadastrar usuário.",
      });
    } finally {
      setCarregando(false);
    }
  }

  return (
    <AuthLayout>
      <div className="cadastro-container">
        <img src={Banner} alt="Krooq" className="cadastro-logo" />

        <h2>Cadastre-se</h2>

        <p className="cadastro-subtitle">
          Bem-vindo, {tipoFormatado}! Por favor, insira seus dados.
        </p>

        {mensagensErro.geral && (
          <div className="caixa-mensagem-erro erro-geral">
            <span>!</span>
            <p>{mensagensErro.geral}</p>
          </div>
        )}

        {mensagemSucesso && (
          <div className="caixa-mensagem-sucesso">
            <p>{mensagemSucesso}</p>
          </div>
        )}

        <form className="cadastro-form" onSubmit={cadastrarUsuario}>
          <div className="cadastro-campo">
            <label>Nome</label>

            <input
              type="text"
              name="nome"
              placeholder="Digite seu nome"
              value={dadosCadastro.nome}
              onChange={atualizarCampoDoFormulario}
              className={mensagensErro.nome ? "input-com-erro" : ""}
              disabled={carregando}
            />

            {mensagensErro.nome && (
              <div className="caixa-mensagem-erro">
                <span>!</span>
                <p>{mensagensErro.nome}</p>
              </div>
            )}
          </div>

          <div className="cadastro-campo">
            <label>Sobrenome</label>

            <input
              type="text"
              name="sobrenome"
              placeholder="Digite seu sobrenome"
              value={dadosCadastro.sobrenome}
              onChange={atualizarCampoDoFormulario}
              className={mensagensErro.sobrenome ? "input-com-erro" : ""}
              disabled={carregando}
            />

            {mensagensErro.sobrenome && (
              <div className="caixa-mensagem-erro">
                <span>!</span>
                <p>{mensagensErro.sobrenome}</p>
              </div>
            )}
          </div>

          {tipoUsuario === "fornecedor" && (
            <div className="cadastro-campo">
              <label>Nome da empresa</label>

              <input
                type="text"
                name="nomeEmpresa"
                placeholder="Digite o nome da empresa"
                value={dadosCadastro.nomeEmpresa}
                onChange={atualizarCampoDoFormulario}
                className={mensagensErro.nomeEmpresa ? "input-com-erro" : ""}
                disabled={carregando}
              />

              {mensagensErro.nomeEmpresa && (
                <div className="caixa-mensagem-erro">
                  <span>!</span>
                  <p>{mensagensErro.nomeEmpresa}</p>
                </div>
              )}
            </div>
          )}

          <div className="cadastro-campo">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Crie uma conta"
              value={dadosCadastro.email}
              onChange={atualizarCampoDoFormulario}
              className={mensagensErro.email ? "input-com-erro" : ""}
              disabled={carregando}
            />

            {mensagensErro.email && (
              <div className="caixa-mensagem-erro">
                <span>!</span>
                <p>{mensagensErro.email}</p>
              </div>
            )}
          </div>

          <div className="cadastro-campo">
            <label>Telefone</label>

            <input
              type="text"
              name="telefone"
              placeholder="+5511999999999"
              value={dadosCadastro.telefone}
              onChange={atualizarCampoDoFormulario}
              className={mensagensErro.telefone ? "input-com-erro" : ""}
              disabled={carregando}
            />

            {mensagensErro.telefone && (
              <div className="caixa-mensagem-erro">
                <span>!</span>
                <p>{mensagensErro.telefone}</p>
              </div>
            )}
          </div>

          {(tipoUsuario === "cliente" || tipoUsuario === "profissional") && (
            <div className="cadastro-campo">
              <label>CPF</label>

              <input
                type="text"
                name="cpf"
                placeholder="Digite seu CPF"
                value={dadosCadastro.cpf}
                onChange={atualizarCampoDoFormulario}
                className={mensagensErro.cpf ? "input-com-erro" : ""}
                disabled={carregando}
              />

              {mensagensErro.cpf && (
                <div className="caixa-mensagem-erro">
                  <span>!</span>
                  <p>{mensagensErro.cpf}</p>
                </div>
              )}
            </div>
          )}

          {tipoUsuario === "fornecedor" && (
            <div className="cadastro-campo">
              <label>CNPJ</label>

              <input
                type="text"
                name="cnpj"
                placeholder="Digite o CNPJ"
                value={dadosCadastro.cnpj}
                onChange={atualizarCampoDoFormulario}
                className={mensagensErro.cnpj ? "input-com-erro" : ""}
                disabled={carregando}
              />

              {mensagensErro.cnpj && (
                <div className="caixa-mensagem-erro">
                  <span>!</span>
                  <p>{mensagensErro.cnpj}</p>
                </div>
              )}
            </div>
          )}

          {tipoUsuario === "profissional" && (
            <>
              <div className="cadastro-campo">
                <label>Área de atuação</label>

                <input
                  type="text"
                  name="areaAtuacao"
                  placeholder="Ex: Arquitetura, Engenharia, Design"
                  value={dadosCadastro.areaAtuacao}
                  onChange={atualizarCampoDoFormulario}
                  className={mensagensErro.areaAtuacao ? "input-com-erro" : ""}
                  disabled={carregando}
                />

                {mensagensErro.areaAtuacao && (
                  <div className="caixa-mensagem-erro">
                    <span>!</span>
                    <p>{mensagensErro.areaAtuacao}</p>
                  </div>
                )}
              </div>

              <div className="cadastro-campo">
                <label>Registro profissional</label>

                <input
                  type="text"
                  name="registroProfissional"
                  placeholder="Digite seu CAU, CREA ou registro"
                  value={dadosCadastro.registroProfissional}
                  onChange={atualizarCampoDoFormulario}
                  className={
                    mensagensErro.registroProfissional ? "input-com-erro" : ""
                  }
                  disabled={carregando}
                />

                {mensagensErro.registroProfissional && (
                  <div className="caixa-mensagem-erro">
                    <span>!</span>
                    <p>{mensagensErro.registroProfissional}</p>
                  </div>
                )}
              </div>
            </>
          )}

          <div className="cadastro-campo">
            <label>Senha</label>

            <div
              className={
                mensagensErro.senha
                  ? "senha-wrapper senha-wrapper-erro"
                  : "senha-wrapper"
              }
            >
              <input
                type={mostrarSenha ? "text" : "password"}
                name="senha"
                placeholder="Crie sua senha"
                value={dadosCadastro.senha}
                onChange={atualizarCampoDoFormulario}
                disabled={carregando}
              />

              <button
                type="button"
                className="senha-eye"
                onClick={() => setMostrarSenha(!mostrarSenha)}
                aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
                disabled={carregando}
              >
                {mostrarSenha ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 3L21 21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10.58 10.58C10.21 10.95 10 11.45 10 12C10 13.1 10.9 14 12 14C12.55 14 13.05 13.79 13.42 13.42"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9.88 5.09C10.56 5.03 11.26 5 12 5C16.5 5 20.27 7.61 22 12C21.5 13.27 20.77 14.37 19.88 15.26"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6.61 6.61C4.61 7.8 3.02 9.66 2 12C3.73 16.39 7.5 19 12 19C13.45 19 14.8 18.73 16.01 18.24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M2 12C3.73 7.61 7.5 5 12 5C16.5 5 20.27 7.61 22 12C20.27 16.39 16.5 19 12 19C7.5 19 3.73 16.39 2 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>

            {mensagensErro.senha ? (
              <div className="caixa-mensagem-erro">
                <span>!</span>
                <p>{mensagensErro.senha}</p>
              </div>
            ) : (
              <small>
                Deve ter no mínimo 8 caracteres, @, letra maiúscula e minúscula.
              </small>
            )}
          </div>

          <div className="cadastro-campo">
            <label>Confirme senha</label>

            <div
              className={
                mensagensErro.confirmarSenha
                  ? "senha-wrapper senha-wrapper-erro"
                  : "senha-wrapper"
              }
            >
              <input
                type={mostrarConfirmarSenha ? "text" : "password"}
                name="confirmarSenha"
                placeholder="Digite sua senha novamente"
                value={dadosCadastro.confirmarSenha}
                onChange={atualizarCampoDoFormulario}
                onPaste={impedirCopiarEColar}
                onCopy={impedirCopiarEColar}
                onCut={impedirCopiarEColar}
                onDrop={impedirCopiarEColar}
                autoComplete="new-password"
                disabled={carregando}
              />

              <button
                type="button"
                className="senha-eye"
                onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}
                aria-label={
                  mostrarConfirmarSenha ? "Ocultar senha" : "Mostrar senha"
                }
                disabled={carregando}
              >
                {mostrarConfirmarSenha ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 3L21 21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10.58 10.58C10.21 10.95 10 11.45 10 12C10 13.1 10.9 14 12 14C12.55 14 13.05 13.79 13.42 13.42"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9.88 5.09C10.56 5.03 11.26 5 12 5C16.5 5 20.27 7.61 22 12C21.5 13.27 20.77 14.37 19.88 15.26"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6.61 6.61C4.61 7.8 3.02 9.66 2 12C3.73 16.39 7.5 19 12 19C13.45 19 14.8 18.73 16.01 18.24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M2 12C3.73 7.61 7.5 5 12 5C16.5 5 20.27 7.61 22 12C20.27 16.39 16.5 19 12 19C7.5 19 3.73 16.39 2 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>

            {mensagensErro.confirmarSenha ? (
              <div className="caixa-mensagem-erro">
                <span>!</span>
                <p>{mensagensErro.confirmarSenha}</p>
              </div>
            ) : (
              <small>Digite manualmente a mesma senha informada acima.</small>
            )}
          </div>

          <label className="cadastro-termos">
            <input
              type="checkbox"
              name="aceitouTermos"
              checked={dadosCadastro.aceitouTermos}
              onChange={atualizarCampoDoFormulario}
              disabled={carregando}
            />

            <span>Aceitar termos e condições política de privacidade</span>
          </label>

          {mensagensErro.aceitouTermos && (
            <div className="caixa-mensagem-erro erro-termos">
              <span>!</span>
              <p>{mensagensErro.aceitouTermos}</p>
            </div>
          )}

          <button type="submit" className="btn-cadastrar" disabled={carregando}>
            {carregando ? "Cadastrando..." : "Cadastrar Agora"}
          </button>

          <button type="button" className="btn-google" disabled={carregando}>
            <img src={GoogleIcon} alt="Google" />
            <span>Entrar com Google</span>
          </button>
        </form>

        <p className="cadastro-login">
          Já tem uma conta? <Link to={`/login/${tipoUsuario}`}>Entrar</Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export default Cadastro;