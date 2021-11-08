import { fetchUsers, fetchSingleUser, deleteUser, modifyUser, registerUser } from '../api';

export default {
    async FETCH_USERS({ commit }) {
        try {
            /*
            const allUserData = (await fetchUsers(1)).data.data;
            //this.items = firstData.data.data;

            let pageNum = 2;
            while (
                ((await fetchUsers(pageNum)).data.data[0])) {
                var tmpData = await fetchUsers(pageNum);

                pageNum++;

                tmpData.data.data.forEach((data) => {
                    allUserData.push(data);
                });
            }
*/
            let allUserData = await fetchUsers();

            commit('GET_ALL_USER', allUserData);

        } catch (err) {
            console.log(err);
        }

    },
    async GET_SINGLE_USER({ commit }, id) {
        try {
            let singleData = await fetchSingleUser(id)
            commit('SET_SINGLE_USER', singleData.data.data);
        } catch (err) {
            console.log(err);
        }
    },
    FETCH_SINGLE_USER_ID({ commit }, id) {
        try {
            commit('SET_SINGLE_USER_ID', id);
        } catch (err) {
            console.log(err);
        }
    },
    MODIFY_USER({ commit }, body) {
        try {
            let modRes = modifyUser(body);
            commit('MODIFY_USER', modRes);
        } catch (err) {
            console.log(err);
        }
    },

}