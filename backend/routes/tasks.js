const router = require('express').Router();
const tasksController = require('../controllers/tasksController');

router
    .route('/:listid')
    .get(tasksController.getList)
    .put(tasksController.updateList)

router
    .route('/create')
    .post(tasksController.createList);



// router
//     .route('/')
//     .get(tasksController.findAll)
//     .post(tasksController.create);

// router
//     .route('/:id')
//     .get(tasksController.findById)
//     .put(tasksController.update)
//     .delete(tasksController.remove);

module.exports = router;