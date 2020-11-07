

export const maxLength = max => value => {
    if (value && value.length > max) return `max length is ${max} symbols`
    return undefined
}
export const minLength = min => value => {
    if (value && value.length < min) return 'too ease password'
    return undefined
}

export const required = value => {
    if (value) return undefined
    return 'field is required'
}