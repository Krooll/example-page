import styles from './ProductCard.module.scss';

const ProductCard = (props) => {
    return(
        <button className={styles.card}>
            <div className={styles.cardImage}>
                <img className={styles.image} src={props.image} />
            </div>
            <div className={styles.cardText}>
                <h5>{props.title}</h5>
                <p className={styles.description}>{props.description}</p>
            </div>
        </button>
    );
};

export default ProductCard;