const { Router } = require('express');
const { getPerson } = require('../controllers/AllControllers');

const router = Router();

router.get('/', async (req, res) => {
    const { name, role, movie } = req.query;
    try {
        const person = await getPerson(name, role, movie);
        res.send(person);
    } catch (error) {
        console.log(error);
        res.status(404).json(error);
    }
});

module.exports = router;
