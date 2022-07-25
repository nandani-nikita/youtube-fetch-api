
const mongoose = require('mongoose');
const dotenv =require("dotenv");
dotenv.config({path:'./.env'});
// process.env.MONGO_URI || 
mongoose.connect('mongodb://127.0.0.1:27017/userAndTeam', { useNewUrlparser: true }, (err) => {
    if (!err) {
        console.log('Mongo Connection Successful.');
    } else {
        console.log('Mongo Connection Failed',err);
    }
});

require('./videoModel');
