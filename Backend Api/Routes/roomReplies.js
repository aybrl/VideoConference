const roomReplies = require('express').Router();

roomReplies.get('/', (req, res) => {
    res.send('Hello from roomReplies')
    res.end()
})

roomReplies.post('/', (req, res) =>{
    //Code
})

roomReplies.put('/', (req, res) =>{
    //Code
})

roomReplies.delete('/', (req, res) =>{
    //Code
})



module.exports.roomRepliesRouter = roomReplies;