const { getAllMessages, addMessage, getMessageById } = require('../models/messageModel');

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

function showMessageDetail(req, res) {
    const messageId = req.params.id;
    const message = getMessageById(messageId);

    if(!message) {
        return res.status(404).render('404');
    }

    res.render('message-detail', { message });
}

module.exports = {
    showAllMessages,
    createMessage,
    showMessageDetail
}
