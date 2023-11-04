import instgram from '../assets/instgram.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import './Footer.css'

export default function Footer(){
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
                    <a href="#"><img src={instgram} alt="instgram icon" /></a>
                    <a href="#"><img src={twitter} alt="twitter icon" /></a>
                    <a href="#"><img src={facebook} alt="facebook icon" /></a>
                </div>
            </div>
        </footer>
    )
}