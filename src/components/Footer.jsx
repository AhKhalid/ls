import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-contact">
                <h1>Email</h1>
                <h2>adobexd@mail.com</h2>
                <h1>Phone No.</h1>
                <h2>+97123456789</h2>
            </div>
            <div className="footer-social">
                <h1>Social</h1>
                <div>
                    <a href="#">
                        <FontAwesomeIcon icon={faInstagram} size='xl' style={{ "color": "#FFF" }} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faXTwitter} size='xl' style={{ "color": "#FFF" }} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faFacebookF} size='xl' style={{ "color": "#FFF" }} />
                    </a>
                </div>
            </div>
        </footer>
    )
}