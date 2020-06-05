const Task = require('../models/Tasks');

// Defining all methods and business logic for routes

module.exports = {

    getList: function (req, res) {
        Task.findById(req.params.listid)
            .then(list => res.json(list))
            .catch(err => res.status(422).json(err));
    },
    createList: function (req, res) {
        Task.create(req.body)
            .then(newlist => res.json(newlist))
            .catch(err => res.status(422).json(err));
    },
    updateList: function (req, res) {
        Task.findOneAndUpdate({ _id: req.params.listid }, req.body)
            .then(newlist => res.json(newlist))
            .catch(err => res.status(422).json(err));
    }
};


// findAll: function (req, res) {
//     Task.find(req.query)
//         .then(tasks => res.json(tasks))
//         .catch(err => res.status(422).json(err));
// },
// findById: function (req, res) {
//     Task.findById(req.params.id)
//         .then(task => res.json(task))
//         .catch(err => res.status(422).json(err));
// },
// create: function (req, res) {
//     Task.create(req.body)
//         .then(newBook => res.json(newBook))
//         .catch(err => res.status(422).json(err));
// },
// update: function (req, res) {
//     Task.findOneAndUpdate({ _id: req.params.id }, req.body)
//         .then(task => res.json(task))
//         .catch(err => res.status(422).json(err));
// },
// remove: function (req, res) {
//     Task.findById({ _id: req.params.id })
//         .then(task => task.remove())
//         .then(alltasks => res.json(alltasks))
//         .catch(err => res.status(422).json(err));
// }