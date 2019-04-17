const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send("Testing with Jasmine");
});


app.listen( PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

// close server when completed
exports.closeServer = () => {
  server.close();
}