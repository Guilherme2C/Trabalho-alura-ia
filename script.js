const caixaPrincipal = document.querySelector(".caixa-principal");

const caixaPerguntas = document.querySelector(".caixa-perguntas");

const caixaAlternativas = document.querySelector(".caixa-alternativas");

const caixaResultado = document.querySelector(".caixa-resultado");

const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [

    {

        enunciado: "O que é pior, 10 baratas com o tamanho de 1 mosca ou 1 mosca com o tamanho de uma barata?",

        alternativas: [

            {

                texto: "As 10 baratas",

                afirmacao: "Realmente, é complicado isso ai né cara. "

            },

            {

                texto: "A 1 mosca pq eu sou matador de mosca",

                afirmacao: "Slk cara tu é brabo pprt."

            }

        ]

    },

    {

        enunciado: "Que ano que você começou o ensino médio?",

        alternativas: [

            {

                texto: "Dentre 2 a 3 anos atrás.",

                afirmacao: "Tu estudou um tempo legal né"

            },

            {

                texto: "Depende.",

                afirmacao: "Nem estudar tu estuda,"

            }

        ]

    },

    {

        enunciado: "E você usa muito as redes sociais?",

        alternativas: [

            {

                texto: "Não uso tanto.",

                afirmacao: "troglodita?"

            },

            {

                texto: "Vejo todo dia kk mto daora.",

                afirmacao: "e ainda fica vendo vídeo kk."

            }

        ]

    },

    {

        enunciado: "Qual o melhor suco tang?(exceto manga)",

        alternativas: [

            {

                texto: "Abacaxi.",

                afirmacao: "Suas doces escolhas"

            },

            {

                texto: "Limão.",

                afirmacao: "Suas escolhas azedas"

            }

        ]

    },

    {

        enunciado: "Qual estado temporal você mais gosta? ",

        alternativas: [

            {

                texto: " Passado.",

                afirmacao: " decidiram qual seria a resposta"

            },

            {

                texto: "Futuro.",

                afirmacao: " decirão qual será sua resposta. "

            }

        ]

    },

];





let atual = 0;

let perguntaAtual;

let historiaFinal = "";



function mostraPergunta() {

    if (atual >= perguntas.length) {

        mostraResultado();

        return;

    }

    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    caixaAlternativas.textContent = "";

    mostraAlternativas();

}



function mostraAlternativas(){

    for(const alternativa of perguntaAtual.alternativas) {

        const botaoAlternativas = document.createElement("button");

        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));

        caixaAlternativas.appendChild(botaoAlternativas);

    }

}



function respostaSelecionada(opcaoSelecionada) {

    const afirmacoes = opcaoSelecionada.afirmacao;

    historiaFinal += afirmacoes + " ";

    atual++;

    mostraPergunta();

}



function mostraResultado() {

    caixaPerguntas.textContent = "Em 2024...";

    textoResultado.textContent = historiaFinal;

    caixaAlternativas.textContent = "";

}



mostraPergunta();


