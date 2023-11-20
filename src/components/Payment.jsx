import './Payment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSackDollar, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faApplePay, faGooglePay} from '@fortawesome/free-brands-svg-icons'


export default function Payment() {
    return (
        <div className="payment">
            <div className="payment-details">
                <div>
                    <span>Items</span>
                    <span className='span span-default'>Sony a7s III, Sony 70-200mm, Apeture 1200d pro</span>
                </div>
                <div>
                    <span>Name</span>
                    <span className='span span-default'>John Terry Omer Fadul</span>
                </div>
                <div>
                    <span>Address</span>
                    <span className='span span-default'>Khalifa Bulding, 254 St, Al Nahda 1, Dubai </span>
                </div>
                <div>
                    <span>Phone Number</span>
                    <span className='span span-default'>+971512345678</span>
                </div>
                <div>
                    <span>Email</span>
                    <span className='span span-default'>Example@info.com</span>
                </div>
                <div>
                    <span>Total</span>
                    <span className='span span-default'>4500 AED</span>
                </div>
            </div>
            <div className="payment-methods">
                <button className='button button-outline'>
                    <FontAwesomeIcon icon={faSackDollar} />
                    <span> Cash </span>
                </button>
                <button className='button button-outline'>
                    <FontAwesomeIcon size={"1rem"} icon={faCreditCard} />
                </button>
                <button className='button button-outline'>
                    <FontAwesomeIcon size={"xl"} icon={faApplePay} />
                </button>
                <button className='button button-outline'>
                <FontAwesomeIcon  size={"xl"} icon={faGooglePay} />
                                </button>
            </div>
            <div className="payment-actions"></div>
        </div>
    )

}