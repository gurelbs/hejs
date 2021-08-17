const express = require('express');
const cors = require('cors')
const app = express();
const path = require("path");
const api = require("../routes/api")

app.use(cors())
app.use(express.json())
app.use('/api',api)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('/app/client/build'));
  app.get('/', (req, res) => {
    let file = path.join('/client/build', 'index.html')
    res.sendFile(file,{ root: __dirname });
  })
}


let port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server is listening on http://localhost:${port}`))