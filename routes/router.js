const { Router } = require('express');
const path = require('path');
const router = Router();

router.get(['/', '/index'], (req, res) => {
    res.render(path.join(process.cwd(), 'views/index'));
});

router.get('/new', (req, res) => {
    res.render(path.join(process.cwd(), 'views/form'));
});

module.exports = router;
