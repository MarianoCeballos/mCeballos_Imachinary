const { Router } = require('express');
const { getRole } = require('../controllers/AllControllers');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const roles = await getRole();
        res.json(roles);
    } catch (error) {
        res.status(404).send(error);
    }
});

module.exports = router;
