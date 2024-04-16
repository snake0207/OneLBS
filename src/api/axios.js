import axios from 'axios'
import qs from 'qs'
import auth from '#/api/auth'

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_GW_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    // withCredentials: true,
})

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = `Bearer ${JSON.parse(localStorage.getItem('auth-storage')).state.accessToken}`
        // config.headers.Authorization = accessToken
        return config
    },
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

const generateQueryEndPoint = (endPoint, data) => {
    const queryString = qs.stringify(data, { addQueryPrefix: true })

    return `${endPoint}${queryString}`
}

export const getAPI = ({ endPoint, data, axiosOption }) => {
    return axiosInstance.get(data ? generateQueryEndPoint(endPoint, data) : endPoint, axiosOption)
}

export const postAPI = ({ endPoint, data, axiosOption }) => {
    console.log(data, axiosOption)
    return axiosInstance.post(endPoint, data, axiosOption)
}

export const putAPI = ({ endPoint, data, axiosOption }) => {
    return axiosInstance.put(endPoint, data, axiosOption)
}

export const deleteAPI = ({ endPoint, data, axiosOption }) => {
    return axiosInstance.delete(endPoint, data, axiosOption)
}
