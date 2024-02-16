

import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoYoutube } from "react-icons/io";






const FooterComponent = (props) => {
    return (
        <div data-bs-theme="light" className="bg-light text-dark p-5 " style={{ height: 'auto' }}>
            <footer data-bs-theme="light" >
                <ul className="nav justify-content-center border-bottom pb-3 mb-3 navbar-light text-dark">
                    <li className="nav-item"><a href="http://www.facebook.com" className="nav-link px-2 text-dark"><FaFacebook fontSize={32} />
                    </a></li>
                    <li className="nav-item"><a href="http://www.instagram.com" className="nav-link px-2 text-dark"><GrInstagram fontSize={32} /></a></li>
                    <li className="nav-item"><a href="http://www.twitter.com" className="nav-link px-2 text-dark"><BsTwitterX fontSize={32} />
                    </a></li>
                    <li className="nav-item"><a href="http://www.linkedin.com" className="nav-link px-2 text-dark"><CiLinkedin fontSize={32} />
                    </a></li>
                    <li className="nav-item"><a href="http://www.youtube.com" className="nav-link px-2 text-dark"><IoLogoYoutube fontSize={32} />
                    </a></li>
                </ul>
                <p className="text-center text-dark">© 2023 Company, Inc</p>
            </footer>
        </div>

    );
}

export default FooterComponent;




