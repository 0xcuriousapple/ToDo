const express = require('express');
const app = express();

const routes = require('./routes');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
app.use(cors());

require('./models')

// configure body parser for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use(routes);
// Bootstrap server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});