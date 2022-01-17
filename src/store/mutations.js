
export const GET_ALL_DATA = 'GET_ALL_DATA';

export default {
    [GET_ALL_DATA](state, allEmbedData) {
        state.allEmbedData = allEmbedData
    },
}