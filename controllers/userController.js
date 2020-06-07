const User = require('../models/User');

// Defining all methods and business logic for routes

module.exports = {

    getListId: function (req, res) {
        User.find({ "userHASH": req.params.hash })
            .then(listid => res.json(listid))
            .catch(err => res.status(422).json(err));
    },
    createUser: function (req, res) {
        User.create(req.body)
            .then(user => res.json(user))
            .catch(err => res.status(422).json(err));
    },

};
