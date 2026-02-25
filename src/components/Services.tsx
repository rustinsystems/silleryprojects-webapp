import styles from './Services.module.css';

const MOCK_SERVICES = [
    {
        title: "Construction Management",
        description: "Overseeing complex building projects from inception to completion, ensuring quality, safety, and adherence to timelines and budgets.",
        icon: "🏗️",
    },
    {
        title: "Project Planning & Strategy",
        description: "Comprehensive blueprint development, resource allocation, and risk mitigation strategies to lay the foundation for successful developments.",
        icon: "📋",
    },
    {
        title: "Site Infrastructure Solutions",
        description: "Designing and implementing robust physical infrastructure, including utilities, structural frameworks, and environmental controls.",
        icon: "👷",
    }
];

export default function Services() {
    return (
        <section id="services" className={`section ${styles.servicesSection}`}>
            <div className={`container ${styles.servicesContainer}`}>
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>What We Do</h2>
                    <p className={styles.sectionSubtitle}>
                        Our comprehensive capabilities cover the entire spectrum of physical development and construction management.
                    </p>
                </div>

                <div className={styles.grid}>
                    {MOCK_SERVICES.map((service, idx) => (
                        <div key={idx} className={`glass-panel ${styles.card}`}>
                            <div className={styles.iconWrapper}>{service.icon}</div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDesc}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
