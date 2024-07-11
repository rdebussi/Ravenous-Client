import React, { useRef } from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';

const Header = ({ onCartClick }) => {

    const inputRef = useRef();
    const focusInput = () => {
        inputRef.current.focus();
    }

    return (
        <header className={styles.header}>
            <div className={styles.first}>
                <Link to="/">
                    <h1 className={styles.title}>Ravenous</h1>
                </Link>
                <ul className={styles.nav}>
                    <li className={styles.navItem}>Início</li>
                    <Link to='/restaurants'>
                        <li className={styles.navItem}>Restaurantes</li>
                    </Link>
                    <li className={styles.navItem}>Vegetariano</li>
                </ul>
            </div>

            <div className={styles.searchContainer}>
                <button className={styles.searchButton} onClick={focusInput}><FaSearch className={styles.searchIcon} /></button>
                <input type="text" placeholder="Buscar" className={styles.searchInput} ref={inputRef}/>
            </div>

            <div className={styles.rightSection}>
                <h3 className={styles.address}>R. Dolores Dutra de Moraes, 39</h3>
                <button className={styles.loginButton}>Login</button>
                <FaShoppingCart onClick={onCartClick} className={styles.cartIcon} />
            </div>
        </header>
    );
};

export default Header;