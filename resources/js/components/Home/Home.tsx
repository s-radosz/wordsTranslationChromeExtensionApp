import * as React from "react";
import Head from "./../utils/Head/Head";
import Footer from "./../utils/Footer/Footer";
import {
    Link
} from 'react-router-dom';
//@ts-ignore
import works1 from "./../../../assets/images/works1.svg"
//@ts-ignore
import works2 from "./../../../assets/images/works2.svg"
//@ts-ignore
import works3 from "./../../../assets/images/works3.svg"
//@ts-ignore
import works4 from "./../../../assets/images/works4.svg"

const Home = () => {
    return (
        <>
            <Head title="Words Translations" />

            <div className="container landing">
                <div className="landing__main">
                    <div className="landing__main--wrapper">
                        <h1>Feeling bored learning useless vocabulary or words you already know?</h1>
                        <h2>With EnglishPragmatic you can save vocabulary you see on websites/articles in the internet and practice them lately.</h2>

                        <div className="landing__main--btn">
                            <Link to="/login">
                                <button className="yellow-border-btn landing__single-btn landing__single-btn--sign-in box-shadow">Sign In</button>
                            </Link>
                            <Link to="/register">
                                <button className="yellow-btn landing__single-btn landing__single-btn--register box-shadow">Register</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="landing__works">
                    <div className="landing__works--single">
                        <div className="landing__works--text-container">
                            <h3>Install extension to your chrome browser</h3>
                            <p>Visit download page</p>
                        </div>
                        <img src={works1} />
                    </div>

                    <div className="landing__works--single">
                        <img src={works2} />
                        <div className="landing__works--text-container">
                            <h3>Save words for your account</h3>
                            <p>Mark interesting phrase, right click on selected text and click 'Save to words translations'</p>
                        </div>
                    </div>

                    <div className="landing__works--single">
                        <div className="landing__works--text-container">
                            <h3>Manage words to exercises</h3>
                            <p>If you save some words to learn, come back to the dashboard and prepare rules to learn new words</p>
                        </div>
                        <img src={works3} />
                    </div>

                    <div className="landing__works--single">
                        <img src={works4} />
                        <div className="landing__works--text-container">
                            <h3>Practice, practice, practice ...</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
