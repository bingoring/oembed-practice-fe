import axios from 'axios';
const config = {
    baseUrl: 'https://reqres.in/api/'
}

async function fetchUsers(page) {
    return await this.$axios.get(`${config.baseUrl}users?page=${page}`);
}
function fetchSingleUser(id) {
    return axios.get(`${config.baseUrl}users/${id}`);
}
async function deleteUser(id) {
    return await this.$axios.delete(`${config.baseUrl}users/${id}`);
}
async function modifyUser(id, body) {
    return await this.$axios.put(`${config.baseUrl}users/${id}`, body);
}
async function registerUser(body) {
    return await this.$axios.post(`${config.baseUrl}users`, body);
}

export {
    fetchUsers,
    fetchSingleUser,
    deleteUser,
    modifyUser,
    registerUser,
}
