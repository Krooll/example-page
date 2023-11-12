import styles from './List.module.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../../../redux/productsRedux';
import { Container, Col } from 'react-bootstrap';
import { getAllProducts } from '../../../redux/productsRedux';
import NavBar from '../../features/NavBar/NavBar';
import ProductCard from '../../common/ProductCard/ProductCard';

const List = () => {
    const productList = useSelector(getAllProducts);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (!productList.length) {
        return  (
            <Container>
                <NavBar />
                <Col className={styles.title}>
                    <h2>Sprzęt</h2>
                </Col>
                <div className={styles.loading}>Loading...</div>
            </Container>
        )
    };

    return(
        <Container>
            <NavBar />
            <Col className={styles.title}>
            <h2>Sprzęt</h2>
            </Col>
            <Col className={styles.list}>
                {productList.filter(item => item.category === 'accessories' || 'games' || 'true' ).map(item => <ProductCard key={item.id} {...item} />)}
            </Col>
        </Container>
    );
};

export default List;