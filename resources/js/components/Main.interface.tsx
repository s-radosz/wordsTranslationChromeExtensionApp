interface MainProps { }

interface MainState {
    APP_URL: string;
    showLoader: boolean;
    alertMessage: string;
    alertStatus: string;
    allowedPaths: string[],
    allowRedirect: boolean;
    redirectedPath: string;
    userLoggedIn: boolean;
}

export { MainProps, MainState };