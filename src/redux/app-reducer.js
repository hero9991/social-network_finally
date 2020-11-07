
const { getAuthThunk } = require("./auth-reducer")

const INITIALIZE = 'INITIALIZE'

const initialState = {
    isInitialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE:
            return { ...state, isInitialized: true }
        default: return state
    }
}

const initialize = () => ({
    type: INITIALIZE
})

export const initializeThunk = () => (dispatch) => {
    const promise = dispatch(getAuthThunk())
    Promise.all([promise])
        .then(() => {
            dispatch(initialize())
        })
}

export default appReducer