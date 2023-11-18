import styles from './ShopCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addActiveOrder, getOrderById } from '../../../redux/storeCartRedux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ShopCard = (props) => {
    const dispatch = useDispatch();
    const productExist = useSelector(state => getOrderById(state, props.id));
    const [alert, setAlert] = useState(false);
    const handleCloseAlert = () => setAlert(false);
    const handleAddCart = (e) => {
        if(productExist){
            setAlert(true);
        }else {
            e.preventDefault();
            dispatch(addActiveOrder({
                id: props.id, title: props.title, icon: props.icon, category: props.category, 
                price: props.price, totalPrice: props.totalPrice, pieces: props.pieces
            }));
        }
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
            <Modal show={alert}>
                <Modal.Title className={styles.modalTitle}>Produkt znajduje się w koszyku!</Modal.Title>
                <Modal.Footer className={styles}><Button onClick={handleCloseAlert} variant='danger'>Zamknij</Button></Modal.Footer>
            </Modal>
        </div>
    );
};

export default ShopCard;