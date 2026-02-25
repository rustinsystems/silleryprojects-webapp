import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.brand}>
                    <img src="/favicon.webp" alt="Sillery Projects" className={styles.logo} />
                    <span className={styles.name}>Sillery Projects</span>
                    <p className={styles.description}>
                        Architecting the future through innovative project management and premier construction strategy.
                    </p>
                </div>

                <div className={styles.navLinks}>
                    <h4 className={styles.navTitle}>Quick Links</h4>
                    <a href="#services">Capabilities</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className={styles.contact}>
                    <h4 className={styles.navTitle}>Contact</h4>
                    <span>office@silleryprojects.co.za</span>
                    <span>www.silleryprojects.co.za</span>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <div className={`container ${styles.bottomContainer}`}>
                    <span>&copy; {currentYear} Sillery Projects. All rights reserved.</span>
                    <span>Directors: MR Solomon, N Solomon, Dr. RM Allie, Z Baker</span>
                </div>
            </div>
        </footer>
    );
}
