const router = require('express').Router();
const userController = require('../controllers/userController');

router
    .route('/')
    .post(userController.createUser)

router
    .route('/:hash')
    .get(userController.getListId)

module.exports = router;