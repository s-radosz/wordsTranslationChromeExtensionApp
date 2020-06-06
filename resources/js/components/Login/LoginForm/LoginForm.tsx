import * as React from "react";

const LoginForm = ({ setEmail, setPassword, handleSubmit }) => {
    return (
        <form>
            <input onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <input onChange={e => setPassword(e.target.value)} placeholder="password" />

            <button type="submit" className="btn yellow-btn" onClick={e => handleSubmit(e)}>Login</button>
        </form>
    )
}
export default LoginForm;