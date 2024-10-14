import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/replacement.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib, faHome, faFilm, faTv } from '@fortawesome/free-solid-svg-icons'; // Import additional icons

const headerNav = [
    {
        display: 'Home',
        path: '/',
        icon: faHome
    },
    {
        display: 'Movies',
        path: '/movie',
        icon: faFilm // Use appropriate icon for Movies
    },
    {
        display: 'TV Series',
        path: '/tv',
        icon: faTv // Use appropriate icon for TV Series
    }
];

const Header = () => {
    const { pathname } = useLocation();
    const headerRef = useRef(null);
    const active = headerNav.findIndex(e => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        };
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to="/">DELordMovies2</Link>
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <FontAwesomeIcon icon={e.icon} className="fa-icon" /> {/* Add fa-icon class */}
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Header;
