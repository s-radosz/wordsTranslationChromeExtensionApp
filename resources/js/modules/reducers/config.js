import actionTypes from "./../actionTypes";

const defaultState = {
    paths: {
        APP_URL: process.env.MIX_APP_URL
            ? process.env.MIX_APP_URL
            : "http://www.praktyczny-angielski.pl",
        API_URL: process.env.MIX_APP_URL
            ? `${process.env.MIX_APP_URL}/api`
            : "http://www.praktyczny-angielski.pl/api"
        // APP_URL: "https://www.praktyczny-angielski.pl",
        // API_URL: "https://www.praktyczny-angielski.pl/api"
    },
    showLoader: false,
    alert: {
        showAlert: false,
        alertType: "",
        alertMessage: ""
    }
};

export default function words(state = defaultState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
