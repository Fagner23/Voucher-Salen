$(document).ready(fillOpticalStores);

function captureAndSave() {
  // Captura o elemento voucherMessage
  var elementToCapture = document.getElementById('voucherMessage');

  // Usa html2canvas para capturar a tela
  html2canvas(elementToCapture).then(function (canvas) {
    // Converte o canvas para uma imagem URL
    var dataURL = canvas.toDataURL();

    // Cria um link temporário e define o atributo de download para salvar a imagem
    var link = document.createElement('a');
    link.href = dataURL;
    link.download = 'voucher.png';

    // Simula um clique no link para iniciar o download
    link.click();
  });
}

function fillOpticalStores() {
  const oticaList = ["BENETTI", "LELLI", "PERCI", "VENICE", "ZAFF", "RAZA RJ", "MIDAS", "STILE", "2 IRMÃOS", "GOLDEN MIX", "GOLDEN MIX 2", "OTICA TRADICIONAL"];
  const localList = ["BENETTI - Itaquera - R. Itagimirim, 80 - Jardim Cleide, São Paulo - SP, CEP 08220-530", " Av. São Miguel, 4603 - Jardim Cotinha, São Paulo - SP,CEP 03871-100", "R. José Otoni, 82 - São Miguel Paulista, São Paulo - SP, CEP 08010-290","","LELLI - R. Maria Eugênia Célso, 35 - Parque Artur Alvim, São Paulo - SP CEP 03568-050", "Av. Professor Luiz Ignácio Anhaia Mello, 1190 - Q. ta da Paineira, São Paulo - SP CEP 03154-000","Av. das Cerejeiras, 1322 - Jardim Japão, São Paulo - SP CEP 02124-000", "R. Visc. de Inhaúma, 207 - Oswaldo Cruz, São Caetano do Sul - SP,CEP 09571-010","R. marconi,54 - Republica", "Rua Vergueiro 6450 - Ipiranga","","PERCI - R. Caxambú, 30 - Vila Zeferina - Itaquaquecetuba", "Rua Alfredo Puiol 118 - Santana","","VENICE - R. Ver. Angelo Gianone, 41 C - Centro, Mauá - SP,CEP 09390-070", "Av. Parada Pinto 258 - Cachoeirinha","","ZAFF - Av. Rui Barbosa 305 - Centro - Macae - RJ - CEP 27910-362","", "RAZA RJ - Av.sete de setembro466 - Centro - Campo do Goytacazes - RJ - CEO 28013332","Local 2", "Local 3","Local 2", "Local 3","Local 2", "Local 3"];

  oticaList.forEach(otica => $("#otica").append(new Option(otica, otica)));
  localList.forEach(local => $("#local").append(new Option(local, local)));
}
function generateVoucher() {
  const name = $('#name').val();
  const selectedLocal = $('#local').val();
  const selectedOtica = $('#otica').val();
  const rawDate = $('#date').val();
  const time = $('#time').val();

  if (name && selectedOtica && selectedLocal && rawDate && time) {
   
    const dateParts = rawDate.split("-");
    const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;

    const voucherMessage = `Parabéns,${name}! Você acabou de receber um cupom de desconto para ser utilizado na Ótica ${selectedOtica} - ${selectedLocal}  dia ${formattedDate} às ${time}h \n\n                                                      

   `;
    
     

    $('#voucherMessage').text(voucherMessage);
    $('#voucherDisplay').removeClass('hidden');
  } else {
    alert('Por favor, preencha todos os campos.');
  }
}