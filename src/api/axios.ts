import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://smart-urban-heat-map.ch/api/1.0/'
})