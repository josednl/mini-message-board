const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: new Date(),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: new Date(),
	},
    {
		text: 'How are you?!',
		user: 'Anthony',
		added: new Date(),
	}
];

function addMessage(user, text) {
    const newMessage = {
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

function getMessagesByUser(user) {
    return messages.find(m => m.user === user);
}

module.exports = {
    addMessage,
    getAllMessages,
    getMessagesByUser
}
