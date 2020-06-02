import * as React from "react";
import userActions from "../../modules/actions/userActions";
import wordsActions from "../../modules/actions/wordsActions"
import { connect } from "react-redux";
import LoginForm from "./LoginForm/LoginForm"
import { handlePostRequest, handleGetRequest } from "./../helpers/api"


const Login = ({ config, createUser, createWords, handleChangePath }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();


        let userResult = await handlePostRequest(`${config.paths.API_URL}/login`, {
            email: email,
            password: password
        })

        console.log(["userResult", userResult])

        createUser(userResult);

        //@ts-ignore
        localStorage.setItem("token", userResult.token);
        //@ts-ignore
        localStorage.setItem("user", JSON.stringify(userResult.user));

        //@ts-ignore
        let wordsResult = await handleGetRequest(`${config.paths.API_URL}/words/all/${userResult.user.id}`, userResult.token)

        createWords(wordsResult)

        handleChangePath("dashboard")
    }

    return (
        <div className="container__one-page--center">
            <LoginForm
                setEmail={setEmail}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
            />
        </div>

    )
}
const mapStateToProps = state => ({
    config: state.config
});

const mapDispatchToProps = dispatch => ({
    createUser: user => dispatch(userActions.createUser(user)),
    createWords: wordsData => dispatch(wordsActions.createWords(wordsData))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);