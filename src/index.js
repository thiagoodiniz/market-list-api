const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

require('./controllers/listController')(app);
require('./controllers/productController')(app);

const port = '3002';

console.log(`Server is listening on port ${ port }`);

app.listen(3002);
