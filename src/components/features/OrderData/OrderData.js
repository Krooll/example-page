import styles from './OrderData.module.scss';
import { useDispatch } from 'react-redux';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addQuantity, deleteActiveOrder, removeQuantity, updatePlusPrice } from '../../../redux/storeCartRedux';

const OrderData = (props) => {
    /*Fontawesome icons*/
    const trash = <FontAwesomeIcon icon={faTrashCan} />
    const deleteDispatch = useDispatch();
    const handleDeleteOrder = (orderId) => {
        deleteDispatch(deleteActiveOrder(orderId));
    };

    const quantityDispatch = useDispatch();
    const handleAddQuantity = () => {
        if(props.pieces < 25){
            quantityDispatch(addQuantity({ id: props.id }));
            quantityDispatch(updatePlusPrice({ id: props.id }));
        }else {
            return ;
        }
    }

    const handleRemoveQuantity = () => {
        if(props.pieces > 1){
            quantityDispatch(removeQuantity({ id: props.id }));
            quantityDispatch(updatePlusPrice({ id: props.id }));
        }else {
            return ;
        }
    }

    return (
        <div className={styles.cartItem} key={props.id}>
            <img className={styles.itemImg} src={props.icon}></img>
            <span className={styles.itemTitle}>{props.title}</span>
            <div className={styles.counter}>
                <button onClick={handleAddQuantity} className={styles.counterButtons}>+</button>
                <span className={styles.itemPieces}>{props.pieces}</span>
                <button onClick={handleRemoveQuantity} className={styles.counterButtons}>-</button>
                </div>
            <div className={styles.itemPrice}>
                {props.totalPrice} $
            </div>
            <div className={styles.deleteButton}>
                <button onClick={() => handleDeleteOrder(props.id)} className={styles.itemDelete}>{trash}</button>
            </div>
        </div>
    );
};

export default OrderData;