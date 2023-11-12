import styles from './Footer.module.scss';

const Footer = () => {
    return(
        <div className={styles.footer}>
            <p className={styles.footerText}>Copyright © Page by WizardsDev 2023</p>
        </div>
    );
};

export default Footer;