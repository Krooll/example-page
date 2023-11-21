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

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    useEffect(() => {
        setProducts(allProducts);
    }, [allProducts]);

    const handleFilterCategory = (selectCategory) => {
        
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
                <button className={styles.categoryButton}><p className={styles.buttonText}>Gry</p></button>
                <button className={styles.categoryButton}><p className={styles.buttonText}>Sprzęt</p></button>
                <button className={styles.categoryButton}><p className={styles.buttonText}>Wszystko</p></button>
            </div>
                <div className={styles.loading}>Wczytywanie...</div>
            </Container>
        );
    }

    return (
        <Container>
            <NavBar />
            <div className={styles.title}>
                <h1>Sklep</h1>
            </div>
            <div className={styles.shopButtons}>
                <button className={styles.categoryButton} onClick={() => handleFilterCategory('games')}>
                    <p className={styles.buttonText}>Gry</p>
                </button>
                <button className={styles.categoryButton} onClick={() => handleFilterCategory('accessories')}>
                    <p className={styles.buttonText}>Sprzęt</p>
                </button>
                <button className={styles.categoryButton} onClick={() => handleFilterCategory('all')}>
                    <p className={styles.buttonText}>Wszystko</p>
                </button>
            </div>
            <div className={styles.shopList}>
                {products.map(item => <ShopCard allProducts={allProducts} key={item.id} {...item} />)}
            </div>
        </Container>
    );
};

export default Shop;