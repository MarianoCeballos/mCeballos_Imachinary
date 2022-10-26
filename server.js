const express = require('express');
const movie = require('./routes/movie.js');
const server = express();
const role = require('./routes/role.js');
const people = require('./routes/person.js');

const { conn } = require('./db');
server.use(express.json());
server.use('/movies', movie);
server.use('/roles', role);
server.use('/people', people);
server.get('/', (req, res) => {
    res.json('Stop');
});
const PORT = 3000;
try {
    conn.sync({ force: false }).then(() => {
        server.listen(3001, () => {
            console.log(`server running on port ${PORT}`);
        });
    });
} catch (error) {
    console.log(error);
}
