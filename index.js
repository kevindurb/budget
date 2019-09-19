require('dotenv').config();
const express = require('express');
const plaid = require('plaid');

const plaidClient = new plaid.Client(
  process.env.PLAID_CLIENT_ID,
  process.env.PLAID_SECRET,
  process.env.PLAID_PUBLIC_KEY,
  plaid.environments.development,
  { version: '2019-05-29' }
);

const app = express();

app.set('view engine', 'ejs');

app.get('/link', (req, res) => {
  res.render('link', {
    PLAID_PUBLIC_KEY: process.env.PLAID_PUBLIC_KEY,
  });
});

app.listen('8080', () => console.log('http://localhost:8080'));
