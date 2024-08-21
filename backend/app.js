const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('public'));

app.get('/api/menu', (req, res) => {
  res.json({
    menu: [
      { id: 1, name: 'Espresso', price: 3.00 },
      { id: 2, name: 'Latte', price: 4.50 },
      { id: 3, name: 'Cappuccino', price: 4.00 }
    ]
  });
});

app.listen(port, () => {
  console.log(`Coffee Bar app listening at http://localhost:${port}`);
});
