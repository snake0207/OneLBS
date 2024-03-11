import axios from 'axios'
import qs from 'qs'
import useAuthStore from '#/store/useAuthStore'
import auth from '#/api/auth'

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_GW_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${useAuthStore.getState().accessToken}`,
    },
    withCredentials: true,
})

axiosInstance.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error),
)

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        // if (error.response.status) {
        //     const prevRequest = error.config
        //     prevRequest._retry = true

        // const newAccessToken = await auth.postRenewToken()

        //     prevRequest.headers.Authorization = `Bearer ${newAccessToken}`
        //     useAuthStore.setState({ accessToken: newAccessToken })

        //     return axiosInstance(prevRequest)
        // }

        return Promise.reject(error)
    },
)

export const getAPI = ({ endPoint, data, axiosOption }) => {
    return axiosInstance.get(endPoint + qs.stringify(data), axiosOption)
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
