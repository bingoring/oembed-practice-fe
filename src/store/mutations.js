export const SET_USER_ID = 'SET_USER_ID';

export default {
    [SET_USER_ID](state, id) {
        state.id = id;
    },
}