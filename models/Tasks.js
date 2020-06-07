const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({

    list: [
        {
            task: {},
            date: {},
            label: {},
            status: {},
            priority: {}
        }
    ]
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;


// const taskSchema = new Schema({
//     task: {
//         type: String,
//         required: true
//     }
// });

