const express = require('express');

const app = express();


app.get('/api/main', (req, res) => {
  res.send(`Express is a fast, unopinionated, minimalist web framework for Node.js. It provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.`);
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
