const nome=prompt("Qual seu lindo nome?");

let Mal=0;

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
    busca.then(respostachegou)

}

function respostachegou(respostaa){
    console.log(respostaa);
    renderizamsg(respostaa.data);
}

function renderizamsg(mensage){


    const lista=document.querySelector('.chat');
    


    lista.innerHTML='';

    for(let index = 0; index < mensage.length; index++){
        const tipo=(mensage[index].type)
        if(tipo==="status"){
       lista.innerHTML= lista.innerHTML +  `<div class="entrouousaiu msg">
         <span class="hora">(${mensage[index].time}) </span>
         <span class="name"> ${mensage[index].from}</span>
         <span class="msgm">  ${mensage[index].text} </span>
         </div>
    `
   
    }else if(tipo==="message"){
        lista.innerHTML= lista.innerHTML +  `<div class="normal msg">
         <span class="hora">(${mensage[index].time}) </span>
         <span class="name"> ${mensage[index].from}</span>
         <span class="to">para ${mensage[index].to}:</span>
         <span class="msgm">  ${mensage[index].text} </span>
         </div>`
    }else{
        const destino=(mensage[index].to)
        if(destino===nome){
        lista.innerHTML= lista.innerHTML +  `<div class="reservadamente msg">
        <span class="hora">(${mensage[index].time}) </span>
        <span class="name"> ${mensage[index].from}</span>
        <span class="to">para ${mensage[index].to}:</span>
        <span class="msgm">  ${mensage[index].text} </span>
        </div>`}
    }
}
  rolarprofim();
}

function rolarprofim(){
  const aparece= document.querySelector('.chat div:last-child')
aparece.scrollIntoView();  
}

function adicionamensagem(){
    const novamsg=document.querySelector('input').value;
    const novamsgm={
        
            from: nome,
            to: "Todos ",
            text: novamsg,
            type: "message" // ou "private_message" para o bônus
        
    }
    
    const postnovamsg= axios.post('https://mock-api.driven.com.br/api/v6/uol/messages',novamsgm);
    console.log("enviouanovamsg");
    postnovamsg.then(promessadonovopost());
    postnovamsg.catch(errononovopost());
}

function promessadonovopost(){
    console.log(' resposta do servidor chegou!!!!!!');
    console.log(resposta);
    buscarnoserv();
}

function errononovopost(){
    console.log('Deu ruim!!! A mensagem não foi salva!!!!');
    console.log(erro);
}

function promessarespossta(resposta){
console.log(resposta.data);
console.log("podeentrraar");

}
setInterval(buscarnoserv,300)


function tratarErro(erro) {
     
      console.log("Status code: " + erro.response.status); // Ex: 404
      console.log("Mensagem de erro: " + erro.response.data); // Ex: Not Found
      console.log('Deu erro ao botar os nomes no servidor :(');
   Mal=1;
   deuruim()  
}

function deuruim(){
  while(Mal !== 0){
        alert("Deu ruim, insira outro nome por favor:");
        window.location.reload()
        Mal=0;
    }
}


function participantesativos(){
    const oculto= document.querySelector('aside');
    oculto.classList.toggle("oculto");
}