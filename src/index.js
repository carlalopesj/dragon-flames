//Declarando variaveis
let prata = 0;
let saude = 0;
let xp = 0;
let lutando = 0;
let saudeMonstro;
let arma_atual = 0;
let mochila = ["Graveto"];

const body = document.querySelector('.estrutura');
const cabecalho_jogo = document.querySelector('.cabecalho-jogo');
const btn_voltar = document.querySelector('#btn-voltar');
const btn_home = document.querySelector('#btn-home');
const xp_text = document.querySelector('#info-xp');
const prata_text = document.querySelector('#info-prata');
const saude_text = document.querySelector('#info-saude');
const arma_text = document.querySelector('#info-arma');

const stts_monstro = document.querySelector('.stts-monstro');
const nome_monstro = document.querySelector('#nome-monstro');
const saude_monstro = document.querySelector('#saude-monstro');

const titulo = document.querySelector('#info-titulo');
const subtitulo_1 = document.querySelector('#subtitulo-escolha1');
const subtitulo_2 = document.querySelector('#subtitulo-escolha2');
const subtitulo_3 = document.querySelector('#subtitulo-escolha3');
const img_1 = document.querySelector('#img-1');
const img_2 = document.querySelector('#img-2');
const img_3 = document.querySelector('#img-3');
const btn_1 = document.querySelector('#btn-1');
const btn_2 = document.querySelector('#btn-2');
const btn_3 = document.querySelector('#btn-3');
const info_persona = document.querySelector('.info-persona');

//Criando objetos das armas
const armas = [
    {nome: 'Graveto', poder: 5},
    {nome: 'Panela', poder: 30},
    {nome: 'Machado', poder: 50},
    {nome: 'Espada', poder: 100}
]

const monstros = [
    {nome: 'Piruba', level: 2, saudeM: 15},
    {nome: 'Cazabin', level: 8, saudeM: 60},
    {nome: 'Piruba', level: 20, saudeM: 300},
]

//Criando objetos para facilitar
const referencias = [

    {
        nome: "praça central",
        subtitulo: ["Loja", "Arena", "Missões"],
        btn_texto: ["Lojinha", "Caverna", "Ganha-Pão"],
        imagem: ['image/fundo-loja-clara.jpg', 'image/fundo-arena-clara.jpg', 'image/fundo-missoes-clara.jpg'],
        btn_funcao: [irLoja, irCaverna, irMissao]
    },

    {
        nome: "loja",
        subtitulo: ["Saúde", "XP", "Arma"],
        btn_texto: ["+10 Saúde", "+5 XP", "Arma"],
        imagem: ['image/saude-pixel.png', 'image/xp-pixel.png', 'image/espada-pixel.png'],
        btn_funcao: [comprarSaude, comprarXp, comprarArma]
    },

    {
        nome: "caverna",
        subtitulo: ["Monstro lv1", "Monstro lv2", "Dragão"],
        btn_texto: ["Piruba", "Cazabin", "Dragão"],
        imagem: ['image/monst-1.jpg', 'image/monst-2.jpg', 'image/dragao.jpg'],
        btn_funcao: [lutarMonstro1, lutarMonstro2, lutarDragao]
    },

    {
        nome: "missao",
        subtitulo: ["1", "2", "3"],
        imagem: ['image/fundo-adivinhar1.png', 'image/fundo-adivinhar2.png', 'image/fundo-adivinhar3.png'],
        btn_texto: ["1", "2", "3"],
        btn_funcao: [adivinhar, adivinhar, adivinhar]
    },

    {
        nome: "lutar",
        subtitulo: ["Atacar", "Desviar", "Correr"],
        btn_texto: ["Atacar", "Desviar", "Correr"],
        imagem: ['image/atacar-pixel.png', 'image/desviar-pixel.png', 'image/fundo-praca-clara.jpg' ],
        btn_funcao: [atacar, desviar, correr]
    },

    {
        nome: "personagem",
        subtitulo: ["Arqueiro", "Feiticeira", "Pirata"],
        btn_texto: ["Catatau", "Verruguinha", "Saca-Rolhas"],
        imagem: ['image/arc-sem-fundo.png', 'image/bruxa-sem-fundo.png', 'image/pirata-sem-fundo.png'],
        btn_funcao: [personagemCazabin, personagemVerruguinha, personagemSacaRolhas]
    },

    {
        nome: "kill monstro",
        subtitulo: ["Praça", "Praça", "Praça"],
        btn_texto: ["Praça", "Praça", "Praça"],
        imagem: ['image/fundo-praca-clara.jpg', 'image/fundo-praca-clara.jpg', 'image/fundo-praca-clara.jpg'],
        btn_funcao: [irPraca, irPraca, irPraca]
    },

    {
        nome: "perdeu",
        subtitulo: ["Replay?", "Replay?", "Replay?"],
        btn_texto: ["Replay", "Replay", "Replay"],
        imagem: ['image/fundo-reset.png', 'image/fundo-reset.png', 'image/fundo-reset.png'],
        btn_funcao: [irPersonagens, irPersonagens, irPersonagens]
    },

    {
        nome: "ganhou",
        subtitulo: ["Replay?", "Replay?", "Replay?"],
        btn_texto: ["Replay", "Replay", "Replay"],
        imagem: ['image/fundo-teste.png', 'image/fundo-teste.png', 'image/fundo-teste.png'],
        btn_funcao: [irPersonagens, irPersonagens, irPersonagens]
    }
]

