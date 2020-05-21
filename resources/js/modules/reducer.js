import actionTypes from "./actionTypes"

const defaultState = {
    user: {
        email: "",
        token: "",
        email_verified_at: ""
    },
    wordsTranslations: [],
    config: {
        paths: {
            APP_URL: "http://127.0.0.1:8000",
            API_URL: "http://127.0.0.1:8000/api"
        },
        showLoader: false,
        alert: {
            showAlert: false,
            alertType: "",
            alertMessage: ""
        }
    }
};

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_USER: {
            console.log(["action.payload", action.payload]);
            return {
                ...state, user: {
                    email: action.payload.user.email,
                    token: action.payload.token,
                    email_verified_at: action.payload.user.email_verified_at,
                }
            };
        }

        default:
            return state;
    }
};

export default userReducer;