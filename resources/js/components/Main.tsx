import { Component } from "react";
import * as React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { MainContext } from "./MainContext";
import history from "./History";
import Alert from "./utils/Alert/Alert";
import Home from "./utils/Home/Home";
import Register from "./utils/Register/Register";
import { MainProps, MainState } from "./Main.interface";
import { Provider } from 'react-redux'
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./../modules/store";

//@ts-ignore
const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

class Main extends Component<MainProps, MainState> {
    history: any;
    routes: any;

    constructor(props) {
        super(props);

        this.state = {
            APP_URL: "http://127.0.0.1:8000",
            // APP_URL: "http://land-of-mine.com/",
            showLoader: false,
            alertMessage: "",
            alertStatus: "",
            allowedPaths: ["game"],
            allowRedirect: false,
            redirectedPath: "",
            userLoggedIn: false
        };

        this.history = history;

        this.routes = [
            {
                path: "/register",
                name: "Register",
                Component: Register
            },
            {
                path: "/",
                name: "Home",
                Component: Home
            }
        ];
    }

    checkAllowedPath = (path) => {
        const allowedPaths = this.state.allowedPaths;

        if (allowedPaths.includes(path.split("/")[1])) {
            //console.log(["path", path, path.split("/")[1]]);
            return <Redirect to={path} />;
        } else {
            return <Redirect to="/" />;
        }
    };

    handleChangePath = (path) => {
        //console.log(["chandleChangePath", path]);
        const { allowedPaths, userLoggedIn } = this.state;

        if (!userLoggedIn) {
            if (allowedPaths.includes(path.split("/")[0])) {
                this.setState({ allowRedirect: true, redirectedPath: path });
            } else {
                this.setState({ allowRedirect: true, redirectedPath: "/" });
            }
        } else {
            this.history.push({ pathname: path, state: {} });
        }
    };

    handleShowAlert = (message, status) => {
        this.setState({ alertMessage: message, alertStatus: status });

        setTimeout(() => {
            this.setState({ alertMessage: "", alertStatus: "" });
        }, 4000);
    };

    handleShowLoader = (status) => {
        this.setState({ showLoader: status });
    };

    getUrlPathname = () => {
        return window.location.pathname;
    };

    render() {
        const {
            APP_URL,
            showLoader,
            alertMessage,
            alertStatus,
            allowRedirect,
            redirectedPath,
        } = this.state;


        return (
            <ReduxProvider store={reduxStore}>
                {alertMessage && alertStatus && (
                    <Alert message={alertMessage} status={alertStatus} />
                )}

                <div className="container-sm app__container">
                    <Router history={history}>
                        {allowRedirect && redirectedPath && (
                            <Redirect to={redirectedPath} />
                        )}

                        <Switch>
                            {this.routes.map(
                                ({ path, name, Component }) => {
                                    return (
                                        <Route
                                            exact
                                            key={`path-${name}`}
                                            path={path}
                                        >
                                            <Component />
                                        </Route>
                                    );
                                }
                            )}
                        </Switch>
                    </Router>
                </div>
            </ReduxProvider>
        );
    }
}

export default Main;
