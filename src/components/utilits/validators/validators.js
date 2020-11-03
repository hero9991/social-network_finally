

export const maxLength = max => value => {
    if (value && value.length > max) return `max length is ${max} symbols`
    return undefined
}
export const minLength = min => value => {
    if (value && value.length < min) return 'to ease password'
    return undefined
}

