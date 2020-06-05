const router = require('express').Router();
const taskRoutes = require('./tasks');
const userRoutes = require('./user');

router.use('/api/list', taskRoutes);
router.use('/api/user', userRoutes);

module.exports = router