import React from "react";
import './Header.css';
import { Link } from "react-router-dom";
export default function Header(props) {

    return (
        <header className="navbar">
            <Link to="/" className="navbar-logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 44" fill="none">
                    <path d="M32.089 17.922L26.268 12.022L31.928 6.28896L37.747 0.394957L37.911 0.230957H26.268L20.447 6.13096L14.547 11.952L20.447 17.924L26.268 23.824L20.447 29.601L14.626 35.501H26.268L32.103 29.601L38.003 23.78L32.089 17.922Z" fill="black" />
                    <path d="M6.48001 37.3122V19.2842L0.0180054 25.7122V43.7332V43.7692H18.041L24.467 37.3122H6.48001Z" fill="black" />
                </svg>
            </Link>
            <ul >
                <li>
                    <Link className="navbar-cart" onClick={props.onCartClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 30" fill="none">
                            <path d="M26.968 19.477C26.9639 18.5778 26.6905 17.7004 26.1831 16.958C25.6756 16.2156 24.9574 15.6423 24.121 15.312L26.921 4.824C26.9828 4.60488 26.9916 4.37421 26.9466 4.15103C26.9017 3.92784 26.8044 3.71853 26.6627 3.54037C26.5209 3.36221 26.3389 3.22029 26.1315 3.12634C25.9241 3.03239 25.6974 2.98908 25.47 3H4.944L4.45 1.109C4.36397 0.790383 4.17527 0.509029 3.91312 0.308533C3.65098 0.108037 3.33003 -0.000407292 3 1.14954e-06H0V3H1.843L5.558 16.87C5.64609 17.1971 5.84228 17.4847 6.11464 17.686C6.387 17.8874 6.71949 17.9907 7.058 17.979H22.474C22.8718 17.979 23.2534 18.137 23.5347 18.4183C23.816 18.6996 23.974 19.0812 23.974 19.479C23.974 19.8768 23.816 20.2584 23.5347 20.5397C23.2534 20.821 22.8718 20.979 22.474 20.979H3C2.60218 20.979 2.22064 21.137 1.93934 21.4183C1.65804 21.6996 1.5 22.0812 1.5 22.479C1.5 22.8768 1.65804 23.2584 1.93934 23.5397C2.22064 23.821 2.60218 23.979 3 23.979H4.764C4.51742 24.658 4.4381 25.3864 4.53277 26.1025C4.62743 26.8186 4.89329 27.5014 5.30782 28.0929C5.72235 28.6845 6.27335 29.1675 6.91414 29.5009C7.55493 29.8343 8.26665 30.0084 8.989 30.0084C9.71135 30.0084 10.4231 29.8343 11.0639 29.5009C11.7047 29.1675 12.2556 28.6845 12.6702 28.0929C13.0847 27.5014 13.3506 26.8186 13.4452 26.1025C13.5399 25.3864 13.4606 24.658 13.214 23.979H16.75C16.5256 24.5972 16.4395 25.2571 16.4979 25.9121C16.5563 26.5672 16.7577 27.2015 17.0879 27.7702C17.4182 28.339 17.8692 28.8283 18.4092 29.2037C18.9492 29.5791 19.565 29.8315 20.2131 29.943C20.8612 30.0545 21.526 30.0224 22.1603 29.849C22.7947 29.6756 23.3833 29.3651 23.8847 28.9394C24.386 28.5137 24.7877 27.9832 25.0617 27.3853C25.3356 26.7874 25.475 26.1366 25.47 25.479C25.4668 24.7057 25.2599 23.9469 24.87 23.279C25.5109 22.875 26.0393 22.3157 26.4064 21.653C26.7735 20.9902 26.9674 20.2456 26.97 19.488L26.968 19.477ZM21.11 14.982H8.24L5.753 5.993H23.522L21.11 14.982ZM8.989 26.968C8.69233 26.968 8.40232 26.88 8.15564 26.7152C7.90897 26.5504 7.71671 26.3161 7.60318 26.042C7.48965 25.7679 7.45994 25.4663 7.51782 25.1754C7.5757 24.8844 7.71856 24.6171 7.92834 24.4073C8.13812 24.1976 8.40539 24.0547 8.69636 23.9968C8.98734 23.9389 9.28894 23.9687 9.56303 24.0822C9.83711 24.1957 10.0714 24.388 10.2362 24.6346C10.401 24.8813 10.489 25.1713 10.489 25.468C10.489 25.8658 10.331 26.2474 10.0497 26.5287C9.76836 26.81 9.38682 26.968 8.989 26.968ZM20.975 26.968C20.6783 26.968 20.3883 26.88 20.1416 26.7152C19.895 26.5504 19.7027 26.3161 19.5892 26.042C19.4756 25.7679 19.4459 25.4663 19.5038 25.1754C19.5617 24.8844 19.7046 24.6171 19.9143 24.4073C20.1241 24.1976 20.3914 24.0547 20.6824 23.9968C20.9733 23.9389 21.2749 23.9687 21.549 24.0822C21.8231 24.1957 22.0574 24.388 22.2222 24.6346C22.387 24.8813 22.475 25.1713 22.475 25.468C22.475 25.8658 22.317 26.2474 22.0357 26.5287C21.7544 26.81 21.3728 26.968 20.975 26.968Z" fill="black" />
                        </svg>
                    </Link></li>
                <li> <Link to="/about" className="navbar-about">About</Link></li>
                <li> <Link to="/offers" className="navbar-offers">Offers</Link></li>
                <li> <Link to="/categories" className="navbar-categories">Categories</Link></li>
                <li>
                    <Link to="/rent" className="navbar-rent">
                        Rent
                    </Link>
                </li>
            </ul>
        </header>

    )

}