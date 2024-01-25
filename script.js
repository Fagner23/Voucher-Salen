const TICKET_TEMPLATE = `
<section>
    <header> Sua visita está AGENDADA!</header>
    <section>
      <ul>
        <li>
          <span>PACIENTE:{{name}}</span>
        </li>
        <li>
          <span>🗓️ DATA: {{date}}</samp>
        </li>
        <li>
          <span>⏰ HORÁRIO: {{time}}</span>  
        </li>
        <li>
            <span>📍 Nosso endereço: {{local}}</span>  
        </li>
        
    </section>
    <footer>
      <span>Obs: Caso o paciente tenha diabetes ou hipertensão, é necessário que esteja controlada. (ABAIXO DE 150) </span>
      <span>📌 Chegando no local, diga que foi agendado com '{{nomeOperador}}' pelo WhatsApp e apresente o Código {{idOperador}} Assim você irá ganhar o exame de vista 100% gratuito!</span>
    </footer>
  </section>`;

const ENDERECOS_BENETTI = [
  {
    bairro: "Itaquera",
    endereco: "R. Itagimirim, 80 - Jardim Cleide, São Paulo - SP, 08220-530",
    pontoReferencia: "Killer Bees/Proximo a antiga estação itaquera",
    horarioAlmoco: {
      inicio: "13:00",
      fim: "14:00",
    },
    expedienteSemana: {
      inicio: "10:00",
      fim: "16:30",
    },
    expedienteFimDeSemana: {
      inicio: "10:00",
      fim: "16:30",
    },
  },
  {
    bairro: "Ponte Rasa",
    endereco:
      "Av. São Miguel, 4603 - Jardim Cotinha, São Paulo - SP, 03871-100",
    pontoReferencia: "Banco Itaú/ Pernanbucanas",
    horarioAlmoco: {
      inicio: "13:00",
      fim: "14:00",
    },
    expedienteSemana: {
      inicio: "09:00",
      fim: "17:00",
    },
    expedienteFimDeSemana: {
      inicio: "10:00",
      fim: "16:30",
    },
  },
  {
    bairro: "São Miguel Paulista",
    endereco:
      "R. José Otoni , 82 - São Miguel Paulista, São Paulo - SP, 08010-290",
    pontoReferencia: "Ao lado do Mercado Municipal de São Miguel",
    horarioAlmoco: {
      inicio: "13:00",
      fim: "14:00",
    },
    expedienteSemana: {
      inicio: "09:00",
      fim: "17:00",
    },
    expedienteFimDeSemana: {
      inicio: "09:00",
      fim: "16:30",
    },
  },
];

