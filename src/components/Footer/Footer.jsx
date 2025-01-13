import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer>
            <hr className={styles.hr} />
            <div className={styles.footer}>
                <div className={styles.icons}>
                    <p className={styles.p}>Social</p>
                    <a href="https://www.linkedin.com/in/fabriciocapone/" target='_blank'><img src="/linkedin.png" className={styles.icon} alt="" /></a>
                    <a href="https://github.com/FabricioCCapone" target='_blank'><img src="/github.svg" className={styles.icon} alt="" /></a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;