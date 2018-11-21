const model = require('../models/cmsModel');

module.exports.listMember = async (req, res) => {  
    let serviceName = 'Cms : List Member '
    let response = {};
    
    try{
        let result = await model.listMember(req.db);
        
        response.result = result;
        return res.status(200).send(response);
    }catch(error){
        response.message = `${serviceName} , Error : ${error}`;
        return res.status(500).send(response);
    }
}
module.exports.selectMember = async (req, res) => {  
    let serviceName = 'Cms : Select Member '
    let id = req.params.id || null;
    let response = {};    
    
    try{
        let result = await model.selectMember(req.db,id);    
        if (result != null && result.legth != 0) {
            response.message = `${serviceName} : Successfully !!`;
            response.result = result;
            return res.status(200).send(response);
        } else {
            response.message = `${serviceName} , Error : result is empty`;
            return res.status(500).send(response);
        }   
    }catch(error){
        response.message = `${serviceName} , Error : ${error}`;
        return res.status(500).send(response);
    }
}
module.exports.addMember = async (req, res) => {      
    let serviceName = 'Cms : Add Member '
    let requestData = req.body.requestData; 
    let response = {};
    
    
    try{
        let result = await model.insertMember(req.db,requestData);    
        if (result != null && result.legth != 0) {
            response.message = `${serviceName} : Successfully !!`;
            // response.result = result;
            return res.status(200).send(response);
        } else {
            response.message = `${serviceName} , Error : result is empty`;
            return res.status(500).send(response);
        }   
    }catch(error){
        response.message = `${serviceName} , Error : ${error}`;
        return res.status(500).send(response);
    }
}
module.exports.updateMember = async (req, res) => {      
    let serviceName = 'Cms : Update Member '
    let requestData = req.body.requestData; 
    let response = {};
    
    
    try{
        let result = await model.updateMember(req.db,requestData);    
        if (result != null && result.legth != 0) {
            let resultData = await model.selectMember(req.db,requestData._id);
            response.message = `${serviceName} : Successfully !!`;
            response.result = resultData;
            return res.status(200).send(response);
        } else {
            response.message = `${serviceName} , Error : result is empty`;
            return res.status(500).send(response);
        }   
    }catch(error){
        response.message = `${serviceName} , Error : ${error}`;
        return res.status(500).send(response);
    }
}
module.exports.deleteMember = async (req, res) => {  
    let serviceName = 'Cms : Delete Member '
    let id = req.params.id || null;
    let response = {};    
    
    try{
        let checkData = await model.selectMember(req.db,id);
 
        if(checkData == null || checkData == undefined || checkData.legth == 0){
            let error = `${serviceName} , Error: Data not found`;
            response.message = error;
            return res.status(500).send(response);
        }

        let result = await model.deleteMember(req.db,id);  

        if (result != null && result.legth != 0) {
            response.message = `${serviceName} : Successfully !!`;
            return res.status(200).send(response);
        } else {
            response.message = `${serviceName} , Error : result is empty`;
            return res.status(500).send(response);
        }   
    }catch(error){
        response.message = `${serviceName} , Error : ${error}`;
        return res.status(500).send(response);
    }
}