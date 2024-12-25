const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid user IDs
  console.log(users[userId]); // Accessing an array element directly with a string key which can result in undefined, causing an error.
  res.send(`User ${userId}`);
});
app.listen(3000, () => console.log('Server listening on port 3000'));