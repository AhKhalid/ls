import './Beneficiary.css'

export default function Beneficiary() {
    return (
        <div className="beneficiary">
            <div className="form-group">
                <label for="fullname" className='form-label'>Full Name  <span style={{"color": "red"}}>*</span></label>
                <input id="fullname" className='form-input text-input' placeholder='As in your Emirate ID' />
            </div>
            <div className="form-group">
                <label className="form-label" for="contact">Contact <span style={{ "color": "red" }}>*</span></label>
                <input id="contact" type='email' className='form-input text-input' placeholder='Email Address' />
                <input id="mobile" type='tel' className='form-input text-input' placeholder='Mobile Number' />
            </div>
            <div className="form-group">
                <label className="form-label" for="shipping-address">Shipping Address <span style={{ "color": "red" }}>*</span></label>
                <button className='button'>UAE</button>
                <input id='shipping-address' type='text' className='form-input text-input' placeholder='ex. Khalifa Bulding, 254 St, Al Nahda 1, Dubai  ' />
            </div>
            <div className="form-group">
                <label className="form-label" for="shipping-note">Shipping Note (Optional)</label>
                <textarea id='shipping-note' className='form-input textarea'></textarea>
            </div>

            <div className="form-actions">
                <button className='button button-outline'>Back to Cart</button>
                <button className='button button-primary'>Go to Payment</button>
            </div>
        </div>
    )
}