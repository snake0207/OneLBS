import axios from 'axios'
import useAuthStore from '#/store/useAuthStore'

export const axiosInstance = axios.create({
    // baseURL: import.meta.env.VITE_GW_BASE_URL,
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `${useAuthStore.getState().accesstoken}`,
    },
    withCredentials: true,
})

axiosInstance.interceptors.request.use(
    (config) => config,
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
    return axiosInstance.put(endPoint, data, axiosOption)
}

export const deleteAPI = ({ endPoint, data, axiosOption }) => {
    return axiosInstance.delete(endPoint, data, axiosOption)
}
