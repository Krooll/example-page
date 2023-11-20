import { NavLink, useParams } from 'react-router-dom';
import styles from './SingleProduct.module.scss';
import { useSelector } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../../redux/productsRedux';
import { Container, Col } from 'react-bootstrap';
import NavBar from '../../features/NavBar/NavBar';
import { useEffect } from 'react';
import { Nav } from 'react-bootstrap';

const SingleProduct = () => {
    const {id} = useParams();
    const productById = useSelector(state => getProductById(state, id));

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch, productById]);

    if(!productById){
        return  (
            <Container>
                <NavBar />
                <div className={styles.loading}>Loading...</div>
            </Container>
        )
    }

    return(
        <div>
            <NavBar />
            <div className={styles.singleCard}>
                <img className={styles.singleBackGround } src={productById.fullImage} alt='product'/>
                <Col xs={6} md={6} lg={6} className={styles.cardTitle}>
                    <h3 className={styles.title}>{productById.title}</h3>   
                </Col>
                <Col xs={7} md={7} lg={7} className={styles.cardDescription}>
                    <p>{productById.fullDescription}</p>
                    <Nav.Link as={NavLink} to='/shop'>
                        <button className={styles.button}><p className={styles.buttonText}>Przejdz do PS Store</p></button>
                    </Nav.Link>
                </Col>
            </div> 
        </div>
    );
};

export default SingleProduct;