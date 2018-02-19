import users from '.././api/index';

const listUsers = users();

export default function (state = listUsers, action) {
    switch (action.type) {
        case "DELETE_USER":
            return state.filter(item => item.uuid !== action.payload)
        case "EDIT_VALUE_USER":
            return state.map((item)=>{
                if(item.uuid === action.id){
                    return item = action.payload
                }
                return item;
            })
        default:
            return state
    }

}