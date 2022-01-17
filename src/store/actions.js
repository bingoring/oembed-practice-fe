import { fetchEmbedData } from '../api';

export default {
    async FETCH_EMBED_DATA({ commit }, url) {
        try {
            let allEmbedData = await fetchEmbedData(url);

            commit('GET_ALL_DATA', allEmbedData);

        } catch (err) {
            console.log(err);
        }

    },
}