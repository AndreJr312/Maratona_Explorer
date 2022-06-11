const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const botao = document.querySelector('#botao')
const respostas =[
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é... NÃO",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]

//clicar em fazer pergunta
function perguntar(){

    if(inputPergunta.value == ""){
        alert('Digite sua pergunta')
        return
    }
    
    botao.setAttribute('disabled', true)

    const pergunta ='<div>' + inputPergunta.value + '</div>'

    //gerar numero aleatório
    const totalRespostas = respostas.length
    const numAleatorio = Math.floor(Math.random()*totalRespostas)
    elementoResposta.innerHTML = pergunta + respostas[numAleatorio]

    elementoResposta.style.opacity = 1;
    //sumir pergunta após 3s
    setTimeout(function() {
        elementoResposta.style.opacity = 0;
        botao.removeAttribute('disabled')
    }, 3000)
}