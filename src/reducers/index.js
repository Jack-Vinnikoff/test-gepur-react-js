import {combineReducers} from 'redux';
import users from './user';

// const test = (state = UsersReducers, action) => {
//     return state.concat();
// }

const allReducers = combineReducers({
    users
});

export default allReducers