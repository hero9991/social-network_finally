import React from 'react'
import { connect } from 'react-redux'
const { Redirect } = require("react-router-dom")

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

const withRedirect = (Component) => {
    const withRedirectInnew = (props) => {
        //return props.isAuth ? ///////удалить след ретурн!!!!
           return <Component {...props}/>
         //   : <Redirect to='/Login' />
    }
    return connect(mapStateToProps)(withRedirectInnew)
}

export default withRedirect