//Inicializando botões
btn_1.onclick = personagemCazabin;
btn_2.onclick = personagemVerruguinha;
btn_3.onclick = personagemSacaRolhas;
btn_voltar.onclick = startGame;
btn_home.onclick = irPersonagens;

//Funções com os personagens
function personagemCazabin() {
    console.log("Cazabin clicado");
    prata += 100;
    saude += 100;

    prata_text.innerText = prata;
    saude_text.innerText = saude;
    xp_text.innerText = xp;

    irPraca();
    startGame();
    info_persona.style.display = 'none';
}

function personagemVerruguinha() {
    console.log("Verruguinha clicado");
    prata += 80;
    saude += 120;

    prata_text.innerText = prata;
    saude_text.innerText = saude;
    xp_text.innerText = xp;

    irPraca();
    startGame();
    info_persona.style.display = 'none';
}

function personagemSacaRolhas() {
    console.log("Saca-Rolhas clicado");
    prata += 120;
    saude += 80;

    prata_text.innerText = prata;
    saude_text.innerText = saude;
    xp_text.innerText = xp;

    irPraca();
    startGame();
    info_persona.style.display = 'none';
}

//Função para atualizar as informações na tela de acordo com o objeto referenciado
function atualizar(referencia) {
    subtitulo_1.innerText = referencia["subtitulo"][0];
    subtitulo_2.innerText = referencia["subtitulo"][1];
    subtitulo_3.innerText = referencia["subtitulo"][2];
    img_1.setAttribute('src', referencia["imagem"][0]);
    img_2.setAttribute('src', referencia["imagem"][1]);
    img_3.setAttribute('src', referencia["imagem"][2]);
    btn_1.innerText = referencia["btn_texto"][0];
    btn_2.innerText = referencia["btn_texto"][1];
    btn_3.innerText = referencia["btn_texto"][2];
    btn_1.onclick = referencia["btn_funcao"][0];
    btn_2.onclick = referencia["btn_funcao"][1];
    btn_3.onclick = referencia["btn_funcao"][2];
}

//Funções para ir aos locais do jogo
function irPraca() {
    atualizar(referencias[0]);
    btn_voltar.style.display = 'none';
    body.style.backgroundImage = "url(image/Fundo-Praca.jpg)";
    titulo.innerText = "Qual o seu destino?";
    stts_monstro.style.display = 'none';
    info_persona.style.display = 'none';
}

function irLoja() {
    atualizar(referencias[1]);
    body.style.backgroundImage = "url(image/Fundo-Loja.jpg)";
    titulo.innerText = "Faça sua compra: ";
    btn_voltar.style.display = 'block';
}

function irCaverna() {
    atualizar(referencias[2]);
    body.style.backgroundImage = "url(image/Fundo-Arena.jpg)";
    titulo.innerText = "Lute com um deles: ";
    btn_voltar.style.display = 'block';
}

