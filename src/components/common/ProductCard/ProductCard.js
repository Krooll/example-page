import { Nav } from 'react-bootstrap';
import styles from './ProductCard.module.scss';
import { NavLink } from 'react-router-dom';

const ProductCard = (props) => {
    return(
        <Nav.Link as={NavLink} to={'/' + props.id} >
            <button className={styles.card}>
            <div className={styles.cardImage}>
                <img className={styles.image} src={props.image} alt='product'/>
            </div>
            <div className={styles.cardText}>
                <h5>{props.title}</h5>
                <p className={styles.description}>{props.description}</p>
            </div>
            </button>
        </Nav.Link>
    );
};

export default ProductCard;