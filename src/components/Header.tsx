import React from 'react';
import { NavLink } from "react-router-dom";
import styles from '../assets/Header.module.scss';
import { FaRegUser } from "react-icons/fa";

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.navContainer}>
                <div>
                    <img src='/logo.png' alt='logo' className={styles.logo} />
                </div>
                <div className={styles.navLinkList}>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
                        Home
                    </NavLink>
                    <NavLink to={'/4'} className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
                        Product
                    </NavLink>
                    <NavLink to={'/1'} className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
                        Pricing
                    </NavLink>
                    <NavLink to={'/2'} className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
                        About
                    </NavLink>
                    <NavLink to={'/3'} className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
                        Contact
                    </NavLink>
                </div>
                <div className={styles.subscribeContainer}>
                    <input type='text' placeholder='Your email' className={styles.subscribeInput} />
                    <button className={styles.subscribeButton}>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Header;

