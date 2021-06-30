import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const dbConnect = require('./database/db.js');
dbConnect();

const app = express();

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req,res) => {
    res.send("Home Page")
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))