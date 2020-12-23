const rooms = require('express').Router();

rooms.get('/', (req, res) => {
    res.send('Hello from rooms')
    res.end()
})

rooms.post('/', (req, res) =>{
    //Code
})

rooms.put('/', (req, res) =>{
    //Code
})

rooms.delete('/', (req, res) =>{
    //Code
})



module.exports.roomsRouter = rooms;