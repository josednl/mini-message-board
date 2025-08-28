const { getAllMessages, addMessage } = require('../models/messageModel');

function showAllMessages(req, res) {
    const messages = getAllMessages();
    res.render('index', { messages });
}

function createMessage(req, res) {
    const { user, text } = req.body;

    if(!user || !text) {
        return res.status(404).send('User and text are required');
    }

    addMessage(user, text);
    res.redirect('/');
}

module.exports = {
    showAllMessages,
    createMessage
}
