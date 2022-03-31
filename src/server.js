const express = require('express');
const routes = require('./routes/routes');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config;

dotenv.config({ path: '.env' });

require('./database');

const app = express();
app.use(morgan('combined'));
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(routes);

app.get('/', (req, res) => {
    return res.status(200).json('Server running!');
})

app.listen(3000);