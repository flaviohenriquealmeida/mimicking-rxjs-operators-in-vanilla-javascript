import { getNegotiations } from './api.js';
import { compose, debounceTime, take } from './operators.js';

const operations = compose(debounceTime(500), take(3));

document
.querySelector('#btn')
.onclick = operations(() => 
    getNegotiations()
    .then(negotiations => {
        console.log(negotiations);
        alert('Operation complete!');
    })
    .catch(err => console.log(err))
);