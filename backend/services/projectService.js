const projectService = {};
const Project = require('../schema/project');

projectService.getProjects = async() => {
    try{
        const projects = await Project.find();
        return projects;
    }catch(error){
        return error;
    }
} 

projectService.addProject = async(newProject) => {
    const existingProject = await Project.findOne({title : newProject.title});
    if(existingProject){
        console.log(existingProject);
        return ({status : 'Failed' , error : "Project Already Exists"});
    }
    try{
        const result = Project.create(newProject);
        return ({status : 'Success'});
    }catch(error){
        console.log(error);
        return ({status : 'Failed', error : 'Failed to Create Project'});
    }
}

module.exports = projectService;