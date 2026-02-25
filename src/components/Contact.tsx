import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={`section ${styles.contactSection}`}>
            <div className={`container ${styles.contactContainer}`}>
                <div className={styles.infoCol}>
                    <h2 className={styles.sectionTitle}>Get in Touch</h2>
                    <p className={styles.sectionSubtitle}>
                        Reach out to our executive board and infrastructure consultants for any inquiries.
                    </p>

                    <div className={styles.detailsGroup}>
                        <div className={styles.detailItem}>
                            <span className={styles.label}>Website</span>
                            <a href="https://www.silleryprojects.co.za" className={styles.value}>www.silleryprojects.co.za</a>
                        </div>

                        <div className={styles.detailItem}>
                            <span className={styles.label}>E-mail</span>
                            <a href="mailto:office@silleryprojects.co.za" className={styles.value}>office@silleryprojects.co.za</a>
                        </div>

                        <div className={styles.detailItem}>
                            <span className={styles.label}>Directors</span>
                            <div className={styles.value}>MR Solomon, N Solomon, Dr. RM Allie, Z Baker</div>
                        </div>
                    </div>
                </div>

                <div className={styles.formCol}>
                    <form className={`glass-panel ${styles.form}`}>
                        <h3 className={styles.formTitle}>Send a Message</h3>

                        <div className={styles.inputGroup}>
                            <label htmlFor="name" className={styles.inputLabel}>Full Name</label>
                            <input type="text" id="name" className={styles.inputField} placeholder="John Doe" required />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="email" className={styles.inputLabel}>Email Address</label>
                            <input type="email" id="email" className={styles.inputField} placeholder="john@example.com" required />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="message" className={styles.inputLabel}>Message</label>
                            <textarea id="message" className={styles.textareaField} placeholder="How can we help?" rows={4} required></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            Submit Inquiry
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
