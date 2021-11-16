const express = require('express');
const app = express();
const cors = require('cors');
const sgMail = require('@sendgrid/mail'); 
require('dotenv').config();

const {getRandomMotivationQuote, getRandomJoke} = require("./db");
const {getRandomArt} = require("./art-db");

const port = 3001

app.use(cors());

let numberOfMotivationsGiven = 0;

sgMail.setApiKey(process.env.SENDGRIDAPIKEY);

// app.get("/api/motivations/stats", (req, res) => {
//   res.json({
//       numberOfMotivationsGiven: numberOfMotivationsGiven
//   })
// })

app.get('/api/motivations', async (req, res) => {
  // numberOfMotivationsGiven++;
  try {
      res.json({
          "quote": getRandomMotivationQuote(),
          "joke": getRandomJoke(),
          "art": await getRandomArt(),
      });
  } catch (err) {
      console.error(err);
      res.status(500).send({msg: "Sorry try again"});
  }
  res.end();
})

app.get('/send-email', (req,res) => {
    
  const { recipient, sender, topic, text } = req.query; 

  const msg = {
      to: recipient, 
      from: 'noreply@martalewan.com',
      subject: topic,
      text: text,
  }

  sgMail.send(msg)
  .then((msg) => console.log(text));
});

app.listen(port, () => {
  console.log(`The app listening at http://localhost:${port}`)
});