function irMissao() {
    atualizar(referencias[3]);
    body.style.backgroundImage = "url(image/Fundo-Missoes.jpg)";
    titulo.innerText = "Vai tentar a sorte?";
    btn_voltar.style.display = 'block';
}

function irPersonagens() {
    atualizar(referencias[5]);
    body.style.backgroundImage = "url(image/Fundo-principal.jpg)";
    titulo.innerText = "Escolha um personagem: ";
    prata = 0;
    saude = 0;
    xp = 0;
    prata_text.innerText = prata;
    saude_text.innerText = saude;
    xp_text.innerText = xp;
    cabecalho_jogo.style.display = 'none';
    info_persona.style.display = 'block';
}

function lutar() {
    titulo.innerText = "Faça sua jogada"
    stts_monstro.style.display = 'flex';
    atualizar(referencias[4]);
    saudeMonstro = monstros[lutando].saudeM;
    nome_monstro.innerText = monstros[lutando].nome;
    saude_monstro.innerText = saudeMonstro;
}

//Funções dentro do jogo - Comprar
function comprarSaude() {
    console.log('Saude - Clicado');
    if (prata >= 10) {
        prata -= 10;
        prata_text.innerText = prata;
        saude += 10;
        saude_text.innerText = saude;
    }
}

function comprarXp() {
    console.log('Xp - Clicado');
    if (prata >= 5) {
        prata -= 5;
        prata_text.innerText = prata;
        xp += 5;
        xp_text.innerText = xp;
    }
}

function comprarArma() {
    if (arma_atual < armas.length - 1) {
        if (prata >= 30) {
            prata -= 30;
            arma_atual++;
            prata_text.innerText = prata;
            let nova_arma = armas[arma_atual].nome;
            mochila.push(nova_arma);
            arma_text.innerText = nova_arma;
        }
    }
}

//Funções dentro do jogo - Caverna
function lutarMonstro1() {
    console.log('Monstro 1- Clicado');
    lutando = 0;
    lutar();
}

function lutarMonstro2() {
    console.log('Mosntro 2- Clicado');
    lutando = 1;
    lutar();
}

function lutarDragao() {
    console.log('Dg - Clicado');
    lutando = 2;
    lutar();
}

//Funções dentro do jogo - lutar
function atacar() {
    saude -= getValorAtaqueMonstro(monstros[lutando].level);
    if (monstroHit()) {
        saudeMonstro -= armas[arma_atual].poder + Math.floor(Math.random() * xp) + 1;
    }
    saude_text.innerText = saude;
    saude_monstro.innerText = saudeMonstro;
    if (saude <= 0) {
        perdeu();
    } else if (lutando === 2) {
        venceu();
    } else {
        destruirMonstro();
    }
}

//Funções dentro da função atacar
function getValorAtaqueMonstro(level) {
    const hit = (level * 5) - (Math.floor(Math.random() * xp));
    console.log(hit);
    return hit > 0 ? hit : 0;
}

function monstroHit() {
    return Math.random() > .2 || saude < 20;
}

function desviar() {
    
}

function correr() {
    irPraca();
}

//Funções dentro do jogo - Missões
function adivinhar() {
    console.log('Clicado');
}

//Função para começar/reiniciar o jogo
function startGame() {
    cabecalho_jogo.style.display = 'flex';
    body.style.backgroundImage = "url(image/Fundo-Praca.jpg)";

    titulo.innerText = "Qual o seu destino?";
    
    atualizar(referencias[0]);

    //info_persona.style.display = 'none';

    btn_voltar.style.display = 'none';

    stts_monstro.style.display = 'none';
}

//Funções para declara vitoria, perda ou destruição do monstro
function destruirMonstro() {
    prata += Math.floor(monstros[lutando].level * 6.7);
    xp += monstros[lutando].level;
    prata_text.innerText = prata;
    xp_text.innerText = xp;
    atualizar(referencias[6]);
}

function perdeu() {
    atualizar(referencias[7]);
}

function ganhou() {
    atualizar(referencias[8]);
}

//arrumar o info-persona