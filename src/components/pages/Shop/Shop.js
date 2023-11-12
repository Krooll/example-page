import styles from './Shop.module.scss';
import NavBar from '../../features/NavBar/NavBar';
import { Container, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/productsRedux';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../../redux/productsRedux';
import { useEffect, useState } from 'react';
import ShopCard from '../../common/ShopCard/ShopCard';

const Shop = () => {
    const allProducts = useSelector(getAllProducts);
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState('all');

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    useEffect(() => {
        setProducts(allProducts);
    }, [allProducts]);

    const handleFilterCategory = (selectCategory) => {
        setFilter(selectCategory);
        if (selectCategory === 'all') {
            setProducts(allProducts);
        } else {
            setProducts(allProducts.filter(product => product.category === selectCategory));
        }
    };

    if (!products.length) {
        return (
            <Container>
                <NavBar />
                <Col className={styles.title}>
                    <h2>Sklep</h2>
                </Col>
                <div className={styles.shopButtons}>
                <button>Gry</button>
                <button>Sprzęt</button>
                <button>Wszystko</button>
            </div>
                <div className={styles.loading}>Wczytywanie...</div>
            </Container>
        );
    }

    return (
        <Container>
            <NavBar />
            <div className={styles.title}>
                <h2>Sklep</h2>
            </div>
            <div className={styles.shopButtons}>
                <button onClick={() => handleFilterCategory('games')}>Gry</button>
                <button onClick={() => handleFilterCategory('accessories')}>Sprzęt</button>
                <button onClick={() => handleFilterCategory('all')}>Wszystko</button>
            </div>
            <div className={styles.shopList}>
                {products.map(item => <ShopCard key={item.id} {...item} />)}
            </div>
        </Container>
    );
};

export default Shop;