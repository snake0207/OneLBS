import axios from 'axios'
import qs from 'qs'
import auth from '#/api/auth'
import { usePostRefreshToken } from '#/hooks/queries/auth'
// import { useAuthActions } from '#/store/useAuthStore'

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_GW_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
})

const getToken = () => {
    return localStorage.getItem('auth-storage')
        ? JSON.parse(localStorage.getItem('auth-storage')).state.accessToken
        : ''
}

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = getToken()
        // accessToken && console.log('accessToken : ', accessToken)
        if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`
        return config
    },
    (error) => Promise.reject(error),
)

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        // console.log('RESPONSE ERROR : ', error)
        // if (error.response.status === 401) {
        //     const prevRequest = error.config
        //     prevRequest._retry = true

        //     const newAccessToken = await auth.postRefreshToken()

        //     prevRequest.headers.Authorization = `Bearer ${newAccessToken}`
        //     useAuthStore.setState({ accessToken: newAccessToken })

        //     return axiosInstance(prevRequest)
        // }

        return Promise.reject(error)
    },
)

const generateQueryEndPoint = (endPoint, data) => {
    const queryString = qs.stringify(data, { addQueryPrefix: true })

    return `${endPoint}${queryString}`
}

export const getAPI = ({ endPoint, data, axiosOption }) => {
    return axiosInstance.get(data ? generateQueryEndPoint(endPoint, data) : endPoint, axiosOption)
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
