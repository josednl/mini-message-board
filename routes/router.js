const { Router } = require('express');
const path = require('path');
const router = Router();
const { showAllMessages, createMessage, showMessageDetail, deleteMessageById } = require('../controllers/messageController');

router.get(['/', '/index'], showAllMessages);

router.get('/new', (req, res) => {
    res.render(path.join(process.cwd(), 'views/form'));
});
router.get('/messages/:id', showMessageDetail);
router.post('/new', createMessage);
router.post('/delete/:id', (req, res) => {
    const { id } = req.params;
    const deleted = deleteMessageById(id);
    if (!deleted) {
        return res.status(404).render('404');
    }
    res.redirect('/');
});

module.exports = router;
