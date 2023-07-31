<p><h1>0x03. ES6 data manipulation</h1></p> :fire:

## Description :house:
ES6 data manipulation.

## Objectives
- How to use map, filter and reduce on arrays
- Typed arrays
- The Set, Map, and Weak link data structures

Tasks :pencil:
| File | Description |
|------|-------------|
| [0. Basic list of objects](./0-get_list_students.js) | Create a function named `getListStudents` that returns an array of objects.<br>Each object should have three attributes: `id` (Number), `firstName` (String), and `location` (String).
```bob@dylan:~$ cat 0-main.js
import getListStudents from "./0-get_list_students.js";

console.log(getListStudents());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
bob@dylan:~$  |
``` 
| [1. More mapping](./1-get_list_student_ids.js) | Create a function getListStudentIds that returns an array of ids from a list of object.<br>This function is taking one argument which is an array of objects - and this array is the same format as getListStudents from the previous task.<br>If the argument is not an array, the function is returning an empty array.
```bob@dylan:~$ cat 1-main.js
import getListStudentIds from "./1-get_list_student_ids.js";
import getListStudents from "./0-get_list_students.js";

console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
[]
[ 1, 2, 5 ]
bob@dylan:~$  |
```
| 2. Filter](./2-get_students_by_loc.js) | Create a function `getStudentsByLocation` that returns an array of objects who are located in a specific city.<br>It should accept a list of students (from `getListStudents`) and a `city` (string) as parameters.<br>You must use the filter function on the array.
```bob@dylan:~$ cat 2-main.js
import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 2-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
bob@dylan:~$
```

<p><h2>Author</h2></p> :fire:

- [betiniakarandut](https://www.github.com/betiniakarandut)