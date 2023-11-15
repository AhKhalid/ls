import './Items.css'
import Item from './Item'

export default function Items(){
    return (
        <div className='items'>
            <div className='items-filters'>
                <button className='items-filter-button'>All</button>
                <button className='items-filter-button'>Body</button>
                <button className='items-filter-button'>Lenses</button>
                <button className='items-filter-button'>Gimbal</button>
            </div>
            <div className='items-filters'>
                <button className='items-filter-button-sm'>All</button>
                <button className='items-filter-button-sm'>Sony</button>
                <button className='items-filter-button-sm'>Canon</button>
                <button className='items-filter-button-sm'>Insta360</button>
            </div>
            <div className='items-list'>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )
}