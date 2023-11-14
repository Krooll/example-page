import { deleteActiveOrder, getAllOrders } from '../../../redux/storeCartRedux';
import styles from './ShoppingCart.module.scss';
import { Col, Offcanvas,  } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ShoppingCart = (props) => {
    /*Fontawesome icons*/
    const trash = <FontAwesomeIcon icon={faTrashCan} />
    const activeOrders = useSelector(getAllOrders);

    const deleteDispatch = useDispatch();
    const handleDeleteOrder = (orderId) => {
        deleteDispatch(deleteActiveOrder(orderId));
    };

    if(!activeOrders.length){
        return(
            <Offcanvas show={props.show} onHide={props.handleHideCart} placement="end" scroll={true}> 
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Koszyk</Offcanvas.Title>
            </Offcanvas.Header>
                <Offcanvas.Body>
                <Col xs={12} md={12} lg={12} className={styles.cartWindow}>
                   Koszyk jest pusty...
                </Col>
                </Offcanvas.Body>
        </Offcanvas>
        );
    }

    return(
        <Offcanvas show={props.show} onHide={props.handleHideCart} placement="end" scroll={true}> 
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Koszyk</Offcanvas.Title>
            </Offcanvas.Header>
                <Offcanvas.Body>
                <Col xs={12} md={12} lg={12} className={styles.cartWindow}>
                    {activeOrders.map(order => 
                        <div className={styles.cartItem} key={order.id}>
                            <img className={styles.itemImg} src={order.icon}></img>
                            <span className={styles.itemTitle}>{order.title}</span>
                            <div className={styles.counter}>
                                <button className={styles.counterButtons}>+</button>
                                <span>{order.pieces}</span>
                                <button className={styles.counterButtons}>-</button>
                            </div>
                            <div className={styles.itemPrice}>
                                {order.price}
                            </div>
                            <div className={styles.deleteButton}>
                                <button onClick={() => handleDeleteOrder(order.id)} className={styles.itemDelete}>{trash}</button>
                            </div>
                        </div>
                    )}
                  <div>
                    suma: 
                  </div>
                </Col>
                </Offcanvas.Body>
        </Offcanvas>
    );
};

export default ShoppingCart;