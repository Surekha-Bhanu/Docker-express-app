const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Set up server to listen on port 4000
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


