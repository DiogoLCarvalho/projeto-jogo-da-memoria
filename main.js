// Array q contém todas a imgs duplicadas
const cardArray = [
    {
        nome: 'brasil',
        img: 'img/brazil.png'
    },
    {
        nome: 'brasil',
        img: 'img/brazil.png'
    },
    {
        nome: 'equador',
        img: 'img/ecuador.png'
    },
    {
        nome: 'equador',
        img: 'img/ecuador.png'
    },
    {
        nome: 'portugal',
        img: 'img/portugal.png'
    },
    {
        nome: 'portugal',
        img: 'img/portugal.png'
    },
    {
        nome: 'uruguai',
        img: 'img/uruguay.png'
    },
    {
        nome: 'uruguai',
        img: 'img/uruguay.png'
    },
    {
        nome: 'estados Unidos',
        img: 'img/united-states.png'
    },
    {
        nome: 'estados Unidos',
        img: 'img/united-states.png'
    },
    {
        nome: 'argentina',
        img: 'img/argentina.png'
    },
    {
        nome: 'argentina',
        img: 'img/argentina.png'
    }
]

// Aleatorizar os elementos do cardArray para criar o jogo
// O método sort() ordena os elementos do próprio array e retorna o array.
cardArray.sort(() => 0.5 - Math.random());



// div q vai estar as imagens
const divCards = document.querySelector('#cards');

// Texto Movimentos
const resultado = document.querySelector('#resultado');

// para colocar o nome do elemento selecionado
var cardEscolhido = [];

// para colocar o id do elemento selecionado
var cardEscolhidoId = [];

// para colocar os cards q combinam
var cardCombinados = [];




// Colocando imagem na div
function IniciandoJogo() {
    // para cada elemento do cardArray
    for (let i = 0; i < cardArray.length; i++) {
        // crie um tag img
        var card = document.createElement('img');

        // a cada img a imagem vai ser a padrão com o fundo rosa
        card.setAttribute('src', 'img/startImage.png');

        // crie um data attribute especifico. Tipo img[0] tem a  id 0
        card.setAttribute('data-id', i);

        card.addEventListener('click',virarCard);

        // colocar tudo na div
        divCards.appendChild(card);
    }
}

// Verificar se é igual
function verificarCard() {
    // pegue todas as imagens
    let cards = document.querySelectorAll('img');

    // Coloque em variaveis os valores dos id
    const opcaoUm = cardEscolhidoId[0];
    const opcaoDois = cardEscolhidoId[1];

 

    if (cardEscolhido[0] === cardEscolhido[1]) {
        // alert('Eles combinam!');
        // trocar imagem
        // cards[opcaoUm].setAttribute('src', 'img/endGameImage.png');
        // cards[opcaoDois].setAttribute('src', 'img/endGameImage.png');

        // Acho melhor tirar os elementos ao acertar
        // cards[opcaoUm].style.visibility = 'hidden';
        // cards[opcaoDois].style.visibility = 'hidden';


        cards[opcaoUm].setAttribute('class','animationClose');
        cards[opcaoDois].setAttribute('class','animationClose');
        
        cardCombinados.push(cardEscolhido);

    } else {
        // alert('Tente novamente');

        cards[opcaoUm].setAttribute('class','animationWrong');
        cards[opcaoDois].setAttribute('class','animationWrong');

        setTimeout(()=>{
            cards[opcaoUm].removeAttribute('class');
            cards[opcaoUm].setAttribute('src', 'img/startImage.png');
        }, 500);

        setTimeout(()=>{
            cards[opcaoDois].removeAttribute('class');
            cards[opcaoDois].setAttribute('src', 'img/startImage.png');
        }, 500);

        
        // cards[opcaoUm].setAttribute('src', 'img/startImage.png');
        // cards[opcaoDois].setAttribute('src', 'img/startImage.png');
    }
    // zerar os valores dos arrays
    cardEscolhido = [];
    cardEscolhidoId = [];
    resultado.textContent = cardCombinados.length;

    // Pegue o tag img e reinicie para vc clicar nele novamente
    cards[opcaoUm].style.pointerEvents="auto";
    cards[opcaoDois].style.pointerEvents="auto";
    cards[opcaoUm].removeAttribute('id');
    cards[opcaoDois].removeAttribute('id');


    // tem q ser divido por dois pq vc esta dobrando no cardArray
    if (cardCombinados.length === cardArray.length / 2) {
        resultado.textContent = 'Parabéns! Você combinou todos os cards!'
    }
}


// Selecionar Card
function virarCard() {
    // já que a função vai ser iniciada com o click. Ao clicar pegue o data-id do elemento clicado
    var cardId = this.getAttribute('data-id');
    
    // coloque no array o nome do id(numero) do array clicado acima. Clico na imagem do Brasil q tem id 0; coloque nesse array o nome brasil
    cardEscolhido.push(cardArray[cardId].nome);

    // mesmo esquema q o de cima, só q aqui apenas adicione o id
    cardEscolhidoId.push(cardId);

    // Vc vc executa esta função vc clicou em algum elemento, então de acordo com o id do elemento coloque a imagem q esta no cardArray
    this.setAttribute('src', cardArray[cardId].img);

    // Pegue o tag img e quando vc clicar nele vc não pode clicar novamente nele pq esta oculto
    let cards = document.querySelectorAll('img');
    cards[cardId].style.pointerEvents="none";
    cards[cardId].setAttribute('id','animationOpen');

    // Então, vc vai poder executar está função duas vezes, para verificar o q vc escolheu 
    if (cardEscolhido.length === 2) {
        setTimeout(verificarCard, 100)
    }
}


IniciandoJogo();
