const sessions = require('express').Router();

sessions.get('/', (req, res) => {
    res.send('Hello from sessions')
    res.end()
})

sessions.post('/', (req, res) =>{
    //Code
})

sessions.put('/', (req, res) =>{
    //Code
})

sessions.delete('/', (req, res) =>{
    //Code
})



module.exports.sessionsRouter = sessions;