const { Router } = require('express');
const path = require('path');
const router = Router();
const { showAllMessages, createMessage } = require('../controllers/messageController');

router.get(['/', '/index'], showAllMessages);

router.get('/new', (req, res) => {
    res.render(path.join(process.cwd(), 'views/form'));
});

router.post('/new', createMessage);

module.exports = router;
