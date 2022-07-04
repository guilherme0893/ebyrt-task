const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
// const user = require('./routes/user');
const taskRouter = require('./routes/tasks');

const app = express();

app.use(bodyParser.json());

app.use('/', taskRouter);

// app.get('/', (_request, response) =>
//   response.send({ status: 'I am alive!' }));

module.exports = app;
