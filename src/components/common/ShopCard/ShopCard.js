import styles from './ShopCard.module.scss';

const ShopCard = (props) => {
    return(
        <div className={styles.card}>
            <img className={styles.cardImg} src={props.icon}/>
            <div className={styles.cardTitle}>
                {props.title}
            </div >
            <button className={styles.cardButton}><p className={styles.buttonText}>Dodaj do koszyka</p></button>
        </div>
    );
};

export default ShopCard;