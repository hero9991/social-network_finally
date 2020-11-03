import React from 'react'
import s from './FormsControls.module.css'

export const Textarea = ({ input, meta, ...props }) => {
    return (
        <div>
            <textarea {...props} {...input} {...meta} className={meta.error ? s.errorText : s.text} />
            <div>
                {meta.error && <span className={s.span}>"{meta.error}"</span>}
            </div>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    return (
        <div>
            <input {...props} {...input} {...meta} className={meta.touched && meta.error ? s.errorText : s.text}/>
            <div>
                {meta.touched && meta.error && <span className={s.span}>"{meta.error}"</span>}
            </div>
        </div>
    )
}
