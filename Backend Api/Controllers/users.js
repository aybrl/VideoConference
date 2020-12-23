const User = require('../Model/users').module;

//User controllers
exports.getAllUsers = (req, res) => {
    User.getAllUsers(results => {
        res.send(results)
    })
}

exports.getUser = (req, res) => {
    const user_entry = req.params.user_entry;
    var entry_type
    if(isNaN(user_entry)) {
        entry_type = 'nom_user'
    }else {
        entry_type = 'id_user'
    }
    User.getUser(entry_type, user_entry, results => {
        res.send(results)
    })
}

exports.insertUser = (req, res) => {
    User.insertUser(req.body.fullname, req.body.birthdate, req.body.gender, message => {
        res.send(message);
    })
}

exports.deleteUser = (req , res) => {
    User.deleteUser(req.params.user_id, results => {
        res.send(results)
    })
}

//User Profile Controllers
exports.getUserProfiles = (req, res) => {
    const user_entry = req.params.user_entry;
    if(isNaN(user_entry)) {
        User.getUserProfilesByName(user_entry, message => {
            res.send(message);
        })
    }else {
        User.getUserProfilesById(user_entry, message => {
            res.send(message);
        })
    }
    
}

exports.createUserProfile = (req, res) => {
    User.createUserProfile(req.body.profile_picture, req.body.profile_description, req.body.profile_type, req.params.id_user, message => {
        res.send(message);
    })
}

exports.deleteUserProfiles = (req, res) => {
    User.deletUserProfiles(req.params.id_user, message => {
        res.send(message);
    })
}

exports.deleteUserProfile = (req, res) => {
    User.deletUserProfile(req.params.id_profile, message => {
        res.send(message);
    })
}


//User Login Controllers
exports.createUserLogin = (req, res) => {
    User.createUserLogin(req.body.username, req.body.email, req.body.password, req.params.id_user, message => {
        res.send(message);
    })
}

