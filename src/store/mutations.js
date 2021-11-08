export const SET_SINGLE_USER = 'SET_SINGLE_USER';
export const GET_ALL_USER = 'GET_ALL_USER';
export const SET_SINGLE_USER_ID = 'SET_SINGLE_USER_ID';

export default {
    [SET_SINGLE_USER](state, singleUserData) {
        state.singleUserData = singleUserData;
    },
    [GET_ALL_USER](state, allUserData) {
        state.allUserData = allUserData;
    },
    [SET_SINGLE_USER_ID](state, singleUserId) {
        state.singleUserId = singleUserId;
    }
}