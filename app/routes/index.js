const api = require('../api');

module.exports  = function(app) {
    
    app.route('/negociacoes/semana')
        .get(api.listaSemana);
        
    app.route('/negociacoes/anterior')
        .get(api.listaAnterior);        
};