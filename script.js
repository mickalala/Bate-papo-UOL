const nome=prompt("Qual seu lindo nome?");

let erro=0;

const nomes={name:nome};

console.log(nomes)

const promise= axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', nomes);

promise.then(promessarespossta);
promise.catch(tratarErro);

function online(){
    const status=axios.post('https://mock-api.driven.com.br/api/v6/uol/status', nomes);
    console.log('online')
}

setInterval(online, 5000)

function buscarnoserv(){
    const busca=axios.get('https://mock-api.driven.com.br/api/v6/uol/messages')
}

function promessarespossta(resposta){
console.log(resposta.data);
console.log("podeentrraar");
}


function tratarErro(erro) {
     
      console.log("Status code: " + erro.response.status); // Ex: 404
      console.log("Mensagem de erro: " + erro.response.data); // Ex: Not Found
      console.log('Deu erro ao botar os nomes no servidor :(');
   erro=1;
   deuruim()  
}

function deuruim(){
    while(erro==1){
        nome=prompt("Deu ruim, insira outro nome por favor:")
    }
}


function participantesativos(){
    const oculto= document.querySelector('aside');
    oculto.classList.toggle("oculto");
}