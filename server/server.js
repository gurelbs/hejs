const express = require('express');
const cors = require('cors')
const app = express();
const path = require("path");
const api = require("../routes/api")

app.use(cors())
app.use(express.json())
app.use(express.static(__dirname + 'client/build'));
app.use('/api',api)

app.get('*', (req, res) => {
  let file = path.join(__dirname, 'client/build', 'index.html')
  res.sendFile(file);
})


let port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server is listening on http://localhost:${port}`))