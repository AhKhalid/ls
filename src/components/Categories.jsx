import CategoryItem from "./CategoryItem";
import bodyCategory from '../assets/body-category.png'
import lensesCategory from '../assets/lenses-category.png'
import lightsCategory from '../assets/lights-category.png'
import stabelizerCategory from '../assets/stabelizer-category.png'
import './Categories.css'

export default function Categories() {
    return (
        <div id="categories" className="categories">
            <div>
                <span className="categories-title">CATEGORIES</span>
            </div>
            <div className="categories-list">
                <CategoryItem img={bodyCategory} title="Body" alt="Camera body" />
                <CategoryItem img={lensesCategory} title="Lenses" alt="lenses" />
                <CategoryItem img={lightsCategory} title="Lights" alt="Camera lights" />
                <CategoryItem img={stabelizerCategory} title="Stabelizer" alt="Camera stabelizer" />
            </div>
        </div>
    )
}
