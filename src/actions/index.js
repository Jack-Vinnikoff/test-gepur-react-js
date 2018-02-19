export const deleteUser =(user) => {
    return {
        type:'DELETE_USER',
        payload:user
    }
}

export const saveEditValue =(val,id) => {
    return {
        type:'EDIT_VALUE_USER',
        payload:val,
        id:id
    }
}