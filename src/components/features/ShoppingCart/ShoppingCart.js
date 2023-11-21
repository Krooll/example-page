import { getAllOrders, getTotalPriceSum } from '../../../redux/storeCartRedux';
import styles from './ShoppingCart.module.scss';
import { Col, Offcanvas } from 'react-bootstrap';
import OrderData from '../OrderData/OrderData';
import { useDispatch, useSelector } from 'react-redux';
import { sendOrderRequest } from '../../../redux/orderRedux';
import shortid from 'shortid';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = (props) => {
    const activeOrders = useSelector(getAllOrders);
    const totalSum = useSelector(getTotalPriceSum);
    const navigate = useNavigate();
    const [info, setShowInfo] = useState(false);

    const handleShowInfo = () => {
        setShowInfo(true);
    };

    const dispatch = useDispatch();
    const handleSendOrder = () => {
        dispatch(sendOrderRequest({id: shortid(), orderData: activeOrders }));
        navigate('/');
    }

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
                    {activeOrders.map(order => <OrderData key={order.id} {...order} />)}
                  <div className={styles.sumData}>
                    <Col xs={6} md={6} lg={6}>
                        Do zapłaty: {totalSum} $
                    </Col>
                    <Col xs={6} md={6} lg={6} className={styles.buttonSection}>
                        <button onClick={() => {handleShowInfo(); handleSendOrder();}} className={styles.button}>Zamów</button>
                    </Col>
                  </div>
                </Col>
                </Offcanvas.Body>
                <Modal show={info}>
                    <div className={styles.info}>
                        Zamówienie zostało wysłane!
                    </div>
                </Modal>
        </Offcanvas>
    );
};

export default ShoppingCart;