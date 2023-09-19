// program that will be executed through command line

const readline = require('readline')

const read = readline.createInterface({
    input: process.stdin
    output: process.stdout
})

read.question('Welcome to Holberton School, what is your name? \n', (res) => {
    console.log(Your name is: ${res})`);
    read.close();
});

read.on('close', () => {
    console.log('This important software is now closing\n');
    process.exit(0);
});
