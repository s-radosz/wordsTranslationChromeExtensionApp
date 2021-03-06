import actionTypes from "./../actionTypes"

const defaultState = {
    paths: {
        APP_URL: "http://127.0.0.1:8000",
        API_URL: "http://127.0.0.1:8000/api"
        // APP_URL: "https://www.praktyczny-angielski.pl",
        // API_URL: "https://www.praktyczny-angielski.pl/api"
    },
    showLoader: false,
    alert: {
        showAlert: false,
        alertType: "",
        alertMessage: ""
    }
}

export default function words(state = defaultState, action) {
    switch (action.type) {
        default:
            return state;
    }
};