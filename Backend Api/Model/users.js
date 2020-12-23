const connection = require('../Utils/conncetion');
const errors = require('../Utils/errors');

exports.module = class User { 
    constructor(user_id, fullname, birthadate, UserLogin, UserProfile){
        this.user_id = user_id
        this.fullname = fullname
        this.birthadate = birthadate
        this.UserLogin = UserLogin
        this.UserProfile = UserProfile
    }

    // SELECT METHODS -> GET REQUESTS
    static getAllUsers(callback){
        connection.query(`SELECT * FROM USER`, (err, results) => {
            if(err) throw err
            callback(results)
        }) 
    }

    static getUser(enty_type, user_entry, callback){
        connection.query(`SELECT nom_user, birthdate, gender FROM USER WHERE ${enty_type} = '${user_entry}'`, (err, results) => {
            if(err) throw err;
            if(results.length == 0) callback(errors.id_not_found);
            else{
                callback(results)
            }
        })  
    }

    // INSERT METHOD -> POST REQUEST
    static async insertUser(fullname, birthdate, gender, callback){
        var user_id = await this.getLastIdInserted('id_user','USER');
        user_id = parseInt(user_id.id_user) + 1
        connection.query(`INSERT INTO USER VALUES (${user_id},'${fullname}','${birthdate}', '${gender}')`, err => {
            if(err) {
                callback(errors.insert_value_error)
                throw err;
            }
            else {
                callback({'status' : 'success', 'message' : 'A User Was Inserted Successfully!'})
            }
        })
    } 

    // DELETE METHOD -> DELETE REQUEST
    static deleteUser(user_id, callback){
        //TO BE COMPLETED
        connection.query(`DELETE FROM USER WHERE id_user = ${user_id}`, (err, results) => {
            if(err) throw err;
            if(results.affectedRows  == 0) callback(errors.id_not_found);
            else{
                callback({'status' : 'success', 'message' : 'A User Was Deleted Successfully!'})
            }
        })  
    }

    //User Profile CRUD
    static getUserProfilesById(user_entry, callback){
        connection.query(`SELECT profile_picture, profile_description, profile_type FROM PROFILE WHERE id_user = '${user_entry}'`, (err, results) => {
            if(err) throw err
            callback(results)
        }) 
    }

    static getUserProfilesByName(user_name, callback){
        connection.query(`SELECT profile_picture, profile_description, profile_type FROM PROFILE WHERE id_user = (SELECT id_user FROM USER WHERE nom_user = '${user_name}');`, (err, results) => {
            if(err) throw err
            callback(results)
        }) 
    }

    static async createUserProfile(profile_picture, profile_description, profile_type, id_user, callback){
        var profile_id = await this.getLastIdInserted('id_profile','PROFILE');
        profile_id = parseInt(profile_id.id_profile) + 1
        connection.query(`INSERT INTO PROFILE VALUES (${profile_id},'${profile_picture}','${profile_description}','${profile_type}','${id_user}')`, err => {
            if(err) {
                callback(errors.insert_value_error)
            }
            else {
                callback({'status' : 'success', 'message' : 'A Profile Was Created Successfully!'})
            }
        })
    }

    static deletUserProfiles(user_id, callback){
        connection.query(`DELETE FROM PROFILE WHERE id_user = '${user_id}';`, (err, results) => {
            if(results.affectedRows  == 0) callback(errors.id_not_found);
            else{
                callback({'status' : 'success', 'message' : 'User\'s Profiles Was Deleted Successfully!'})
            }
        }) 
    }

    
    static deletUserProfile(profile_id, callback){
        connection.query(`DELETE FROM PROFILE WHERE id_profile = '${profile_id}';`, (err, results) => {
            if(results.affectedRows  == 0) callback(errors.id_not_found);
            else{
                callback({'status' : 'success', 'message' : 'A User Profile Was Deleted Successfully!'})
            }
        }) 
    }

    //User Login CRUD
    static async createUserLogin(username, email, password, id_user, callback){
        connection.query(`SELECT COUNT(*) as count from USERLOGIN WHERE username = '${username}'`, (err, results) => {
            if(err) throw err
            if(results[0].count > 0) callback(errors.id_already_exists)
            else {
                connection.query(`INSERT INTO USERLOGIN VALUES ('${username}','${email}','${password}','${id_user}')`, err => {
                    if(err) {
                        callback(errors.insert_value_error)
                    }
                    else {
                        callback({'status' : 'success', 'message' : 'A User Login Was Added Successfully!'})
                    }
                })
            }
        })
    }

    //HELPERS
    static getLastIdInserted(id, table) {
        return new Promise(user_id => {
            connection.query(`SELECT ${id} FROM ${table} ORDER BY id_user DESC LIMIT 1`, (err, results) => {
                if(err) throw err
                user_id(results[0])
            })
        });
    }
        
}