import axios from 'axios'

const server = axios.create({
    baseURL: "/api"
})


export const getApiList = () => server.get('/list').then(res => res.data)