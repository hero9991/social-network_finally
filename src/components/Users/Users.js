import React from 'react'
import s from './Users.module.css'
import { NavLink } from 'react-router-dom'

const Users = (props) => {
    const pageCountNum = Math.ceil(props.usersCount / props.trueUsersCount)
    let pageCount = []
    for (let i = 1; i <= pageCountNum; i++) {
        pageCount.push(i)
    }
    return (
        <div className={s.main}>
            <div className={s.pages}>
                {pageCount.map(item => <span className={props.activePage === item ? s.active
                    : s.page} onClick={() => props.changePage(item)} key={item}>{` ${item}`}</span>)}
            </div>
            {props.users.map(item => <User name={item.name} id={item.id} user={item}
                followThunk={props.followThunk} unfollowThunk={props.unfollowThunk}
                isDisabled={props.isDisabled} key={item.id} />)}
        </div>
    )
}

const User = (props) => {
    return (<div className={s.user}>
        <NavLink className={s.link} to={`/Profile/${props.id}`} ><div>{props.name}</div></NavLink>
        {props.user.followed ?
            <button className={s.unfollow} disabled={props.isDisabled.some(item => item === props.id)} onClick={
                () => { props.unfollowThunk(props.id) }}>unfollow</button>
            : <button className={s.follow} disabled={props.isDisabled.some(item => item === props.id)} onClick={
                () => { props.followThunk(props.id) }
            }>follow</button>
        }

    </div>
    )
}
export default Users