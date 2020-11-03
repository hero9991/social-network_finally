import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLength } from '../../utilits/validators/validators'
import { Textarea } from '../../FormsControls/FormsControls'
import s from '../Profile.module.css'

const maxLength10 = maxLength(10)


const ProfilePostsForm = (props) => {
    return(
        <form className={s.profile_form} onSubmit={props.handleSubmit}>
            <Field name='post' component={Textarea} validate={[maxLength10]}/>
            <button>Add post</button>
        </form>
    )
}

const ProfilePostsReduxForm = reduxForm({ form: 'posts' })(ProfilePostsForm)

const ProfilePosts = (props) => {
    const onSubmit = (data) => {
        props.setPost(data.post)
    }
     return (
        <div className={s.posts}>
            POSTS
            <ProfilePostsReduxForm onSubmit={onSubmit}/>
            {props.posts.map(item => <div>{item}</div>)}
        </div>
    )
}

export default ProfilePosts