const { Router, request, response } = require('express');
const multer = require("multer");
const uploadConfig = require("../configs/upload");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();


const usersController = new UsersController();


usersRoutes.post('/', usersController.create);
usersRoutes.put("/:id", usersController.update);
usersRoutes.patch("/avatar",ensureAuthenticated, (request, response) => {
    console.log(request.file.filename);
    response.json
});

module.exports = usersRoutes
