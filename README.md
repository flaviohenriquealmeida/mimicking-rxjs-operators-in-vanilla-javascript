## Mimicking rxjs operators in vanilla javascript

**Author: Flávio Almeida**

For testing purpose, this project run an express server with both API static assets. 

## How to run?

```bash
cd mimicking-rxjs-operators-in-vanilla-javascript
npm install
npm start
```

Point your browser to `http://localhost:3000`. You will see only one button. The main module is `public/app.js`. Let's take a look:

```javascript
// for the local API access
import { getNegotiations } from './api.js';

// decounceTime and take are functions to mimic Rxjs correspondent operators.
// compose is a utility function do compose functions

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
```

The operators definitions are in `public/operator.js`. 

## Testing the result

If you click the button under 500ms time window, the previous operation timed operation will be canceled and replaced by the new one because of the `debounceTime` function. If the user waits for the 500ms to elapse, then the operator will be processed. Howerver, the execution can only be processed three times because of the `take` function. 