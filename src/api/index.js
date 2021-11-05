
const config = {
    baseUrl: 'https://reqres.in/api/'
}
export default {
    fetchUsers(page) {
        return this.$axios.get(`${config.baseUrl}users?page=${page}`);
    },
    fetchSingleUser(id) {
        return this.$axios.get(`${config.baseUrl}users/${id}`);
    },
    deleteUser(id) {
        return this.$axios.delete(`${config.baseUrl}users/${id}`);
    },
    modifyUser(id, body) {
        return this.$axios.put(`${config.baseUrl}users/${id}`, body);
    },
    registerUser(body) {
        return this.$axios.post(`${config.baseUrl}users`, body);
    },

}
