const messages = require('express').Router();
const messageController = require('../Controllers/messages')

//GET Requests
messages.get('/:sender', messageController.sentMessages)
messages.get('/:receiver', messageController.receivedMessages)
messages.get('/:id_message', messageController.getMessageById)


//POST Requests
messages.post('/', (req, res) =>{
    //Code
})

messages.put('/', (req, res) =>{
    //Code
})

messages.delete('/', (req, res) =>{
    //Code
})



module.exports.messagesRouter = messages;