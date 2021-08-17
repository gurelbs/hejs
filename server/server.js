const express = require('express');
const cors = require('cors')
const app = express();
const path = require("path");
const api = require("../routes/api")

app.use(cors())
app.use(express.json())
app.use('/api',api)
let prod = process.env.NODE_ENV === 'production'
if (prod) {
  app.use(express.static('/app/client/build'));
  app.get('/', (req, res) => {
    let file = path.join('/client/build', 'index.html')
    res.sendFile(file,{ root: __dirname });
  })
}
app.use((req, res) => {
  res.status(404);
  let file = path.join(__dirname,prod ? '/client/build' : '../client/public', '404.html')
  res.sendFile(file);
});

let port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server is listening on http://localhost:${port}`))