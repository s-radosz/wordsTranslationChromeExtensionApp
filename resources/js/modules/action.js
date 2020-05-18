// types of action
const Types = {
    CREATE_USER: "CREATE_USER"
};
// actions
const createUser = task => ({
    type: Types.CREATE_USER,
    payload: task
});

export default {
    createUser,
    Types
};