module.exports.login = async(db,username,password) => {
    let coll = db.collection('admin_users');

    try{
        return await coll.findOne({
            "username" : username ,
            "password" : password
        });
    }catch(err){
        throw err;
    }
}
