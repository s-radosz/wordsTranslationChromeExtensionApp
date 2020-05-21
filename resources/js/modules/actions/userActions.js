import actionTypes from "./../actionTypes"

const createUser = task => ({
    type: actionTypes.CREATE_USER,
    payload: task
});

export default {
    createUser
};