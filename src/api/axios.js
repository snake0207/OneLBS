import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: '',
    headers: {
        'Content-Type': 'x-www-form-urlencoded',
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
    return axiosInstance.post(endPoint, data, axiosOption)
}

export const putAPI = ({ endPoint, data, axiosOption }) => {
    return axiosInstance.post(endPoint, data, axiosOption)
}

export const deleteAPI = ({ endPoint, data, axiosOption }) => {
    return axiosInstance.delete(endPoint, data, axiosOption)
}
