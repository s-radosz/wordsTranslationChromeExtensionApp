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
//@ts-ignore
import poster from "./../../../assets/images/poster.png"
//@ts-ignore
import video from "./../../../assets/videos/video.mp4"

const Home = () => {
    return (
        <>
            <Head title="Words Translations" />

            <div className="container landing">
                <div className="landing__main">
                    <div className="landing__main--wrapper">
                        <video width="100%" height="100vh" preload='auto' poster={poster} loop autoPlay muted>
                            <source src={video} type="video/mp4" />
                        </video>

                        <div className="video__overlay"></div>

                        <div className="video__content">
                            <h1>Masz dość tracenia czasu na przypadkowe powtarzanie słownictwa, które już doskonale znasz z przygotowanych planów?</h1>
                            <h2>Z Praktycznym Angielskim możesz zapisywać w wyszukiwarce słowa, których znaczenia nie wiesz i uczyć ich się później.</h2>

                            <div className="landing__main--btn">
                                <Link to="/login">
                                    <button className="red-border-btn landing__single-btn landing__single-btn--sign-in">Logowanie</button>
                                </Link>
                                <Link to="/register">
                                    <button className="red-btn landing__single-btn landing__single-btn--register">Rejestracja</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="landing__works">
                    <div className="landing__works--single">
                        <div className="landing__works--text-container">
                            <h3>Zainstaluj wtyczkę na przeglądarce Google Chrome</h3>
                            <p>Odwiedź stronę pobierania</p>
                        </div>
                        <img src={works1} />
                    </div>

                    <div className="landing__works--single">
                        <img src={works2} />
                        <div className="landing__works--text-container">
                            <h3>Zaloguj się do wtyczki</h3>
                            <p>W pasku przeglądarki kliknij w ikonę PK i zaloguj się do swojego konta, aby móc zapisywać słowa/zwroty</p>
                        </div>
                    </div>

                    <div className="landing__works--single">
                        <div className="landing__works--text-container">
                            <h3>Zapisuj słownictwo</h3>
                            <p>Czytając teksty w języku angielskim, zaznacz interseującą Cię frazę, kliknij prawym klawiszem na zaznaczony tekst i wybierz 'Zapisz w Praktycznym Angielskim'</p>
                        </div>
                        <img src={works3} />
                    </div>

                    <div className="landing__works--single">
                        <img src={works4} />
                        <div className="landing__works--text-container">
                            <h3>Ucz się słownictwa</h3>
                            <p>W dowolnym momencie odwiedź naszą stronę i po zalogowaniu się na stronie możesz zacząć uczyć się zapisanych słów i zwrotów</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
