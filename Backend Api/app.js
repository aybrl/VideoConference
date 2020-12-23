const express = require('express');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();

//Importing Routes
const users = require('./Routes/users').usersRouter;
const rooms = require('./Routes/rooms').roomsRouter;
const roomReplies = require('./Routes/roomReplies').roomRepliesRouter;
const sessions = require('./Routes/sessions').sessionsRouter;
const invitations = require('./Routes/invitations').invitationsRouter;
const messages = require('./Routes/messages').messagesRouter;

//Importing Utils
const errors = require('./Utils/errors');
const connection = require('./Utils/conncetion')

//Middlewares
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use('/users', users);
app.use('/rooms', rooms);
app.use('/roomReplies', roomReplies);
app.use('/sessions', sessions);
app.use('/invitations', invitations);
app.use('/messages', messages);

//404 Error
app.use('/', (req, res) => {
    res.status(404)
    res.send(errors.not_found)
    res.end()
})

//Database Conncetion
connection.connect();

app.listen(3000)