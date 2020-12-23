const invitations = require('express').Router();

invitations.get('/', (req, res) => {
    res.send('Hello from invitations')
    res.end()
})

invitations.post('/', (req, res) =>{
    //Code
})

invitations.put('/', (req, res) =>{
    //Code
})

invitations.delete('/', (req, res) =>{
    //Code
})



module.exports.invitationsRouter = invitations;