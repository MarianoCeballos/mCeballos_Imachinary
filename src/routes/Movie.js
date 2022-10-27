const { Router } = require('express');
const { getMovies } = require('../controllers/AllControllers');
const router = Router();

router.get('/', async (req, res) => {
    const { person, role, title } = req.query;

    try {
        const movie = await getMovies(role, person, title);

        res.json(movie);
    } catch (error) {
        res.status(404).send(error);
    }
});

module.exports = router;
