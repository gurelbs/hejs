const express = require('express');
const router = require('./routes/router');
const { json } = require('express');
const cors = require('cors')

const app = express();

app.use(json());
app.use(cors());
app.use('/api',router);

if (process.env.NODE_ENV === 'production'){
  app.get('*', (req, res) => {
      res.sendFile('index.html',{root: './dist'});
  });
}
const port = process.env.PORT || '3000';
app.listen(port, () => console.log(`server run at http://localhost:${port}`))