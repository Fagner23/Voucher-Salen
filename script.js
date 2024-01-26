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
    bairro: "Macaé",
    endereco: "Av. Rui Barbosa 305 - Centro - Macae - RJ - 27910-362",
    pontoReferencia: "Proximo a Loja Competição // Magazine Luiza",
    horarioAlmoco: {
      inicio: "12:00",
      fim: "13:00",
    },
    expedienteSemana: {
      inicio: "09:00",
      fim: "18:30",
    },
    expedienteFimDeSemana: {
      inicio: "09:00",
      fim: "14:00",
    },
  },
];

const ENCERECOS_RazaRJ = [
  {
    bairro: "Campo De Goycatazes",
    endereco: "Av. Sete De Setembro 466 - Centro - Campo De Goytacazes - RJ - 28013332",
    pontoReferencia: " Em frente da Caixa Econômica Federal- Calçadão de Campos ",
    horarioAlmoco: {
      inicio: "12:00",
      fim: "13:00",
    },
    expedienteSemana: {
      inicio: "10:00",
      fim: "17:00",
    },
    expedienteFimDeSemana: {
      inicio: "10:00",
      fim: "12:00",
    },
  },
];

const ENCERECOS_Midas = [
  {
    bairro: "Bangu",
    endereco: "R Silva Cardoso 21c - Bangu - RJ - 21810-032",
    pontoReferencia: " Fica em frente ao ponto final do onibus 864 ",
    horarioAlmoco: {
      inicio: "12:00",
      fim: "13:00",
    },
    expedienteSemana: {
      inicio: "09:00",
      fim: "17:00",
    },
    expedienteFimDeSemana: {
      inicio: "09:00",
      fim: "15:00",
    },
  },
];

const ENCERECOS_Stile = [
  {
    bairro: "São Vicente",
    endereco: "R. João Ramalho. 864 - Centro - 11310-050 - São Vicente",
    pontoReferencia: " 1°DP  de São Vicente/Skina Modas ",
    horarioAlmoco: {
      inicio: "13:00",
      fim: "14:00",
    },
    expedienteSemana: {
      inicio: "09:30",
      fim: "18:00",
    },
    expedienteFimDeSemana: {
      inicio: "10:00",
      fim: "16:00",
    },
  },

  {
    bairro: "Praia Grande",
    endereco: "R. Oswaldo de Oliveira 192 - Boqueirão -11701-120 - Praia Grande ",
    pontoReferencia: " Av São Paulo eTech Mundo Eletronicoss ",
    horarioAlmoco: {
      inicio: "13:00",
      fim: "14:00",
    },
    expedienteSemana: {
      inicio: "09:30",
      fim: "18:00",
    },
    expedienteFimDeSemana: {
      inicio: "10:00",
      fim: "16:00",
    },
  },

  {
    bairro: "Campinas",
    endereco: "Av.Francisco Glicério,1103 - Centro Campinas ",
    pontoReferencia: " Ao lado do Magazine Luiza ",
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
      fim: "14:00",
    },
  },

];

const ENCERECOS_2Irmãos= [
  {
    bairro: "Praça 8",
    endereco: " Rua Santo Antônio do aventureiro, 151, Jardim Kawamoto  Guarulhos - 071443-040                        ",
    pontoReferencia: " Proximo ao mercado Barbosa da praça 8 ",
    horarioAlmoco: {
      inicio: null,
      fim: null,
    },
    expedienteSemana: {
      inicio: "10:00",
      fim: "15:00",
    },
    expedienteFimDeSemana: {
      inicio: "10:00",
      fim: "12:20",
    },
  },

  {
    bairro: "Ponte Alta",
    endereco: "Avenida Rangel Filho, 1417- Ponte alta, Guarulhos- SP, 07179350                       ",
    pontoReferencia: " Proxímo ao mercado X                             ",
    horarioAlmoco: {
      inicio: null,
      fim: null,
    },
    expedienteSemana: {
      inicio: "10:00",
      fim: "15:00",
    },
    expedienteFimDeSemana: {
      inicio: "10:00",
      fim: "15:00",
    },
  },

];

