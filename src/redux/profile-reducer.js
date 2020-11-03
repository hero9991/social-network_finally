import { getProfile, getProfileStatus, setProfileStatus } from "../components/api/api"

const GET_PROFILE = 'GET_PROFILE'
const LOAD = 'LOAD'
const SET_STATUS = 'SET_STATUS'
const SET_POST = 'SET_POST'

const initialState = {
    profileInfo: null,
    isLoaded: false,
    status: '',
    posts: []
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE:
            return { ...state, profileInfo: { ...action.profileInfo } }
        case LOAD:
            return { ...state, isLoaded: action.isLoaded }
        case SET_STATUS:
            return { ...state, status: action.status}
        case SET_POST: 
            return {...state, posts: [...state.posts, action.post]}
        default: return state
    }
}

const setProfile = (profileInfo) => ({
    type: GET_PROFILE,
    profileInfo
})
const load = (isLoaded) => ({
    type: LOAD,
    isLoaded
})
const setStatus = (status) => ({
    type: SET_STATUS,
    status
})
export const setPost = (post) => ({
    type: SET_POST,
    post
})

export const setProfileThunk = (currentUser) => (dispatch) => {
    dispatch(load(false))
    getProfile(currentUser).then(response => {
        dispatch(load(true))
        dispatch(setProfile(response.data))
    })
}

export const getProfileStatusThunk = (currentUser) => (dispatch) => {
    getProfileStatus(currentUser).then(response => {
        dispatch(setStatus(response.data))
    })
}
export const setProfileStatusThunk = (status) => (dispatch) => {
    setProfileStatus(status).then(response => {
        if (response.data.resultCode === 0){
            dispatch(setStatus(status))
        }
    })

}

export default profileReducer