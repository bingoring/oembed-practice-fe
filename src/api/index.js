import axios from 'axios';
const config = {
    baseUrl: 'http://localhost:8080/api/socialembed'
}
async function fetchEmbedData(url) {
    const allEmbedData = await axios.get(`${config.baseUrl}?url=${url}`);
    return allEmbedData.data.response;
}
export {
    fetchEmbedData,
}
