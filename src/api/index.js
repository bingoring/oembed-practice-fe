import axios from 'axios';
const config = {
    baseUrl: 'https://reqres.in/api/'
}

async function fetchUsers() {
    const firstData = await axios.get(`${config.baseUrl}users?page=1`);
    let allUserData = firstData.data.data;
    //this.items = firstData.data.data;

    let pageNum = 2;
    while (
        ((await axios.get(`${config.baseUrl}users?page=${pageNum}`)).data.data[0])) {
        var tmpData = await axios.get(`${config.baseUrl}users?page=${pageNum}`);

        pageNum++;

        tmpData.data.data.forEach((data) => {
            allUserData.push(data);
        });
    }
    //console.log(allUserData);
    return allUserData;
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
