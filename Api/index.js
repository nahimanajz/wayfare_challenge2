
const express = require('express');
const routes = require('./routes/tripsroute');
const app = express();
app.use(express.json());
app.use('/api/v1/', routes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, (req, res) => {
    console.log(`App connected on port ${PORT}....`);
});