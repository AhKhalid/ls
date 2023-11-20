import CartItem from './CartItem'
import './Cart.css'

export default function Cart(props) {
    return (
        <div className="cart">
            <div className="cart-close" onClick={props.onCartClose}>
                <button className='button button-primary'> &times;</button>
            </div>
            <div className="cart-items">
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className="cart-actions">
                <button className='button'>Sub-Total 4500 AED</button>
                <button className='button button-primary'>Check-out</button>
            </div>
        </div>
    )
}


