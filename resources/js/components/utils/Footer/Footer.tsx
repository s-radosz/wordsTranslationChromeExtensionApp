import * as React from "react";
import facebook from "./../../../../assets/images/facebook.png"
import instagram from "./../../../../assets/images/instagram.png"

const Footer = () => {
    return (
        <div className="homepage__footer--container">
            <div className="homepage__footer--wrapper">
                <div className="homepage__footer--left">
                    <p>&copy; 2020 praktyczny-angielski.pl </p>
                </div>
                <div className="homepage__footer--right">
                    <a href="https://www.facebook.com/Praktyczny-angielskipl-108966347529850/?modal=admin_todo_tour" title="Odwiedź stronę na facebook" target="_blank">
                        <img src={facebook} />
                    </a>
                    <a href="https://www.instagram.com/praktyczny_angielski_pl/" title="Odwiedź stronę na instagram" target="_blank">
                        <img src={instagram} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
