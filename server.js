const express = require('express');
const movies = require('./src/routes/movie.js');
const server = express();
const roles = require('./src/routes/role.js');
const people = require('./src/routes/person.js');
const { conn } = require('./src/db.js');
const { seedDb } = require('./src/controllers/AllControllers.js');

server.use(express.json());
server.use('/movies', movies);
server.use('/roles', roles);
server.use('/people', people);
server.get('/', async (req, res) => {
    const seedDatatabase = await seedDb();
    seedDatatabase ? res.json('DB SEEDED') : res.json('DB ALREADY WITH DATA');
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
