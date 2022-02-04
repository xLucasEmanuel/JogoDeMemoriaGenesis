let order = [];
let clickedOrder = [];
let score = 0;

// 0 - verde
// 1 - vernelho
// 2 - amarelo
// 3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


// cria ordem aleatória
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random()* 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for(let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i)+ 1);
  }

}

// Acendo a proxima cor
let lightColor = (element , number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('selected');

  });

}
// check se os botões clicados estão realmente certos
let checkOrder = () => {
  for(let i in clickedOrder) {
    if(clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if(clickedOrder.length == order.length){
    alert(`Pontuação: ${score}\n Você acertou! Iniciando o próximo nível!`);
    nextLevel();
  }
}
//função para o click do usuário
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected')
    checkOrder ();
  },250);

  
}

//função que retorna a cor
let createColorElement = (color) => {
  if(color == 0) {
    return green;
  } else if(color == 1) {
    return red;
  } else if (color == 2) {
    return yellow;
  } else if (color == 3) {
    return blue;
  }
}

//funcao proximo nivel

let nextLevel = () => {
  score++;
  shuffleOrder();
}

//Game over

let gameOver = () => {
  alert(`Pontuação: ${score}\n Fim de jogo!\n Clique em Ok para jogar novamente`);
  order = [];
  clickedOrder = [];

  playGame();
}

let playGame = () => {
  alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
  score = 0;

  nextLevel();
}

// click para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();