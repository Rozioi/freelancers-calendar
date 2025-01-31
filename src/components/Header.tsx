import React from 'react';
import { NavLink } from "react-router-dom";
import styles from '../assets/Header.module.scss';

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
                <div className={styles.navLinkList}>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
                        Marketplace
                    </NavLink>
                    <NavLink to={'/1'} className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
                        Artists
                    </NavLink>
                    <NavLink to={'/2'} className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
                        Community
                    </NavLink>
                    <NavLink to={'/3'} className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
                        Collections
                    </NavLink>

                </div>
            <div>
                <button className={styles['btn-contact']}>
                    Contact
                </button>
            </div>
        </div>
    );
};

export default Header;

