import React from 'react'
import NavBar from './NavBar'
import { connect } from 'react-redux'

const NavBarContainer = (props) => {
    return (
        <NavBar isAuth={props.isAuth}/>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps)(NavBarContainer)
