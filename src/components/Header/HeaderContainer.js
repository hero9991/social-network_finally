import React, { useEffect } from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { getAuth, logoutThunk } from '../../redux/auth-reducer'
import { getAuthInfo } from '../api/api'

const HeaderContainer = (props) => {
    useEffect(() => {
        getAuthInfo().then(response => {
            if (response.data.resultCode === 0) {
                debugger
                props.getAuth(response.data.data)
            }
        })
    }, [props.id])

    return (
        <Header isAuth={props.isAuth} logoutThunk={props.logoutThunk}/>
    )
}

const mapStateToProps = (state) => ({
    id: state.auth.id,
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, { getAuth, logoutThunk })(HeaderContainer)