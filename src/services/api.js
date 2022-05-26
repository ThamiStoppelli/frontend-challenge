import axios from 'axios'

const mockapi = axios.create({
    baseURL: "https://randomuser.me/api"
})

export default mockapi;
