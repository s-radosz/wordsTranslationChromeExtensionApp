import * as React from "react";
import axios from "axios";
import ACTIONS from "../../modules/actions/userActions";
import { connect } from "react-redux";

const Register = ({ user, config, createUser }) => {
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [levelList, setLevelList] = React.useState([]);
    const [selectedLevelId, setSelectedLevelId] = React.useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            email: email,
            password: password,
            name: name,
            user_level_id: selectedLevelId
        })

        axios.post(`${config.paths.API_URL}/register`, {
            email: email,
            password: password,
            name: name,
            user_level_id: selectedLevelId
        }).then(res => {
            console.log(res)
            createUser(res.data.result);
        })
    }

    const getUserLevels = () => {
        axios.get(`${config.paths.API_URL}/user-levels/all`).then(res => {
            console.log(["getUserLevels", res])
            setLevelList(res.data.result);
        })
    }

    React.useEffect(() => {
        getUserLevels();
    }, [])

    return (
        <div className="container__one-page--center">
            <form>
                <input onChange={e => setName(e.target.value)} placeholder="Imię" />
                <input onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Hasło" />
                <label>Jak oceniasz swój poziom angielskiego?</label>
                <select onChange={e => setSelectedLevelId(e.target.value)}>
                    {levelList.map((level, i) => {
                        return (
                            //@ts-ignore
                            <option value={level.id} key={level.id}>{level.level}</option>
                        )
                    })}
                </select>

                <button className="btn red-btn box-shadow" type="submit" onClick={e => handleSubmit(e)}>Zarejestruj</button>
            </form>
        </div>

    )
}
const mapStateToProps = state => ({
    user: state.user,
    config: state.config
});

const mapDispatchToProps = dispatch => ({
    createUser: user => dispatch(ACTIONS.createUser(user)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);