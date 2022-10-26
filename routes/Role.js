const { Router } = require('express');
const router = Router();

router.get('/', async (req, res) => {
    try {
        res.json('type');
    } catch (error) {
        res.status(404).send(error);
    }
});

module.exports = router;
