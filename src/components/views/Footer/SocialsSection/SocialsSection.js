import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './SocialsSection.module.scss';
import { Col } from 'react-bootstrap';

const SocialSection = () => {
    /*FontAwesome icons*/
    const facebook = <FontAwesomeIcon icon={faFacebook} />
    const youtube = <FontAwesomeIcon icon={faYoutube} />
    const instagram = <FontAwesomeIcon icon={faInstagram} />

    return(
        <div className={styles.container}>
            <Col xs={12} md={12} lg={12} className={styles.titleSection}><h2 className={styles.title}>Sprawdź Nasze social media!</h2></Col>
            <div className={styles.buttonSection}>
                <button className={styles.buttons}>{facebook}</button>
                <button className={styles.buttons}>{youtube}</button>
                <button className={styles.buttons}>{instagram}</button>
            </div>
        </div>
    );
};

export default SocialSection; 