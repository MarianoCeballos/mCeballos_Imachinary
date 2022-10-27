const { Router } = require('express');

const router = Router();

router.use('/movies', require('./Movie'));
router.use('/people', require('./People'));
router.use('/role', require('./Role'));

module.exports = router;
