import React from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div>
                <img className={styles.img} src="/img_portfolio_icon.png" alt="" />
                <a className={styles.a}>Fabricio Capone</a>
            </div>
            <div className={styles.divul}>
                <ul className={styles.ul}>
                    <li><a className={styles.a} href="#about"><a>01.</a>About</a></li>
                    <li><a className={styles.a} href="#projects"><a>02.</a>Projects</a></li>
                    <li><a className={styles.a} href="/CV_CaponeFabricio.pdf" target='_blank' ><a>03.</a>Resume</a></li>
                    <li><a className={styles.a} style={{ marginRight: '0px' }} href="#contact"><a>04.</a>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;