const { Router } = require('express');

const TagsController = require('../controllers/TagsController');

const notesRoutes = Router();

const tagsController = new TagsController();

notesRoutes.get('/', tagsController.index);



module.exports = notesRoutes;