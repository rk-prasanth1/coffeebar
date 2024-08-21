const express = require('express');
const app = express();
const PORT = process.env.PORT || 9090;

app.get('/api/menu', (req, res) => {
    const menu = [
        { id: 1, name: 'Espresso', price: 2.5 },
        { id: 2, name: 'Latte', price: 3.0 },
        { id: 3, name: 'Cappuccino', price: 3.5 },
    ];
    res.json(menu);
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});

