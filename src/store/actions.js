import { fetchUsers, fetchSingleUser, deleteUser, modifyUser, registerUser } from '../api';

export default {
    async FETCH_USERS({ commit }) {
        let res = await fetchUsers();
        if (res) {
            console.log(res.data.data);

        }
    },
    GET_USER_DETAIL({ commit }, id) {
        commit('SET_ID', id);
    }
}