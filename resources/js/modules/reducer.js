import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
    user: []
};

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.Types.CREATE_USER: {
            console.log(action);

            let item = action.payload;
            let newUser = { email: item };
            let newState = _.cloneDeep(state);
            newState.user.push(newUser);
            return newState;
        }

        default:
            return state;
    }
};

export default userReducer;