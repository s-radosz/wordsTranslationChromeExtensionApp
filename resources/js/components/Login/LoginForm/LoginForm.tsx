import * as React from "react";

const LoginForm = ({ setEmail, setPassword, handleSubmit }) => {
    return (
        <form>
            <input onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <input onChange={e => setPassword(e.target.value)} placeholder="Hasło" type="password" />

            <button type="submit" className="btn red-btn box-shadow" onClick={e => handleSubmit(e)}>Zaloguj</button>
        </form>
    )
}
export default LoginForm;