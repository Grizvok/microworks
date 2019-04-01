const express = require('express');
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const db = require('./src/db');

const corsOptions = {
  origin: 'http://localhost:3000',
};

const app = express();

app.use(cors(corsOptions));

app.get('/api/user/hello', async (req, res) => {
  // const joinDate = new Date();
  const rows = await db.query(
    'INSERT INTO public.user(user_name, hash) VALUES ($1, $2) RETURNING user_name',
    [user, hash]
  );
  console.log(rows);

  res.status(200).send({ message: 'hello from user api!' });
});

app.listen(PORT);
