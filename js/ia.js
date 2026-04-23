/*

const btnAnalisar = document.querySelector(".btn-principal");
const btnLimpar = document.querySelector(".btn-secundario");

const tipoProjeto = document.getElementById("tipoProjeto");
const estiloDesejado = document.getElementById("estiloDesejado");
const descricaoProjeto = document.getElementById("descricaoProjeto");
const imagemReferencia = document.getElementById("imagemReferencia");

const destaqueTitulo = document.querySelector(".destaque h3");
const destaqueTexto = document.querySelector(".destaque p");

const cardsResultado = document.querySelectorAll(".grid-resultados .card-resultado p");

const previewBox = document.querySelector(".preview-box");

function capitalizar(texto) {
  if (!texto) return "";
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function exibirMensagemErro(mensagem) {
  destaqueTitulo.textContent = "Preencha as informações necessárias";
  destaqueTexto.textContent = mensagem;

  cardsResultado[0].textContent = "Aguardando informações";
  cardsResultado[1].textContent = "Aguardando informações";
  cardsResultado[2].textContent = "Aguardando informações";
  cardsResultado[3].textContent = "Aguardando informações";

  previewBox.innerHTML = `
    <p>
      Aqui poderá aparecer o croqui gerado, a imagem analisada
      ou uma visualização inicial do conceito proposto.
    </p>
  `;
}

function limparResultado() {
  destaqueTitulo.textContent = "Seu projeto ainda não foi analisado";
  destaqueTexto.textContent =
    "Assim que você preencher os campos e iniciar a análise, a KROOQ IA poderá sugerir estilo arquitetônico, materiais, volumetria e direcionamento visual.";

  cardsResultado[0].textContent = "Aguardando informações";
  cardsResultado[1].textContent = "Aguardando informações";
  cardsResultado[2].textContent = "Aguardando informações";
  cardsResultado[3].textContent = "Aguardando informações";

  previewBox.innerHTML = `
    <p>
      Aqui poderá aparecer o croqui gerado, a imagem analisada
      ou uma visualização inicial do conceito proposto.
    </p>
  `;
}

function atualizarResultado(estilo, materiais, volumetria, iluminacao, resumo) {
  destaqueTitulo.textContent = "Projeto analisado com sucesso";
  destaqueTexto.textContent = resumo;

  cardsResultado[0].textContent = estilo;
  cardsResultado[1].textContent = materiais;
  cardsResultado[2].textContent = volumetria;
  cardsResultado[3].textContent = iluminacao;
}

function gerarCroquiFake(tipo, estilo, materiais) {
  previewBox.innerHTML = `
    <div class="croqui-fake">
      <div class="croqui-info">
        <span class="croqui-tag">Prévia gerada</span>
        <h4>${capitalizar(tipo || "Projeto")} conceitual</h4>
        <p>Estilo: ${estilo}</p>
        <p>Materiais: ${materiais}</p>
      </div>
    </div>
  `;
}

function mostrarImagemPreview(file, tipo, estilo, materiais) {
  const reader = new FileReader();

  reader.onload = function (e) {
    previewBox.innerHTML = `
      <div class="imagem-preview">
        <img src="${e.target.result}" alt="Imagem enviada pelo usuário">
        <div class="imagem-preview-texto">
          <span class="croqui-tag">Imagem enviada</span>
          <p>A referência visual foi carregada com sucesso para apoio na análise.</p>
          <p><strong>${capitalizar(tipo)}</strong> com estilo <strong>${estilo}</strong> e materiais sugeridos: <strong>${materiais}</strong>.</p>
        </div>
      </div>
    `;
  };

  reader.readAsDataURL(file);
}

async function analisarProjeto() {
  const tipo = tipoProjeto.value.trim();
  const estilo = estiloDesejado.value.trim();
  const descricao = descricaoProjeto.value.trim();
  const arquivo = imagemReferencia.files[0];

  if (!tipo) {
    exibirMensagemErro("Selecione primeiro o tipo de projeto para a IA entender o contexto da análise.");
    return;
  }

  if (!descricao) {
    exibirMensagemErro("Descreva o projeto para que a KROOQ IA possa analisar estilo, materiais e volumetria.");
    return;
  }

  destaqueTitulo.textContent = "Analisando projeto...";
  destaqueTexto.textContent = "A KROOQ IA está processando as informações enviadas.";

  try {
    const resposta = await fetch("http://127.0.0.1:5000/analisar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        tipoProjeto: tipo,
        estiloDesejado: estilo,
        descricaoProjeto: descricao
      })
    });

    const dados = await resposta.json();

    if (!resposta.ok) {
      exibirMensagemErro(dados.erro || "Não foi possível analisar o projeto.");
      return;
    }

    atualizarResultado(
      dados.estilo,
      dados.materiais,
      dados.volumetria,
      dados.iluminacao,
      dados.resumo
    );

    if (arquivo) {
      mostrarImagemPreview(arquivo, tipo, dados.estilo, dados.materiais);
    } else {
      gerarCroquiFake(tipo, dados.estilo, dados.materiais);
    }
  } catch (erro) {
    exibirMensagemErro("Não foi possível conectar ao backend em Python. Verifique se o servidor Flask está rodando.");
    console.error("Erro ao conectar com o backend:", erro);
  }
}

btnAnalisar.addEventListener("click", analisarProjeto);

btnLimpar.addEventListener("click", function () {
  setTimeout(() => {
    limparResultado();
  }, 50);
});

*/




