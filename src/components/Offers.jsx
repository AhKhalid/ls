import { Carousel } from 'react-bootstrap'
import Offer from './Offer'
import './Offers.css'


export default function Offers() {
    return (
        <div id='offers' className='offers'>
            <Carousel controls={true} indicators={true} variant={'dark'}>
                <Carousel.Item>
                    <Offer image="" title="APPETURE 1200D PRO" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor "
                        was="600" now="500" />
                </Carousel.Item>
                <Carousel.Item>
                    <Offer image="" title="APPETURE 1200D PRO" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor "
                        was="600" now="500" />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}