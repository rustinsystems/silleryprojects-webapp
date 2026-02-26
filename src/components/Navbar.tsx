import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <div className={styles.logoWrapper}>
                    <img src="/favicon.webp" alt="Sillery Management Projects Icon" className={styles.icon} />
                    <span className={styles.brandName}>Sillery Management Projects</span>
                </div>
                <div className={styles.navLinks}>
                    <a href="#services" className={styles.navLink}>What We Do</a>
                    <a href="#contact" className={styles.navLink}>Contact Us</a>
                </div>
            </div>
        </nav>
    );
}
