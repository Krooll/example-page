import { Container, Form, Col, FormControl, Nav } from 'react-bootstrap';
import styles from './SearchForm.module.scss';
import NavBar from '../../features/NavBar/NavBar';
import { useSelector } from 'react-redux';
import { getAllProducts, fetchProducts } from '../../../redux/productsRedux';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductCard from '../../common/ProductCard/ProductCard';
import { NavLink } from 'react-router-dom';

const SearchForm = () => {
    /*FontAwesome*/
    const searchIcon = <FontAwesomeIcon className={styles.link}icon={faMagnifyingGlass} />
    const productList = useSelector(getAllProducts);
    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);
    const filter = productList.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));

    const filterProducts = (e) => {
        e.preventDefault();
        if(filter.length){
            setResult(filter);
            setSearch('');
        }else{
            setResult([]);
            setSearch('');
        }        
    };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if(!productList.length){
        return(
            <Container>
                <NavBar />
                <Col xs={12} md={12} lg={12} className={styles.titleSection}>
                    <p>Wczytywanie...</p>
                </Col>
            </Container>
        );
    }
    if(!filter.length){
        return(
            <Container>
                <NavBar />
                <Col xs={12} md={12} lg={12} className={styles.titleSection}>
                    <p>Brak wyników</p>
                    <Nav.Link as={NavLink} className={styles.link} to="/">
                        <button className={styles.backButton}>Wróć</button>
                    </Nav.Link>
                </Col>
            </Container>
        );
    };

    return(
        <Container>
            <NavBar />
            <Col xs={12} md={12} lg={12} className={styles.titleSection}>
                <div className={styles.title}>
                    <p>Szukaj produktów Playstation!</p>
                </div>
                <p>Wpisz nazwę gry lub akcesoriów, które Cię interesują!</p>
            </Col>
            <Form>
                <Col xs={12} md={12} lg={12} className={styles.formSection}>
                    <Col xs={6} md={5} lg={3} >
                        <FormControl onChange={e => setSearch(e.target.value)} value={search} placeholder="Szukaj..." />
                    </Col> 
                    <button onClick={filterProducts} className={styles.button}>{searchIcon}</button>
                </Col>
            </Form>
            <Col xs={12} md={12} lg={12} className={styles.result}>
                {result.map(item => <ProductCard key={item.id} {...item} />)}
            </Col>
        </Container>
    );
};

export default SearchForm;