const { Router, request, response } = require('express');
const multer = require("multer");
const uploadConfig = require("../configs/upload");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");
const UsersAvatarController= require("../controllers/UserAvatarController");
const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);
const usersAvatarController = new UsersAvatarController();
const usersController = new UsersController();


usersRoutes.post('/', usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.patch("/avatar",ensureAuthenticated, upload.single("avatar"), UsersAvatarController);


module.exports = usersRoutes
