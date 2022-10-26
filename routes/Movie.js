const { Router } = require('express');
const { getMovies } = require('../Controllers/AllControllers');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const movie = await getMovies();

        res.json(movie);
    } catch (error) {
        res.status(404).send(error);
    }
});

module.exports = router;
