import { logout, login, getAuthInfo } from "../components/api/api"
import { stopSubmit } from "redux-form"

const GET_AUTH = 'GET_AUTH'
const LOGOUT = 'LOGOUT'

const initialState = {
    id: null,
    login: '',
    email: '',
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_AUTH:
            return { ...state, ...action.authInfo, isAuth: true }
        case LOGOUT:
            return { ...state, isAuth: false, id: null, login: '', email: '' }
        default: return state
    }
}

const getAuth = (authInfo) => ({
    type: GET_AUTH,
    authInfo
})

const logoutAC = () => ({
    type: LOGOUT
})

export const getAuthThunk = () => (dispatch) => {
    return getAuthInfo().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuth(response.data.data))
        }
    })
}

export const logoutThunk = () => (dispatch) => {
    logout().then(response => {
        if (response.data.resultCode === 0) dispatch(logoutAC())
    })
}

export const loginThunk = (email, password, rememberMe) => (dispatch) => {


    login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) dispatch(getAuth({ email, id: response.data.data.userId }))
        else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error"
            dispatch(stopSubmit("login", { _error: message }))
        }
    })
}

export default authReducer