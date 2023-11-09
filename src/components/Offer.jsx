import offer1 from '../assets/offer1.png';
import './Offer.css'

export default function Offer(props) {
    return (
        <div className="offer">
            <div className="offer-img">
                <img className="img" src={offer1} alt="offer" />
            </div>
            <div className="offer-details">
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
                <div className='price-details'>
                    <span className='price-now'>{props.now} AED/Day</span>
                    <span className='price-was'>{props.was} AED/Day</span>
                </div>
                <button className='add-to-cart'>Add to cart</button>
            </div>
        </div>)
}