const projectService = require('../services/projectService');
const projectController = {};

projectController.getProjects = async(req,res) => {
    try{
        const projects = await projectService.getProjects();
        res.send({status : "Success" , data : projects});
    }catch(error){
        res.send({status : "Failed" , error : error});
    }
}

module.exports = projectController;