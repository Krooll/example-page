import { Carousel } from 'react-bootstrap';
import styles from './PromoSection.module.scss';

const PromoSection = (props) => {
    const images = props.images;

    return(
        <section className={styles.container}>
            <div className={styles.textSection}>
                <p className={styles.title}>Akcesoria PlayStation</p>
                <p>Stwórz idealną konfigurację do gry, z kontrolerami, zestawami słuchawkowymi i innymi akcesoriami dla Twojej konsoli PS5 lub PS4.</p>
            </div>
            <div className={styles.imgSection}>
                <Carousel>
                    {images.filter(item => item.category === 'accessories').map(item => 
                        <Carousel.Item key={item.id}>
                            <img className={styles.img} src={item.image} alt='screenshots'></img>
                        </Carousel.Item>
                    )}
                </Carousel>
            </div>
        </section>
    );
};

export default PromoSection;