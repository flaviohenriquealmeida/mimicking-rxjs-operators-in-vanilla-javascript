const api = 'http://localhost:3000';

// função utilitária para lidar com o status da requisição
const handleError = res => {
  if(!res.ok) throw Error(res.statusText);
  return res;
};

const getNegotiationsFromWeek  = () =>
    fetch(`${api}/negociacoes/semana`)
    .then(res => handleError(res))
    .then(res => res.json())
    .catch(err => {
        console.log(err);   
        return Promise.reject('getNegotiationsFromWeek: failure!');
    });

const getNegotiationsFromPreviousWeek = () =>
    fetch(`${api}/negociacoes/anterior`)
    .then(res => handleError(res))
    .then(res => res.json())
    .catch(err => {
        console.log(err);
        return Promise.reject('getNegotiationsFromPreviousWeek: failure!');
    });
    
export const getNegotiations = () => 
    Promise
    .all([getNegotiationsFromWeek(), getNegotiationsFromPreviousWeek()])
    .then(data => 
        data.reduce((negotiations, array) => 
            negotiations.concat(array), []))