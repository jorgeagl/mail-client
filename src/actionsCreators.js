const readEmail = email => {
    return {
        type: 'READ_EMAIL',
        email
    }
}

const removeEmail = email => {
    return {
        type: 'REMOVE_EMAIL',
        email
    }
}

export { readEmail, removeEmail };