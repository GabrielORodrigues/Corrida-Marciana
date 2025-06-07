//Gustavo Gojo = Seta Para a Direita
//Lilico = Tecla D
//GamesEdu = Tecla Espaço
//Bill▲Cipher = Tecla Enter

var imagemG;
var imagemL;
var imagemB;
var imagemD;
var imagemC; //Solo Da Corrida
var imagemP; //Tela De Pause
var sGojo;
var sLilico;
var sDanonao;
var sBillCipher;
let xJogador = [0, 0, 0, 0];
let yJogador = [5, 80, 180, 285];
let teclas = ["ArrowRight", "d", " ", "Enter"];
let jogadorI = [];
let quantidadeI;
//let jogador = ["😏", "🐓", "☃️", "🌚"];
//let quantidade = jogador.length;


function preload() {
  imagemG = loadImage("Gojo.png");
  imagemL = loadImage("Lilico.png");
  imagemB = loadImage("BillCipher.png");
  imagemD = loadImage("GamesEduUu.png");
  imagemC = loadImage("SoloMarcianoCorrida.png");
  imagemP = loadImage("TelaPausa.jpeg");
  sGojo = loadSound("GojoFalando.mp3");
  sLilico = loadSound("SomGalinha.mp3");
  sDanonao = loadSound("DanonaoGrosso.mp3");
  sBillCipher = loadSound("BillFalando.mp3");
  
}

function setup() {
  createCanvas(400, 400);
  
  jogadorI = [imagemG, imagemL, imagemD, imagemB];
  quantidadeI = jogadorI.length;
}

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background(imagemC, 500);
  } else {
    background(imagemP, 500);
    textAlign(CENTER);
    fill("white");
    text("PAUSADO!!!", 200, 200);
  }
}

function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < quantidadeI; i++) {
      image(jogadorI[i], xJogador[i], yJogador[i], 120, 120);
  }
    /*for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  } */
}

function desenhaLinhaDeChegada() {
  fill("white");
  rect(335, 0, 20, 400);
  fill("black");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(335, yAtual, 20, 10);
  }
}

function verificaVencedor() {
  fill("rgb(38,247,38)");
  textAlign(CENTER);

  if (xJogador[0] > 335) {
    text("Satoru Gojo venceu!", 200, 200);
    sGojo.play();
    noLoop();
  }

  if (xJogador[1] > 335) {
    text("Lilico venceu!", 200, 200);
    sLilico.play();
    noLoop();
  }

  if (xJogador[2] > 335) {
    text("GamesEduUu venceu!", 200, 200);
    sDanonao.play();
    noLoop();
  }
  if (xJogador[3] > 335) {
    text("Bill▲Cipher venceu!", 200, 200);
    sBillCipher.play();
    noLoop();
  }
    /*for (let i = 0; i < quantidade; i++) {
   if (xJogador[i] > 335) {
     text("Gustavo Gojo venceu!", 200, 200);
     noLoop();
   }
    } */
}

function keyReleased() {
  for (let i = 0; i < quantidadeI; i++) {
    if (
      ((key == teclas[i]) !== "d" && key === teclas[i]) ||
      (teclas[i] === "d" && key.toLowerCase() === "d")
    ) {
      xJogador[i] += random(15);
    }
  }
}
