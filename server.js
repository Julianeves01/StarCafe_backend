require ('dotenv').config();
const express = require('express');
const cors = require('cors');
const pedidoRoutes = require('./src/routes/pedidoRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/api', pedidoRoutes);


app.get('/', (req, res) => {
    res.send('Bem vindos a API da StarCafé!☕');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});