const { randomUUID } = require('crypto');
const messages = [
	{
		id: '1',
		text: 'Hi there!',
		user: 'Amando',
		added: new Date(),
	},
	{
		id: '2',
		text: 'Hello World!',
		user: 'Charles',
		added: new Date(),
	},
    {
		id: '3',
		text: 'How are you?!',
		user: 'Anthony',
		added: new Date(),
	}
];

function addMessage(user, text) {
    const newMessage = {
		id: randomUUID(),
        text,
        user,
        added: new Date()
    };
    messages.push(newMessage);
    return newMessage;
}

function getAllMessages() {
    return messages;
}

function getMessageById(id) {
    return messages.find(m => m.id === id);
}

module.exports = {
    addMessage,
    getAllMessages,
    getMessageById
}
