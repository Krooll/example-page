import 'react-slideshow-image/dist/styles.css';
import styles from './HomePageSlider.module.scss';
import { Carousel } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePageSlider = (props) => {
    const sliderImages = props.images;

    return (
        <Carousel>
            {sliderImages.filter(item => item.category === 'games').map(item => 
                <Carousel.Item key={item.id} className={styles.container}>
                    <img className={styles.img} src={item.image} alt='screenshots'></img>
                    <Carousel.Caption className={styles.carouselDescription}>
                        <Col xs={7} md={7} lg={7} className={styles.title}> 
                            <h2 className={styles.titleText}>{item.title}</h2>
                        </Col>
                        <Col xs={8} md={8} lg={8} className={styles.description}>
                            <p className={styles.text}>{item.description}</p>
                        </Col>
                        <Col xs={8} md={8} lg={8} className={styles.buttonSection}>
                            <Link to={'/shop'}><button className={styles.button}><p className={styles.buttonText}>Przejdź do PS store</p></button></Link>
                        </Col>
                    </Carousel.Caption>
                </Carousel.Item>
            )}
        </Carousel>
    );
};

export default HomePageSlider;