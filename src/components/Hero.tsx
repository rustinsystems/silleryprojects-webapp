import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Building Excellence,<br />
                        <span className="gradient-text">Managing the Future.</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Sillery Projects delivers premier project management, strategic construction consulting, and robust physical infrastructure solutions for modern developments.
                    </p>
                    <div className={styles.ctaGroup}>
                        <a href="#contact" className={styles.primaryBtn}>Partner with Us</a>
                        <a href="#services" className={styles.secondaryBtn}>Explore Services</a>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    <img src="/SPM LOGO.webp" alt="Sillery Projects Logo" className={styles.heroLogo} />
                    <div className={styles.glowEffect}></div>
                </div>
            </div>
        </section>
    );
}
