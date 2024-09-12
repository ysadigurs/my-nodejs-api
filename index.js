// index.js
const express = require('express');
const app = express();
const port = 3000;

// Define routes and middleware
app.get('/zmanim', (req, res) => {

  fetch('/data_zmanim_kavua.json') // Since it's in the public folder, it's accessible at the root
  .then(response => response.json())
  .then(data => {
      const item =  data.find( record => (record["yom"] === req.query.date));
      res.send(item);
  })
  .catch(error => {
        res.send("Error fetching the zmanim file" + error);
        console.error('Error fetching the zmanim file', error);
  });
})

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


