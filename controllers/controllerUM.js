const model = require('../models/umModel');
const jwt = require('jsonwebtoken');
const fs = require('fs');

module.exports.login = async (req, res) => {  
    let serviceName = 'UM : Login '
    let username = req.body.username || null;
    let password = req.body.password || null;
    let response = {};

   // console.log(req.db);
    

    if(username == null || password == null){
        let error = `${serviceName} , Error: Parameter not found`;
        response.message = error;
        return res.status(400).send(response);        
    }
    
    try{
        let result = await model.login(req.db, username, password);
        if(result !== null){
            let token = signJWT(username);
            response.message = `${serviceName} : Successfully !!`;
            response.token = token;
            return res.status(200).send(response);
        }
        response.message = `${serviceName} , Error : username or password invalid`;
        return res.status(500).send(response);
    }catch(error){
        response.message = `${serviceName} , Error : ${error}`;
        return res.status(500).send(response);
    }
}

module.exports.logout = async (req, res) => {  
    let serviceName = 'UM : Logout '
    let token = req.headers.token || null;
    let response = {};

    if(token == null ){
        let error = `${serviceName} , Error: token not found`;
        response.message = error;
        return res.status(400).send(response);
    }
    
    try{
        fs.appendFileSync('blacklist.txt',token + '\r\n');
        response.message = `${serviceName} :  Successfully !!`;
        return res.status(200).send(response);
    }catch(error){
        response.message = `${serviceName} , Error : ${error}`;
        return res.status(500).send(response);
    }
}

const signJWT = (username) => {
    return jwt.sign({
        username: username
    },
        'testJWT',
        { expiresIn: 60*60 });
}