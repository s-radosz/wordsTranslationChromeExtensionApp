import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import USERACTIONS from "../../../modules/actions/userActions";

const Menu = ({ user, logoutUser, handleChangePath }) => {
    const handleLogout = () => {
        logoutUser();
        handleChangePath("")
    }

    return (
        <div className="menu box-shadow">
            <div className="menu-container">
                <Link to="/">
                    <div className="menu__logo">
                        <p className="menu__logo--main"><span className="menu__logo--red">Praktyczny</span><span className="menu__logo--blue">Angielski</span></p>
                        <p className="menu__logo--description">Ucz się angielskiego jakiego potrzebujesz!</p>
                    </div>
                </Link>


                <div className="menu__right">
                    <div className="menu__right-routes">
                        {user && user.email ?
                            <>
                                <div className="menu__right-routes--top">
                                    <Link to="/panel" className="menu-link">Rozpocznij naukę</Link>
                                    <p className="menu-link">Cześć, {user.email}</p>
                                </div>
                                <button className="menu-btn blue-btn" onClick={handleLogout}>Wyloguj</button>
                            </>
                            :
                            <>
                                <div className="menu__right-routes--top">
                                    <Link to="/logowanie" className="menu-link">Logowanie</Link>
                                </div>
                                <Link to="/rejestracja"><button className="red-btn box-shadow">Rejestracja</button></Link>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(USERACTIONS.logoutUser()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);