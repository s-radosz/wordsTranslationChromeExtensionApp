import * as React from "react";
import axios from "axios";
import userActions from "../../modules/actions/userActions";
import { connect } from "react-redux";
import LoginForm from "./LoginForm/LoginForm"

const Login = ({ user, createUser }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`http://127.0.0.1:8000/api/login`, {
            email: email,
            password: password
        }).then(res => {
            console.log(res)
            createUser(res.data.result);
        })
    }

    return (
        <div>
            <p className="loggedIn">logged in - {user && user.email ? user.email : ""}</p>

            <LoginForm
                setEmail={setEmail}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
            />
        </div>

    )
}
const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    createUser: user => dispatch(userActions.createUser(user)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);