const ENDERECOS_NELLI = [
  {
    bairro: "Artur Alvim",
    endereco:
      "R. Maria Eugênia Célso, 35 - Parque Artur Alvim, São Paulo - SP, 03568-050",
    pontoReferencia: "Ragazzo/Rua Do Metrô",
    horarioAlmoco: {
      inicio: "12:30",
      fim: "13:30",
    },
    expedienteSemana: {
      inicio: "11:00",
      fim: "18:00",
    },
    expedienteFimDeSemana: {
      inicio: "10:00",
      fim: "15:00",
    },
  },
  {
    bairro: "Vila Prudente",
    endereco:
      "Av. Professor Luiz Ignácio Anhaia Mello, 1190 - Q.ta da Paineira, São Paulo - SP, 03154-000",
    pontoReferencia:
      "Proximo a Droga Leste, em frente a praça que da acesso ao metro Vila Prudente",
    horarioAlmoco: null,
    expedienteSemana: {
      inicio: "09:30",
      fim: "17:00",
    },
    expedienteFimDeSemana: {
      inicio: "09:00",
      fim: "16:00",
    },
  },
  {
    bairro: "Vila Maria",
    endereco:
      "Av. das Cerejeiras, 1322 - Jardim Japão, São Paulo - SP, 02124-000",
    pontoReferencia: "Cacau Show/M Kids",
    horarioAlmoco: {
      inicio: "13:30",
      fim: "14:30",
    },
    expedienteSemana: {
      inicio: "10:00",
      fim: "18:00",
    },
    expedienteFimDeSemana: {
      inicio: "10:00",
      fim: "15:00",
    },
  },
  {
    bairro: "São Caetano",
    endereco:
      "R. Visc. de Inhaúma, 207 - Oswaldo Cruz, São Caetano do Sul - SP, 09571-010",
    pontoReferencia: "Churrasco Mimi",
    horarioAlmoco: {
      inicio: "12:00",
      fim: "13:00",
    },
    expedienteSemana: {
      inicio: "09:30",
      fim: "16:30",
    },
    expedienteFimDeSemana: {
      inicio: "10:00",
      fim: "15:00",
    },
  },
  {
    bairro: "Republica",
    endereco: "R. Marconi, 54 - República",
    pontoReferencia: "Entre a Rua 7 de Abril e Barão de Itapetininga",
    horarioAlmoco: null,
    expedienteSemana: {
      inicio: "10:40",
      fim: "16:00",
    },
    expedienteFimDeSemana: null,
  },
  {
    bairro: "Ipiranga",
    endereco: "Rua Vergueiro 6450 - Ipiranga",
    pontoReferencia: "50 m da estação alto do Ipiranga, próximo ao Ragazzo",
    horarioAlmoco: null,
    expedienteSemana: {
      inicio: "10:00",
      fim: "16:30",
    },
    expedienteFimDeSemana: {
      inicio: "10:00",
      fim: "15:30",
    },
  },
];

const ENDERECOS_PERCI = [
  {
    bairro: "Itaquaquecetuba",
    endereco: "R. Caxambú, 30 - Vila Zeferina,Itaquaquecetuba",
    pontoReferencia: "E.E Homero fernado Milano/ vest casa",
    horarioAlmoco: {
      inicio: "13:00",
      fim: "14:00",
    },
    expedienteSemana: {
      inicio: "09:00",
      fim: "17:00",
    },
    expedienteFimDeSemana: {
      inicio: "09:00",
      fim: "17:00",
    },
  },
  {
    bairro: "Santana",
    endereco: "Rua Alfredo Pujol,118",
    pontoReferencia: "Na Rua Do Mc Donald's do quartel á 200m do Metrô Santana",
    horarioAlmoco: {
      inicio: "13:00",
      fim: "14:00",
    },
    expedienteSemana: {
      inicio: "09:00",
      fim: "17:00",
    },
    expedienteFimDeSemana: {
      inicio: "09:00",
      fim: "17:00",
    },
  },
];

const OPERADOR_VENICE = [
  {
    bairro: "Mauá",
    endereco: "R. Ver. Ângelo Gianone,41 C - Centro, Mauá - SP, 09390-070",
    pontoReferencia: "próximo ao Banco do Brasil e a loja de roupas SBX",
    horarioAlmoco: {
      inicio: "13:00",
      fim: "14:00",
    },
    expedienteSemana: {
      inicio: "09:00",
      fim: "18:00",
    },
    expedienteFimDeSemana: {
      inicio: "09:00",
      fim: "18:00",
    },
  },
  {
    bairro: "Cachoeirinha",
    endereco: "Av. Parada Pinto 258",
    pontoReferencia: "Proximo da loja Marisa",
    horarioAlmoco: null,
    expedienteSemana: {
      inicio: "09:00",
      fim: "19:00",
    },
    expedienteFimDeSemana: {
      inicio: "09:00",
      fim: "17:00",
    },
  },
];

const ENCERECOS_ZAFF = [
  {
    bairro: "",
    endereco: "",
    pontoReferencia: "",
    horarioAlmoco: {
      inicio: "",
      fim: "",
    },
    expedienteSemana: {
      inicio: "",
      fim: "",
    },
    expedienteFimDeSemana: {
      inicio: "",
      fim: "",
    },
  },
];

