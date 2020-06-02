
import { combineReducers } from 'redux'
import user from "./reducers/user"
import words from "./reducers/words"
import config from "./reducers/config"

export default combineReducers({
    user,
    words,
    config
})
