import * as React from "react";
import Head from "./../utils/Head/Head";
import Footer from "./../utils/Footer/Footer";
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
                    <h1>Learn words which you really need</h1>
                    <h2>Save words which you meet in the internet and practice continuos learning</h2>

                    <div className="landing__main--btn">
                        <button className="landing__single-btn landing__single-btn--sign-in">Sign In</button>
                        <button className="landing__single-btn landing__single-btn--register">Register</button>
                    </div>
                </div>

                <div className="landing__works">

                    <div className="landing__works--single">
                        <div className="landing__works--text-container">
                            <h3>Install extension to your chrome browser</h3>
                        </div>
                        <img src={works1} />
                    </div>

                    <div className="landing__works--single">
                        <img src={works2} />
                        <div className="landing__works--text-container">
                            <h3>Save words for your account</h3>
                        </div>
                    </div>

                    <div className="landing__works--single">
                        <div className="landing__works--text-container">
                            <h3>Manage words to exercises</h3>
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
