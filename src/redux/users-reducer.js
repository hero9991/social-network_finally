import { getUsers, unfollowUser, followUser } from "../components/api/api"

const GET_USERS = 'GET_USERS'
const CHANGE_PAGE = 'CHANGE_PAGE'
const LOAD = 'LOAD'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const DISABLE = 'DISABLE'
const ENABLE = 'ENABLE'

let initialState = {
    users: [],
    usersCount: 0,
    trueUsersCount: 100,
    activePage: 1,
    isLoaded: false,
    isDisabled: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, users: [...action.users], usersCount: action.usersCount }
        case CHANGE_PAGE:
            return { ...state, activePage: action.activePage }
        case LOAD:
            return { ...state, isLoaded: action.isLoaded }
        case FOLLOW:
            return { ...state, users: state.users.map(item => item.id === action.userId ? { ...item, followed: true } : item) }
        case UNFOLLOW:
            return { ...state, users: state.users.map(item => item.id === action.userId ? { ...item, followed: false } : item) }
        case DISABLE:
            return { ...state, isDisabled: [...state.isDisabled, action.userId]}
        case ENABLE:
            return { ...state, isDisabled: state.isDisabled.filter(item => item !== action.userId)}
        default: return state
    }
}

const setUsers = (users, usersCount) => ({
    type: GET_USERS,
    users,
    usersCount
})
export const changePage = (activePage) => ({
    type: CHANGE_PAGE,
    activePage
})
const load = (isLoaded) => ({
    type: LOAD,
    isLoaded
})
const follow = (userId) => ({
    type: FOLLOW,
    userId
})
const unfollow = (userId) => ({
    type: UNFOLLOW,
    userId
})
const disable = (userId) => ({
    type: DISABLE,
    userId
})
const enable = (userId) => ({
    type: ENABLE,
    userId
})

export const setUsersThunk = (trueUsersCount, activePage) => (dispatch) => {
    dispatch(load(false))
    getUsers(trueUsersCount, activePage).then(response => {
        dispatch(load(true))
        dispatch(setUsers(response.data.items, response.data.totalCount))
    })
}
export const unfollowThunk = (id ) => (dispatch) => {
    dispatch(disable(id))
    unfollowUser(id).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(unfollow(id))
            dispatch(enable(id))
        }
    })
}
export const followThunk = (id ) => (dispatch) => {
    dispatch(disable(id))
    followUser(id).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(follow(id))
            dispatch(enable(id))
        }
    })
}

export default usersReducer