const form = document.querySelector(".form-ia");
const btnAnalisar = document.querySelector(".btn-principal");
const btnLimpar = document.querySelector(".btn-secundario");

const tipoProjeto = document.getElementById("tipoProjeto");
const estiloDesejado = document.getElementById("estiloDesejado");
const descricaoProjeto = document.getElementById("descricaoProjeto");
const imagemReferencia = document.getElementById("imagemReferencia");

const destaqueTitulo = document.querySelector(".destaque h3");
const destaqueTexto = document.querySelector(".destaque p");

const cardsResultado = document.querySelectorAll(".grid-resultados .card-resultado p");

const previewBox = document.querySelector(".preview-box");

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function capitalizar(texto) {
  if (!texto) return "";
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function analisarEstilo(texto, estiloSelecionado) {
  const t = normalizarTexto(texto);

  if (estiloSelecionado) {
    return capitalizar(estiloSelecionado);
  }

  if (t.includes("brutalista") || t.includes("concreto aparente")) return "Brutalista";
  if (t.includes("industrial") || t.includes("tijolo aparente") || t.includes("metal")) return "Industrial";
  if (t.includes("minimalista") || t.includes("linhas retas") || t.includes("limpo")) return "Minimalista";
  if (t.includes("classico") || t.includes("colunas") || t.includes("ornamentos")) return "Clássico";
  if (t.includes("tradicional") || t.includes("telhado inclinado") || t.includes("telhado duas aguas")) return "Tradicional";

  return "Moderno";
}

function analisarMateriais(texto) {
  const t = normalizarTexto(texto);
  const materiais = [];

  if (t.includes("concreto")) materiais.push("Concreto");
  if (t.includes("vidro")) materiais.push("Vidro");
  if (t.includes("madeira")) materiais.push("Madeira");
  if (t.includes("tijolo")) materiais.push("Tijolo");
  if (t.includes("pedra")) materiais.push("Pedra");
  if (t.includes("porcelanato")) materiais.push("Porcelanato");
  if (t.includes("metal")) materiais.push("Metal");
  if (t.includes("aco")) materiais.push("Aço");
  if (t.includes("reboco")) materiais.push("Reboco");
  if (t.includes("cimento")) materiais.push("Cimento queimado");

  if (materiais.length === 0) {
    return "Materiais não identificados na descrição";
  }

  return materiais.join(", ");
}

function analisarIluminacao(texto) {
  const t = normalizarTexto(texto);

  const temNatural =
    t.includes("iluminacao natural") ||
    t.includes("luz natural") ||
    t.includes("janela grande") ||
    t.includes("janelas grandes") ||
    t.includes("aberturas") ||
    t.includes("claridade");

  const temArtificial =
    t.includes("led") ||
    t.includes("spot") ||
    t.includes("arandela") ||
    t.includes("pendente") ||
    t.includes("fita de led") ||
    t.includes("iluminacao artificial");

  if (temNatural && temArtificial) return "Mista";
  if (temNatural) return "Natural";
  if (temArtificial) return "Artificial";

  return "Mista";
}

function analisarVolumetria(texto, tipo) {
  const t = normalizarTexto(texto);

  if (tipo === "fachada") {
    if (t.includes("sobrado") || t.includes("2 pavimentos") || t.includes("dois pavimentos")) {
      return "Dois pavimentos com composição vertical";
    }

    if (t.includes("terrea") || t.includes("terreo") || t.includes("casa terrea")) {
      return "Casa térrea com composição horizontal";
    }

    if (t.includes("pe direito duplo")) {
      return "Volume com pé-direito duplo";
    }

    return "Volumetria contemporânea em blocos";
  }

  if (tipo === "interior") {
    if (t.includes("conceito aberto") || t.includes("integrado") || t.includes("integrada")) {
      return "Ambientes integrados em conceito aberto";
    }

    if (t.includes("pe direito duplo")) {
      return "Ambiente amplo com pé-direito duplo";
    }

    return "Ambiente interno com organização funcional";
  }

  if (tipo === "planta") {
    if (t.includes("3 quartos") || t.includes("tres quartos")) {
      return "Planta com três dormitórios";
    }

    if (t.includes("suite")) {
      return "Planta com suíte principal";
    }

    if (t.includes("integrada")) {
      return "Planta com setor social integrado";
    }

    return "Planta residencial com distribuição básica";
  }

  return "Volumetria não identificada";
}

function gerarResumo(tipo, estilo, materiais, iluminacao, volumetria) {
  const tipoFormatado = tipo ? capitalizar(tipo) : "Projeto";

  return `A KROOQ IA identificou uma proposta de ${tipoFormatado.toLowerCase()} com linguagem ${estilo.toLowerCase()}, presença de ${materiais.toLowerCase()} e foco em iluminação ${iluminacao.toLowerCase()}. A composição sugere ${volumetria.toLowerCase()}.`;
}

function gerarCroquiFake(tipo, estilo, materiais) {
  let conteudo = `
    <div class="croqui-fake">
      <div class="croqui-info">
        <span class="croqui-tag">Prévia gerada</span>
        <h4>${capitalizar(tipo || "Projeto")} conceitual</h4>
        <p>Estilo: ${estilo}</p>
        <p>Materiais: ${materiais}</p>
      </div>
    </div>
  `;

  previewBox.innerHTML = conteudo;
}

function mostrarImagemPreview(file) {
  const reader = new FileReader();

  reader.onload = function (e) {
    previewBox.innerHTML = `
      <div class="imagem-preview">
        <img src="${e.target.result}" alt="Imagem enviada pelo usuário">
        <div class="imagem-preview-texto">
          <span class="croqui-tag">Imagem enviada</span>
          <p>A referência visual foi carregada com sucesso para apoio na análise.</p>
        </div>
      </div>
    `;
  };

  reader.readAsDataURL(file);
}

function atualizarResultado(estilo, materiais, volumetria, iluminacao, resumo) {
  destaqueTitulo.textContent = "Projeto analisado com sucesso";
  destaqueTexto.textContent = resumo;

  cardsResultado[0].textContent = estilo;
  cardsResultado[1].textContent = materiais;
  cardsResultado[2].textContent = volumetria;
  cardsResultado[3].textContent = iluminacao;
}

function exibirMensagemErro(mensagem) {
  destaqueTitulo.textContent = "Preencha as informações necessárias";
  destaqueTexto.textContent = mensagem;

  cardsResultado[0].textContent = "Aguardando informações";
  cardsResultado[1].textContent = "Aguardando informações";
  cardsResultado[2].textContent = "Aguardando informações";
  cardsResultado[3].textContent = "Aguardando informações";

  previewBox.innerHTML = `
    <p>
      Aqui poderá aparecer o croqui gerado, a imagem analisada
      ou uma visualização inicial do conceito proposto.
    </p>
  `;
}

function limparResultado() {
  destaqueTitulo.textContent = "Seu projeto ainda não foi analisado";
  destaqueTexto.textContent =
    "Assim que você preencher os campos e iniciar a análise, a KROOQ IA poderá sugerir estilo arquitetônico, materiais, volumetria e direcionamento visual.";

  cardsResultado[0].textContent = "Aguardando informações";
  cardsResultado[1].textContent = "Aguardando informações";
  cardsResultado[2].textContent = "Aguardando informações";
  cardsResultado[3].textContent = "Aguardando informações";

  previewBox.innerHTML = `
    <p>
      Aqui poderá aparecer o croqui gerado, a imagem analisada
      ou uma visualização inicial do conceito proposto.
    </p>
  `;
}

btnAnalisar.addEventListener("click", function () {
  const tipo = tipoProjeto.value.trim();
  const estiloSelecionado = estiloDesejado.value.trim();
  const descricao = descricaoProjeto.value.trim();
  const arquivo = imagemReferencia.files[0];

  if (!tipo) {
    exibirMensagemErro("Selecione primeiro o tipo de projeto para a IA entender o contexto da análise.");
    return;
  }

  if (!descricao) {
    exibirMensagemErro("Descreva o projeto para que a KROOQ IA possa analisar estilo, materiais e volumetria.");
    return;
  }

  const estilo = analisarEstilo(descricao, estiloSelecionado);
  const materiais = analisarMateriais(descricao);
  const iluminacao = analisarIluminacao(descricao);
  const volumetria = analisarVolumetria(descricao, tipo);
  const resumo = gerarResumo(tipo, estilo, materiais, iluminacao, volumetria);

  atualizarResultado(estilo, materiais, volumetria, iluminacao, resumo);

  if (arquivo) {
    mostrarImagemPreview(arquivo);
  } else {
    gerarCroquiFake(tipo, estilo, materiais);
  }
});

btnLimpar.addEventListener("click", function () {
  setTimeout(() => {
    limparResultado();
  }, 50);
});
