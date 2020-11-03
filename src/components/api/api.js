import Axios from "axios"


const instance = Axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "226f16df-9137-4f6e-9e84-3e016b8869e6",
    },
})

// Users
export const getUsers = (trueUsersCount, activePage) => instance.get(`users?count=${trueUsersCount}&page=${activePage}`)
export const followUser = (userId) => instance.post(`follow/${userId}`)
export const unfollowUser = (userId) => instance.delete(`follow/${userId}`)

//Profile
export const getProfile = (userId) => instance.get(`profile/${userId}`)
export const getProfileStatus = (userId) => instance.get(`profile/status/${userId}`)
export const setProfileStatus = (status) => instance.put(`profile/status`, {status})

//Auth
export const getAuthInfo = () => instance.get(`auth/me`)
export const login = (email, password, rememberMe) => instance.post(`auth/login`, {email, password, rememberMe})
export const logout = () => instance.delete(`auth/login`, {})