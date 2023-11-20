import img from '../assets/body-category.png'
import { useNavigate } from 'react-router-dom'
import './CategoryItem.css'
import { useEffect } from 'react'

export default function CategoryItem(props) {
    const { img, alt, title } = { ...props }
    const navigate = useNavigate();
    const navigateTo = (title) => {
        navigate(`/items?category=${title}`)
    }


    return (
        <div className="category-item" onClick={()=> navigateTo(title)}>
            <img src={img} alt={alt} className="category-item-img" />
            <span className="category-item-title">{title}</span>
        </div>
    )
}