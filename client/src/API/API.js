import axios from "axios";

export default {
  getList: function (id) {
    return axios.get("/api/list/" + id);
  },

  updateList: function (id, newlist) {
    return axios.put("/api/list/" + id, newlist);
  },
  createList: function (list) {
    return axios.post("/api/list/create/", list);
  },
  getListId: function (id) {
    return axios.get("/api/user/" + id);
  },
  createUser: function (newuser) {
    return axios.post("/api/user", newuser);
  },
};
