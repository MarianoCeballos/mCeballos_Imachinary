const { Router } = require('express');

const router = Router();

router.use('/movies', require('./Movie'));
router.use('/people', require('./People'));
router.use('/role', require('./Role'));
router.get('/', (req, res) => {
    res.send('Hola');
});

module.exports = router;
