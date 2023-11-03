import { Col, Container, Row } from "react-bootstrap";
import CategoryItem from "./CategoryItem";
import bodyCategory from '../assets/body-category.png'
import lensesCategory from '../assets/lenses-category.png'
import lightsCategory from '../assets/lights-category.png'
import stabelizerCategory from '../assets/stabelizer-category.png'


import './Categories.css'

export default function Categories() {
    return (
        <Container className="categories">
            <Row>
                <Col md={12}>
                    <span className="categories-title">CATEGORIES</span>
                </Col>
            </Row>
            <Row >
                <Col sm={12} md={6}>
                    <CategoryItem img={bodyCategory} title="Body" alt="Camera body" />
                </Col>
                <Col sm={12} md={6}>
                    <CategoryItem img={lensesCategory} title="Lenses" alt="lenses" />
                </Col>
            </Row>
            <Row sm={12} md={8} lg={10}>
                <Col sm={12} md={6}>
                    <CategoryItem img={lightsCategory} title="Lights" alt="Camera lights" />
                </Col>
                <Col sm={12} md={6}>
                    <CategoryItem img={stabelizerCategory} title="Stabelizer" alt="Camera stabelizer" />
                </Col>
            </Row>

        </Container>
    )
}
