import { fetchUsers, fetchSingleUser, deleteUser, modifyUser, registerUser } from '../api/index.js';

export default {
    async FETCH_USERS({ commit }) {
        let res = await fetchUsers(page);
        if (res) {
            console.log(res.data.data);

        }
    }
}