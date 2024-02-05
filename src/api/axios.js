import axios from 'axios'
import qs from 'qs'

export const axiosInstance = axios.create({
    baseURL: 'http://192.168.0.235:8081',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    withCredentials: true,
})

const requestSuccessHandler = (config) => {
    return config
}

axiosInstance.interceptors.request.use(
    (config) => requestSuccessHandler(config),
    (error) => Promise.reject(error),
)

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
)

export const getAPI = ({ endPoint, axiosOption }) => {
    return axiosInstance.get(endPoint, axiosOption)
}

export const postAPI = ({ endPoint, data, axiosOption }) => {
    return axiosInstance.post(endPoint, qs.stringify(data), axiosOption)
}

export const putAPI = ({ endPoint, data, axiosOption }) => {
    return axiosInstance.put(endPoint, data, axiosOption)
}

export const deleteAPI = ({ endPoint, data, axiosOption }) => {
    return axiosInstance.delete(endPoint, data, axiosOption)
}
