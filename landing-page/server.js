const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
const API_KEY = require('./keys').API_KEY;

const app = express();

sgMail.setApiKey(API_KEY);

app.use(cors());

app.get("/", (req, res) => {
    res.send("My email api");
})

app.get("/searched", (req, res) => {
    const {searched} = req.query
    
    const msg = {
        to: 'tomsaw1243@gmail.com',
        from: 'tomsaw1243@gmail.com',
        subject: 'Sending with SendGrid is Fun',
        text: `Welcome newcomer! You just searched ${searched}`,
        html: `<strong>Welcome newcomer! You just searched ${searched}</strong>`
    };

    sgMail.send(msg)
        .then((msg) => console.log(msg))

})

app.listen(4001, () => console.log(`running on port: 4001`));