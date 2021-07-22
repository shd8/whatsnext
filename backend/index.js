const express = require('express');
const debug = require('debug')('server');
const morgan = require('morgan');
const cors = require('cors');

const PORT = process.env.PORT || 4000;

require('dotenv').config();
require('./src/database/mongoose.config');

const server = express();

server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

server.use('/api/users/');
server.use('/api/conversations/');

server.use((err, req, res) => {
  res.status(err.status || 500);
  res.json({ error: err });
});

server.listen(PORT, debug(`server is running on port ${PORT}`));
