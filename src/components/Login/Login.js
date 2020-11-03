import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { minLength } from '../utilits/validators/validators'
import { Input } from '../FormsControls/FormsControls'

const minLength5 = minLength(5)

const LoginForm = (props) => {
    return props.isAuth ?
        <form onSubmit={props.handleSubmit}>
            <button>logOut</button>
        </form>
        : <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='input' name='login' placeholder='Login' />
            </div>
            <div>
                <Field validate={[minLength5]} component={Input} name='password' placeholder='Password' type={'password'}/>
            </div>
            <div>
                <Field component='input' name='rememberMe' type={'checkbox'} />Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (data) => {
        console.log(data)
        props.isAuth ?
            props.logoutThunk()
            : props.loginThunk(data.login, data.password, data.rememberMe)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} isAuth={props.isAuth} />
        </div>
    )
}

export default Login