const ObjectId = require('mongodb').ObjectId;

module.exports.listMember = (db) => {
    return new Promise((resolve, reject) => (
        db.collection('member_users')
        .find()
        .sort({ _id : -1 })
        .toArray(function(err,result){
            if(err){
                reject(err);
            }

            resolve(result);
        })
    ))
}


module.exports.selectMember = async(db,id) => {
    let coll = db.collection('member_users');
    let query = {_id : new ObjectId(id)};

    try{
        return await coll.findOne(query);
    }catch(err){
        throw  err;
    }
}

module.exports.insertMember = async(db,object) =>{
    let coll = db.collection('member_users');
    
    try{
        return await coll.insert(object);
    }catch(err){
        throw errr;
    }
}

module.exports.updateMember= async(db,object) => {
    let coll = db.collection('member_users');
    let query = {_id : new ObjectId(object._id)};
    let newValues ={
        $set : {
            "firstname" : object.firstname,
            "lastname" : object.lastname,
            "age" : object.age,
            "gender" : object.gender
        }
    }

    try{
        return await coll.update(query, newValues);
    }catch(err){
        throw err;
    }
}

module.exports.deleteMember = async(db,id) => {
    let coll = db.collection('member_users');
    let query = {_id : new ObjectId(id)};

    try{
        return await coll.deleteOne(query);
    }catch(err){
        throw  err;
    }
}