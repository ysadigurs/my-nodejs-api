const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Vercel Great Again!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// Middleware to parse JSON request body
app.use(express.json());

// Route with query parameters
app.get('/greet', (req, res) => {
  const name = req.query.name || 'Guest';
  res.send(`Hello, ${name}!`);
});

// Route with route parameters
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// POST request with JSON body
app.post('/data', (req, res) => {
  const data = req.body;
  res.send(`Received data: ${JSON.stringify(data)}`);
});


