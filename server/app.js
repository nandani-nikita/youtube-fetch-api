require('./models/db');
require('./Services/cronService');
const express= require("express");
const dotenv =require("dotenv");
dotenv.config({path:'./.env'});
const bodyParser = require("body-parser");
const cors = require('cors');
const port = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const videoRouter = require('./Routers/videoRoutes');

app.use('/video', videoRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

