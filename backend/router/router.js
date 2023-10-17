const {Router} = require('express');
const router = new Router();
const projectController = require('../controllers/projectController');

router.get('/api/v1/getProjects', projectController.getProjects);

module.exports = router;