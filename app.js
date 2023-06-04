const express = require('express');

const poupatempo = require('./archives/poupatempoSp.json');

const app = express();

app.get('/poupatempo', (req, res) => {
    try {
        res.status(200).json(poupatempo);
    } catch (error) {
        console.error(error.message);
    }
  });

module.exports = app;
