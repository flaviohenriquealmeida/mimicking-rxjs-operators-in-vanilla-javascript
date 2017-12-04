
const dataAtual = new Date();
const dataAnterior = new Date();
dataAnterior.setDate(dataAtual.getDate() - 7);
const dateRetrasada = new Date();
dateRetrasada.setDate(dataAtual.getDate() - 14);

var negociacoes = [
      { data : dataAtual, quantidade : 1, valor : 150},
      { data : dataAtual, quantidade : 2, valor : 250},
      { data : dataAtual, quantidade : 3, valor : 350},
      { data : dataAnterior, quantidade : 1, valor : 450},
      { data : dataAnterior, quantidade : 2, valor : 550},
      { data : dataAnterior, quantidade : 3, valor : 650},
      { data : dateRetrasada, quantidade : 1, valor : 750},
      { data : dateRetrasada, quantidade : 2, valor : 950},
      { data : dateRetrasada, quantidade : 3, valor : 950}
    ];

const api = {};

api.listaSemana = (req, res) => {

    const negociacoesAtuais = negociacoes.filter(negociacao => 
        negociacao.data > dataAnterior);

    res.json(negociacoesAtuais);
};

api.listaAnterior = (req, res) => {
   
   const negociacoesAnteriores = negociacoes.filter(negociacao => 
        negociacao.data < dataAtual && negociacao.data > dateRetrasada);
    
    res.json(negociacoesAnteriores);	
};

module.exports = api;