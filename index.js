// index.js with base path
app.use('/api', (req, res, next) => {
  // Example base path
  const basePath = '/api';
  app.get(`${basePath}/greet`, (req, res) => {
    const name = req.query.name || 'Guest';
    res.send(`Hello, ${name}!`);
  });
});