const ENCERECOS_GoldenMix= [
  {
    bairro: "Tucuruvi",
    endereco: " Av,Tucuruvi,689-Tucuruvi,São Paulo-SP,02305-001                        ",
    pontoReferencia: " Proximo ao Metrô Tucuruvi ",
    horarioAlmoco: {
      inicio: "12:00",
      fim: "13:00",
    },
    expedienteSemana: {
      inicio: "09:00",
      fim: "18:00",
    },
    expedienteFimDeSemana: {
      inicio: "09:00",
      fim: "14:00",
    },
  },

  {
    bairro: "Americana",
    endereco: "Praça Basilio Rangel,11-Centro,Americana-SP,13465-519   ",
    pontoReferencia: " Em frente ao terminal rodoviário       ",
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
    bairro: "Indaiá Itaqua",
    endereco: "R.Cap. José Leite,44 - Centro,Itaquaquecetuba-SP,08570-030                     ",
    pontoReferencia: " Ao lado da loja Marabraz ",
    horarioAlmoco: {
      inicio: null,
      fim: null,
    },
    expedienteSemana: {
      inicio: "09:00",
      fim: "18:30",
    },
    expedienteFimDeSemana: {
      inicio: "09:00",
      fim: "17:00",
    },
  },

  {
    bairro: " Menininha",
    endereco: "  Estrada Do M'Boi Mirim,6059-Parque Do Lago,São Paulo - SP,04941-003  ",
    pontoReferencia: " Ao lado da loja Caedu   ",
    horarioAlmoco: {
      inicio: "13:00",
      fim: "14:00",
    },
    expedienteSemana: {
      inicio: "09:00",
      fim: "17:30",
    },
    expedienteFimDeSemana: {
      inicio: "09:00",
      fim: "16:00",
    },
  },

  {
    bairro: "Francisco Morato",
    endereco: " Rua Gerõnimo Caetano Garcia- 134      ",
    pontoReferencia: " De Frente Casas Bahia  ",
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
      fim: "14:00",
    },
  },

  {
    bairro: "Salto",
    endereco: "Rua Nove de Julho,180 -Centro,Salto -SP,133320-005 ",
    pontoReferencia: "Ao lado das Pernambucanas  ",
    horarioAlmoco: {
      inicio: null,
      fim: null,
    },
    expedienteSemana: {
      inicio: "09:00",
      fim: "17:30",
    },
    expedienteFimDeSemana: {
      inicio: "09:00",
      fim: "13:30",
    },
  },

  {
    bairro: "Cocaia",
    endereco: "Rua Rubens De Oliveira,412,- Parque Res.Cocaia,São Paulo- SP,04849-210                ",
    pontoReferencia: " Ao lado das Casas Bahia Do Residencial Cocaia ",
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
    bairro: " Tatui",
    endereco: " Rua Onze De Agosto,462- Centro,Tatuí-SP,18270-001  ",
    pontoReferencia: " Ao lado da Sergio Calçado   ",
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
      fim: "15:30",
    },
  },

{
  bairro: "Suzano",
  endereco: "Rua General Francisco Glicério,394-Centro,Suzano-SP,08674-000,04849-210                ",
  pontoReferencia: "Proximo a Magazine Luiza e Casas Bahia ",
  horarioAlmoco: {
    inicio: null,
    fim: null,
  },
  expedienteSemana: {
    inicio: "09:00",
    fim: "16:00",
  },
  expedienteFimDeSemana: {
    inicio: null,
    fim: null,
  },
},

{
  bairro: " São José Do Rio Preto",
  endereco: " Rua Bernardino De Campos,2828,Centro- São José Do Rio Preto - 015015300 ",
  pontoReferencia: " Entre a loja Lívias e o Banco Itaú  ",
  horarioAlmoco: {
    inicio: "13:00",
    fim: "14:00",
  },
  expedienteSemana: {
    inicio: "09:00",
    fim: "17:30",
  },
  expedienteFimDeSemana: {
    inicio: "09:00",
    fim: "13:30",
  },
},
  
{
  bairro: " Caçapava",
  endereco: " Rua Capitão João Ramos, 156- Centro Caçapava ",
  pontoReferencia: "Fica no Calçadão,proximo da ArtPel  ",
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
    fim: "14:00",
  },
},

];
///////


