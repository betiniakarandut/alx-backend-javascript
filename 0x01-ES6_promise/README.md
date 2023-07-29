<p><h1>0x00-ES6 PROMISES</h1></p> :fire:

## Description :house:
ES6 promises.

## Objectives
- Promises (how, why, and what)
- How to use the then, resolve, catch methods
- How to use every method of the Promise object
- Throw / Try
- The await operator
- How to use an async function

| File | Description |
|------|-------------|
| [0. Keep every promise you make and only make promises you can keep](./0-promise.js) | Return a Promise using this prototype function getResponseFromAPI()<br>
```bob@dylan:~$ cat 0-main.js
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
true
bob@dylan:~$  |
``` 
| [1. Don't make a promise...if you know you can't keep it](./1-promise.js) |Using the prototype below, return a promise. The parameter is a boolean.
<br>`getFullResponseFromAPI(success)` <br>
```bob@dylan:~$ cat 1-main.js
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
Promise { { status: 200, body: 'Success' } }
Promise {
  <rejected> Error: The fake API is not working currently
    ...
    ...
bob@dylan:~$ |
```
| [2. Catch me if you can!](./2-then.js) | Using the function prototype below
<br>function `handleResponseFromAPI(promise)` <br> 
```bob@dylan:~$ cat 2-main.js
import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 2-main.js 
Got a response from the API
bob@dylan:~$ |
```

<p><h2>Author</h2></p> :fire:
- [betiniakarandut](github.com/betiniakarandut)