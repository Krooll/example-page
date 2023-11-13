import styles from './NavBar.module.scss';
import { Navbar, Nav, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faPlaystation } from '@fortawesome/free-brands-svg-icons';
import OpenNav from '../../common/OpenNav/OpenNav';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOptions } from '../../../redux/optionRedux';
import { useEffect } from 'react';
import { fetchOptions } from '../../../redux/optionRedux';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const psIcon = <FontAwesomeIcon className={styles.psIcon} icon={faPlaystation} />
    const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />

    const options = useSelector(getAllOptions);
    const [active, setActive] = useState(false);
    const [filter, setFilter] = useState(options);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchOptions());
    }, [dispatch]);

    useEffect(() => {
        setFilter(options);
    }, [options]);

    const handleFilter = (selectCategory) => {
        setFilter(options.filter(item => item.category === selectCategory));
        setActive(true);
    }

    return(
        <Col xs={12} md={12} lg={12}>
            <Navbar collapseOnSelect expand="lg" className="bg-white fixed-top shadow p-3 mb-5">
                <Col xs={12} md={12} lg={12} className={styles.navBar}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Col xs={7} sm={8} md={9} lg={7} className={styles.navSection}>
                            <div className={styles.iconSection}><Nav.Link as={NavLink} to="/"><button className={styles.psIcon} onClick={() => setActive(false)}>{psIcon}</button></Nav.Link></div>
                            <Nav className="me-auto">
                                <Nav.Link onClick={() => handleFilter('games')}><p className={styles.navLinks}>Gry</p></Nav.Link>
                                <Nav.Link onClick={() => handleFilter('accessories')}><p className={styles.navLinks}>Sprzęt</p></Nav.Link>
                                <Nav.Link onClick={() => handleFilter('shop')}><p className={styles.navLinks}>Sklep</p></Nav.Link>
                                <Nav.Link onClick={() => handleFilter('help')}><p className={styles.navLinks}>Pomoc</p></Nav.Link>
                            </Nav>
                            {active && <OpenNav filter={filter} />}
                        </Col> 
                    </Navbar.Collapse>
                    <Col xs={6} sm={6} md={6} lg={6} className={styles.rightNavButtons}>
                        <button className={styles.searchButton}>{searchIcon}</button>
                        <button className={styles.logButton}>Wpisz się</button>
                    </Col>
                </Col>
            </Navbar>
        </Col>
    );
};

export default NavBar;