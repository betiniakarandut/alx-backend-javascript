const express = require('express');

/**
 * Create a small HTTP server using Express
 */

const app = express();
const PORT = 1245;

app.get('/', (_, response) => {
  response.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
