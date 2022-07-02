import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Header() {
    return (
        <div>
            <a>Leaf Company</a>
            <a>CONTACTS</a>
            <div>
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faYoutube} />
            </div>
        </div>
    );
}

export default Header;