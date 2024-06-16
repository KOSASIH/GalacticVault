// Instead of having a long file like this:
// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  //...
});

app.post('/api/data', (req, res) => {
  //...
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// Break it down into smaller files like this:
// app.js
const express = require('express');
const app = express();
const routes = require('./routes');

app.use('/', routes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// routes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  //...
});

router.post('/api/data', (req, res) => {
  //...
});

module.exports = router;
