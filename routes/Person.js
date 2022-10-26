const { Router } = require('express');
const { getPerson } = require('../Controllers/AllControllers');

const router = Router();

router.get('/', async (req, res) => {
    const { role } = req.query;
    try {
        const person = await getPerson(role);
        res.send(person);
    } catch (error) {
        console.log(error);
        res.status(404).json(error);
    }
});

module.exports = router;
