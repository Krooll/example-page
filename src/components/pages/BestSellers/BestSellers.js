import styles from './BestSellers.module.scss';
import { useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/productsRedux';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../../redux/productsRedux';
import { Container, Col } from 'react-bootstrap';
import NavBar from '../../features/NavBar/NavBar';
import ProductCard from '../../common/ProductCard/ProductCard';
import { useEffect } from 'react';

const BestSellers = () => {
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
                    <h2>Hity Plastation</h2>
                </Col>
                <div className={styles.loading}>Wczytywanie...</div>
            </Container>
            )
        };
    
    return(
        <Container>
            <NavBar />
            <Col className={styles.title}>
                <h2>Hity Plastation</h2>
            </Col>
            <Col className={styles.list}>
                    {productList.filter(item => item.bestSeller === 'true').map(item => <ProductCard key={item.id} {...item} />)}
            </Col>
        </Container>
    );
};

export default BestSellers;