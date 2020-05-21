import * as React from "react";
import axios from "axios";
import ACTIONS from "../../modules/actions/userActions";
import { connect } from "react-redux";

const Register = ({ user, createUser }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`http://127.0.0.1:8000/api/register`, {
            email: email,
            password: password
        }).then(res => {
            console.log(res)
            createUser(res.data.result.user.email);
        })

        //console.log([email, password])
    }

    return (
        <div>
            <p>register - {user && user[0] && user[0].email ? user[0].email : ""}</p>

            <form>
                <input onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <input onChange={e => setPassword(e.target.value)} placeholder="password" />

                <button type="submit" onClick={e => handleSubmit(e)}>Register</button>
            </form>
        </div>

    )
}
const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    createUser: user => dispatch(ACTIONS.createUser(user)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);