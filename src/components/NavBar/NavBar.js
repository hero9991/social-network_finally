import React from 'react'
import s from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className={s.main}>
            <NavLink className={s.link} activeClassName={s.active} to='/Profile'>Profile</NavLink>
            <NavLink className={s.link} activeClassName={s.active} to='/Users'>Users</NavLink>
            <NavLink className={s.link} activeClassName={s.active} to='/Login'>Login</NavLink>
        </div>
    )
}

export default NavBar