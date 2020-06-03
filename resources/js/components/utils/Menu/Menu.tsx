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
                        <p className="menu__logo--main"><span>English</span>Pragmatic</p>
                        <p className="menu__logo--description">Practice vocabulary you really need!</p>
                    </div>
                </Link>


                <div className="menu__right">
                    <div className="menu__right-routes">
                        {user && user.email ?
                            <>
                                <Link to="/dashboard" className="menu-link">Practice</Link>
                                <p className="menu-link">Hi, {user.email}</p>
                                <button className="menu-btn yellow-btn" onClick={handleLogout}>Logout</button>
                            </>
                            :
                            <>
                                <Link to="/login" className="menu-link">Sign in</Link>
                                <Link to="/register"><button className="yellow-btn box-shadow">Sign up</button></Link>
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