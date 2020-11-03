import usersReducer from "./users-reducer"
import profileReducer from "./profile-reducer"
import authReducer from "./auth-reducer"
import thunk from "redux-thunk"
import { reducer as formReducer } from 'redux-form'

const { createStore, combineReducers, applyMiddleware } = require("redux");

const reducers = combineReducers ({
    usersPage: usersReducer,
    profilePage: profileReducer,
    auth: authReducer,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store