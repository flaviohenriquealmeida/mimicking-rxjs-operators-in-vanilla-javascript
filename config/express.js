const express = require('express')
    ,app = express()
    ,cors = require('cors')
    ,routes = require('../app/routes')

app.use(cors());
app.use(express.static('public'));
routes(app);

module.exports = app;