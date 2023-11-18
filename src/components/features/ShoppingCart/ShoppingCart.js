import { getAllOrders, getTotalPriceSum } from '../../../redux/storeCartRedux';
import styles from './ShoppingCart.module.scss';
import { Col, Offcanvas,  } from 'react-bootstrap';
import OrderData from '../OrderData/OrderData';
import { useSelector } from 'react-redux';

const ShoppingCart = (props) => {
    const activeOrders = useSelector(getAllOrders);
    const totalSum = useSelector(getTotalPriceSum);
    console.log('activeOrder', activeOrders);

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
                  <div>
                    suma: {totalSum}
                  </div>
                </Col>
                </Offcanvas.Body>
        </Offcanvas>
    );
};

export default ShoppingCart;