const OTICAS_ENDERECOS = {
  Benetti: ENDERECOS_BENETTI,
  Lelli: ENDERECOS_NELLI,
  Perci: ENDERECOS_PERCI,
  Venice: OPERADOR_VENICE,
};

function captureAndSave() {
  // Captura o elemento voucherMessage
  var elementToCapture = document.getElementById("voucherMessage");

  // Usa html2canvas para capturar a tela
  html2canvas(elementToCapture).then(function (canvas) {
    // Converte o canvas para uma imagem URL
    var dataURL = canvas.toDataURL();

    // Cria um link temporário e define o atributo de download para salvar a imagem
    var link = document.createElement("a");
    link.href = dataURL;
    link.download = "voucher.png";

    // Simula um clique no link para iniciar o download
    link.click();
  });
}

const allFieldsHaveValue = ({
  name,
  otica,
  local,
  rawDate,
  time,
  idOperador,
}) => name && otica && local && rawDate && time && idOperador;

function generateVoucher() {
  const formFields = {
    name: document.getElementById("#name").value,
    local: document.getElementById("#local").value,
    otica: document.getElementById("#otica").value,
    date: document.getElementById("#date").value,
    time: document.getElementById("#time").value,
    nomeOperador: document.getElementById("#nomeOperador").value,
    idOperador: document.getElementById("#idOperador").value,
  };

  if (!allFieldsHaveValue(formFields)) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("modal").style.display = "block";
  } else {
    const dateParts = formFields.date.split("-");
    const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
    const updatedFormFields = { ...formFields, rawDate: formattedDate };

    const filledTemplate = Mustache.render(TICKET_TEMPLATE, updatedFormFields);

    $("#voucherMessage").append(filledTemplate);
    $("#voucherDisplay").removeClass("hidden");
  }
}

function definirLabelEndereco(endereco, bairro) {
  const pedacosEndereco = endereco.split(",");
  const ruaComNumero = `${pedacosEndereco[0]}${pedacosEndereco[1]}`;

  return ruaComNumero.endsWith(bairro)
    ? ruaComNumero
    : `${ruaComNumero} - ${bairro}`;
}

function carregarOticasNoDropdown() {
  const selectOperadores = document.getElementById("otica");
  const todasOticas = Object.keys(OTICAS_ENDERECOS);

  todasOticas.forEach((key) => {
    const option = document.createElement("option");
    option.value = key;
    option.text = key;
    selectOperadores.appendChild(option);
  });

  carregarEnderecosNoDropdown(todasOticas[0]);
}

function deletarFilhosDoElemento(idElemento) {
  const elemento = document.getElementById(idElemento);

  if (elemento) {
    while (elemento.firstChild) {
      elemento.removeChild(elemento.firstChild);
    }
  }
}

function carregarEnderecosNoDropdown(oticaSelecionada) {
  OTICAS_ENDERECOS[oticaSelecionada].forEach((loja) => {
    const option = document.createElement("option");
    option.value = loja.bairro;
    option.text = definirLabelEndereco(loja.endereco, loja.bairro);

    document.getElementById("local").appendChild(option);
  });
}

function fecharModalError() {
  document.getElementById("modalErro").classList.add("hide-element");
  document.getElementById("modalErroOverlay").classList.add("hide-element");
}

function exibirModalError() {
  document.getElementById("modalErro").removeClass("hide-element");
  document.getElementById("modalErroOverlay").removeClass("hide-element");
}

window.addEventListener("DOMContentLoaded", () => {
  carregarOticasNoDropdown();
});

document.getElementById("otica").addEventListener("change", function (event) {
  deletarFilhosDoElemento("local");
  carregarEnderecosNoDropdown(event.target.value);
});
