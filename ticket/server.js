const express = require('express');
const PORT = process.env.PORT || 3002;
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000',
};

const app = express();

app.use(cors(corsOptions));

app.get('/api/ticket/hello', async (req, res) => {
  res.status(200).send({ message: 'hello from ticket api!' });
});

app.listen(PORT);
