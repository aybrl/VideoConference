const users = require('express').Router();
const usersController = require('../Controllers/users')

//Users GET Methods
users.get('/', usersController.getAllUsers)
users.get('/:user_entry', usersController.getUser)
users.get('/:user_entry/profiles', usersController.getUserProfiles)

//Users POST Methods
users.post('/', usersController.insertUser)
users.post('/:id_user/profile', usersController.createUserProfile)
users.post('/:id_user/userlogin', usersController.createUserLogin)

//Users PUT Methods
users.put('/', )

//Users DELETE Methods
users.delete('/:user_id', usersController.deleteUser)
users.delete('/profiles/:id_user', usersController.deleteUserProfiles)
users.delete('/profile/:id_profile', usersController.deleteUserProfile)


module.exports.usersRouter = users;