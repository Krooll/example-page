import styles from './ShopCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addOrderRequest } from '../../../redux/storeCardRedux';

const ShopCard = (props) => {
    const dispatch = useDispatch();
    const handleAddCart = (e) => {
        e.preventDefault();
        dispatch(addOrderRequest({id: props.id, title: props.title, category: props.category, price: props.price}));
    };
    /*Fontawesome Icons*/
    const addOrder = <FontAwesomeIcon icon={faCartPlus}/>
    return(
        <div className={styles.card}>
            <img className={styles.cardImg} src={props.icon}/>
            <div className={styles.cardTitle}>
                {props.title}
            </div >
            <button onClick={handleAddCart} className={styles.cardButton}><p className={styles.buttonText}>{addOrder}</p></button>
        </div>
    );
};

export default ShopCard;