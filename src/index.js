const express = require('express');
const _ = require('lodash');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from npm-sample-proj', version: '1.0.0' });
});

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  const sorted = _.sortBy(users, 'name');
  res.json(sorted);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
