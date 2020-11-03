import React from 'react'
import s from './Header.module.css'
import logo from '../../assets/img/logo.png'
import users from '../../assets/img/users.png'
import login from '../../assets/img/login.png'
import logout from '../../assets/img/logout.png'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <div className={s.main}>
            <div>
                <NavLink to='/Profile'><img src={logo} alt=''></img></NavLink>
            </div>
            <div>
                <NavLink to='/Users'><img src={users} alt=''></img></NavLink>
            </div>
            {props.isAuth ?
                <div className={s.login}>
                    <NavLink onClick={props.logoutThunk} to='/Login'>LOGOUT<img src={logout} alt=''/> </NavLink>
                </div>
                : <div className={s.login}>
                    <NavLink to='/Login'>LOGIN <img src={login} alt=''></img></NavLink>
                </div>
            }
        </div >
    )
}

export default Header