import axios from 'axios';

export default {

    getList: function (id) {
        return axios.get('http://localhost:5000/api/list/' + id);
    },

    updateList: function (id, newlist) {
        return axios.put('http://localhost:5000/api/list/' + id, newlist);
    },
    createList: function (list) {
        return axios.post('http://localhost:5000/api/list/create', list);
    },
    getListId: function (id) {
        return axios.get('http://localhost:5000/api/user/' + id);
    },
    createUser: function (newuser) {
        return axios.post('http://localhost:5000/api/user', newuser);
    }


};