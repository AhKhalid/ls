import img from '../assets/body-category.png'
import './CategoryItem.css'

export default function CategoryItem(props) {
    const {img, alt, title} = {...props}
    return (
        <div className="category-item">
            <img src={img} alt={alt} className="category-item-img" />
            <span className="category-item-title">{title}</span>
        </div>
    )
}