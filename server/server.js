const express = require('express');
const app = express();
const PORT = 5000;

app.use('GET', (req, res) => {
  res.send("Testing with Jasmine");
})


app.listen( PORT, () => {
  console.log(`Listening to port ${PORT}`);
})