const ENCERECOS_GoldenMix2= [
  {
    bairro: "Votorantim ",
    endereco: " Av.31 Março,686 - Centro de Votorantim  SP 18110-005                       ",
    pontoReferencia: " Ao Lado Loja Montreal ",
    horarioAlmoco: {
      inicio: "13:00",
      fim: "14:00",
    },
    expedienteSemana: {
      inicio: "09:00",
      fim: "17:30",
    },
    expedienteFimDeSemana: {
      inicio: "09:00",
      fim: "15:00",
    },
  },

  {
    bairro: "Bauru",
    endereco: "R.Batista De Carvalho,413- Quadra 4 centro Bauru Sp- 17010-0001 ",
    pontoReferencia: " em frente a Drogasil do calçadão Batista de Carvalho      ",
    horarioAlmoco: {
      inicio: null,
      fim: null,
    },
    expedienteSemana: {
      inicio: "09:15",
      fim: "17:45",
    },
    expedienteFimDeSemana: {
      inicio: "12:00",
      fim: "15:30",
    },
  },

  {
    bairro: "Piracicaba",
    endereco: "R.Gov . Pedro de Toledo,1231 - Centro Piracicaba - SP - 13400-07008570-030                     ",
    pontoReferencia: "Ao lado da loja Cibellar na esquina  ",
    horarioAlmoco: {
      inicio: "13:00",
      fim: "14:00",
    },
    expedienteSemana: {
      inicio: "09:00",
      fim: "17:40",
    },
    expedienteFimDeSemana: {
      inicio: "09:00",
      fim: "13:00",
    },
  },

  {
    bairro: " Taubate",
    endereco: "  Praça Dom Epaminondas,47-Centro, Taubate-SP, 12010-020  ",
    pontoReferencia: " Praça Empaminondas  ",
    horarioAlmoco: {
      inicio: "12:30",
      fim: "13:30",
    },
    expedienteSemana: {
      inicio: "09:00",
      fim: "17:00",
    },
    expedienteFimDeSemana: {
      inicio: "09:00",
      fim: "14:00",
    },
  },

  {
    bairro: "Hortolandia",
    endereco: " R. Luis Camilo de Camargo,498-Jardim Santana Hortolandia-SP,13184-420   ",
    pontoReferencia: " Próximo Banco Santander ",
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
      fim: "14:00",
    },
  },

  {
    bairro: "Nicolau ",
    endereco: "Praça Comendador Nicolau Scarpa, 53 - Centro, Sorocaba - SP, 18010-180 ",
    pontoReferencia: "Próximo praça do Relogio   ",
    horarioAlmoco: {
      inicio: "12:00",
      fim: "13:00",
    },
    expedienteSemana: {
      inicio: "09:00",
      fim: "18:00",
    },
    expedienteFimDeSemana: {
      inicio: "09:00",
      fim: "15:00",
    },
  },

  {
    bairro: "Sorocaba",
    endereco: "R.São Bento,39-Centro, Sorocaba-SP,18010-030               ",
    pontoReferencia: "Próximo Banco Brasil  ",
    horarioAlmoco: {
      inicio: "13:00", 
      fim: "14:00",
    },
    expedienteSemana: {
      inicio: "09:00",
      fim: "17:30",
    },
    expedienteFimDeSemana: {
      inicio: "09:00",
      fim: "14:00",
    },
  },

  {
    bairro: " Itapetininga ",
    endereco: " R.Dr Campos Salles,677-Centro,Itapetininga-SP-18200-005 ",
    pontoReferencia: "  Fica inicio da rua campos salles. Primeiro Quarterão  ",
    horarioAlmoco: {
      inicio: "12:00",
      fim: "13:00",
    },
    expedienteSemana: {
      inicio: "09:00",
      fim: "18:00",
    },
    expedienteFimDeSemana: {
      inicio: "09:00",
      fim: "14:30",
    },
  },

{
  bairro: "Pindamonhangaba",
  endereco: "Dr Gustavo de Godoy,41-  Centro Pindamonhangaba-SP,12400-040               ",
  pontoReferencia: "Mercado municipal de Pintamonhangaba e papelaria copiadora copyanet ",
  horarioAlmoco: {
    inicio: "12:30",
    fim: "13:30",
  },
  expedienteSemana: {
    inicio: "09:00",
    fim: "18:00",
  },
  expedienteFimDeSemana: {
    inicio: "09:00",
    fim: "13:00",
  },
},

{
  bairro: " Jacarei",
  endereco: " R.Dr. Lúcio Malta,353-Centro, Jacarei-SP-12237-000",
  pontoReferencia: " Mercadão Municipal   ",
  horarioAlmoco: {
    inicio: "13:00",
    fim: "14:00",
  },
  expedienteSemana: {
    inicio: "09:00",
    fim: "17:30",
  },
  expedienteFimDeSemana: {
    inicio: "09:00",
    fim: "14:00",
  },
},
  
];


const ENCERECOS_Optica_Tradicional = [
  {
    bairro: "Lapa",
    endereco: "Rua Barão De Jundiai,267 -Lapa",
    pontoReferencia: " Proximo a 12 de outubro vindo da estação de trem ",
    horarioAlmoco: {
      inicio: "12:00",
      fim: "13:00",
    },
    expedienteSemana: {
      inicio: "09:30",
      fim: "17:00",
    },
    expedienteFimDeSemana: {
      inicio: "08:00",
      fim: "15:00",
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
