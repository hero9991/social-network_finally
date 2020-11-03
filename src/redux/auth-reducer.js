import { logout, login } from "../components/api/api"

const GET_AUTH = 'GET_AUTH'
const LOGOUT = 'LOGOUT'

const initialState = {
    id: null,
    login: '',
    email: '',
    isAuth: false
}

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_AUTH:
            return {...state, ...action.authInfo, isAuth: true}
        case LOGOUT: 
            return {...state, isAuth: false, id: null, login: '', email: ''}
        default: return state
    }
}

export const getAuth = (authInfo) => ({
    type: GET_AUTH,
    authInfo
})

const logoutAC = () => ({
    type: LOGOUT
})

export const logoutThunk = () => (dispatch) => {
    logout().then(response => {
        if (response.data.resultCode === 0) dispatch(logoutAC())
    })
}

export const loginThunk = (email, password, rememberMe) => (dispatch) => {
    login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) dispatch(getAuth({email, id: response.data.data.userId}))
    })
}

export default authReducer