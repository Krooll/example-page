import styles from './NavBar.module.scss';
import { Navbar, Nav, Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faPlaystation } from '@fortawesome/free-brands-svg-icons';
import OpenNav from '../../common/OpenNav/OpenNav';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOptions } from '../../../redux/optionRedux';
import { useEffect } from 'react';
import { fetchOptions } from '../../../redux/optionRedux';

const NavBar = () => {
    /*FontAwesomeIcons*/
    const psIcon = <FontAwesomeIcon className={styles.psIcon} icon={faPlaystation} />
    const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />

    const options = useSelector(getAllOptions);
    const [active, setActive] = useState(false);
    const [filter, setFilter] = useState(options);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchOptions());
    }, [dispatch]);

    const handleFilter = (selectCategory) => {
        setFilter(options.filter(item => item.category === selectCategory));
        setActive(true);
    }

    return(
        <Col xs={12} md={12} lg={12} >
        <Navbar collapseOnSelect expand="lg" className="bg-white fixed-top shadow p-3 mb-5">
            <Col xs={12} md={12} lg={12} className={styles.navBar}>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Col xs={7} sm={8} md={9} lg={7} className={styles.navSection}>
                    <div className={styles.iconSection}><button className={styles.psIcon} onClick={() => setActive(false)}>{psIcon}</button></div>
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => handleFilter('games')}>Gry</Nav.Link>
                            <Nav.Link onClick={() => handleFilter('accessories')}>Sprzęt</Nav.Link>
                            <Nav.Link onClick={() => handleFilter('shop')}>Sklep</Nav.Link>
                            <Nav.Link onClick={() => handleFilter('help')}>Pomoc</Nav.Link>
                        </Nav>
                        {active && <OpenNav filter={filter} />}
                    </Col> 
                </Navbar.Collapse>
                <Col xs={6} sm={6} md={6} lg={6} className={styles.lefNavButtons}>
                    <button className={styles.searchButton}>{searchIcon}</button>
                    <button className={styles.logButton}>Wpisz się</button>
                </Col>
            </Col>
        </Navbar>
        </Col>
    );
};

export default NavBar;