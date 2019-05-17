const express = require('express');
const bodyParser = require('body-parser');
const corsMiddleware = require('./corsMiddleware');
const hitsController = require('./hits/controllers');
const hitsRoutes = require('./hits/routes');
var cron = require('node-cron');

const app = express();

app.use(corsMiddleware);
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(hitsRoutes);

// Connect BD
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ReignDesignTest', {useNewUrlParser: true})
  .then((success) => {
    console.log("Conectado a bd");
    hitsController.fillDB();
  })
  .catch((err) => {
    console.log(`Error de conexión: ${err}`);
  });

// Cron Job INIT
cron.schedule('0 0 */1 * * *', hitsController.fillDB);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});