<p><h1>0x02. ES6 classes</h1></p> :fire:

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
| [0. You used to attend a place like this at some point](./0-classroom.js) | Implement a class named `ClassRoom`:
<br>Prototype: `export default class ClassRoom`
<br>It should accept one attribute named `maxStudentsSize` (Number) and assigned to `_maxStudentsSize`<br>
```bob@dylan:~$ cat 0-main.js
import ClassRoom from "./0-classroom.js";

const room = new ClassRoom(10);
console.log(room._maxStudentsSize)

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
10
bob@dylan:~$   |
``` 
| [1. Let's make some classrooms](./1-make_classrooms.js) | Import the `ClassRoom` class from `0-classroom.js`.
<br>Implement a function named `initializeRooms`. It should return an array of 3 `ClassRoom` objects with the sizes 19, 20, and 34 (in this order). <br>
```bob@dylan:~$ cat 1-main.js
import initializeRooms from './1-make_classrooms.js';

console.log(initializeRooms());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
[
  ClassRoom { _maxStudentsSize: 19 },
  ClassRoom { _maxStudentsSize: 20 },
  ClassRoom { _maxStudentsSize: 34 }
]
bob@dylan:~$ |
```
| [2. A Course, Getters, and Setters](./2-hbtn_course.js) | Implement a class named `HolbertonCourse`
<br>Make sure to verify the type of attributes during object creation<br>Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)<br> 
```bob@dylan:~$ cat 2-main.js
import HolbertonCourse from "./2-hbtn_course.js";

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"])
console.log(c1.name);
c1.name = "Python 101";
console.log(c1);

try {
    c1.name = 12;
} 
catch(err) {
    console.log(err);
}

try {
    const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
}
catch(err) {
    console.log(err);
}

bob@dylan:~$ 
bob@dylan:~$ npm run dev 2-main.js 
ES6
HolbertonCourse {
  _name: 'Python 101',
  _length: 1,
  _students: [ 'Bob', 'Jane' ]
}
TypeError: Name must be a string
    ...
TypeError: Length must be a number
    ...
bob@dylan:~$ |
```

<p><h2>Author</h2></p> :fire:

- [betiniakarandut](https://www.github.com/betiniakarandut)