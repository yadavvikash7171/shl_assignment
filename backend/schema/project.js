const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({

    title : {
        type: String,
        required : true
    },

    technologies : [
    ],

    frontend : [
        
    ],

    backend : [
        
    ],

    database : [
         
    ],

    infrastructure : [
        
    ],

    desc : {
        type : String
    }

},{collection : 'projects_collection'});

const model = mongoose.model('ProjectSchema', ProjectSchema);

module.exports = model;