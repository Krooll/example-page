import styles from './GameList.module.scss';
import { Container, Col } from 'react-bootstrap';
import NavBar from '../../features/NavBar/NavBar';
import { useSelector } from 'react-redux';
import { fetchProducts, getAllProducts } from '../../../redux/productsRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ProductCard from '../../common/ProductCard/ProductCard';

const GameList = () => {
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
                    <h2>Gry</h2>
                </Col>
                <div className={styles.loading}>Wczytywanie...</div>
            </Container>
        )
    };

    return(
        <Container>
            <NavBar />
            <Col className={styles.title}>
            <h1>Gry</h1>
            </Col>
            <Col className={styles.list}>
                {productList.filter(item => item.category === 'games').map(item => <ProductCard key={item.id} {...item} /> )}
            </Col>
        </Container>
    )
};

export default GameList;