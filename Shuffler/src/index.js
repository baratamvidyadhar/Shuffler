const path    = require('path');
const express = require('express');
const bodyparser = require('body-parser');
const shuffler_algo = require('../dependencies/fisher_yates_improv');
const mailer     = require('../dependencies/mailer');
const {shuffledusers, driver} = require("../dependencies/fisher_yates_improv");
let finalemails;
let res;
const app = express();
app.use(bodyparser.urlencoded({extended: false}));

const port = process.env.PORT || 3000;

//Define paths for Express config
const PublicDirectoryPath    = path.join(__dirname,'../public');

//Setup static directory to serve
app.use(express.static(PublicDirectoryPath));

app.post('/getget',(req,res)=>{
    finalemails=req.body.emails.split(';');
    res=driver(finalemails);
    mailer.printdata(finalemails,res);
    res.redirect('/final.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
