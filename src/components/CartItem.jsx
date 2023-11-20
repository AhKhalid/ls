import cartImg from '../assets/cart-item-img.png'
import './CartItem.css'

export default function CartItem(){
    return (
        <div className="cart-item">
            <div className="cart-img">
                <img className="img" src={cartImg} alt='cart-img' />
            </div>
            <div className="cart-details">
                <span className='cart-title'>Canon 5D Mark IV</span>
                <span>Rent time <b>4 days</b> From <b>5 Oct 2023</b> To <b>9 Oct 2023</b></span>
            </div>
            <div className="cart-price">
                <span>1500 AED</span>
            </div>
            <hr />
        </div>
    )
}