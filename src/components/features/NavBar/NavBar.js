import styles from './NavBar.module.scss';
import { Navbar, Container, Nav, Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faPlaystation } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {
    /*FontAwesomeIcons*/
    const psIcon = <FontAwesomeIcon className={styles.psIcon} icon={faPlaystation} />
    const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />

    return(
        <Navbar collapseOnSelect expand="lg" className="shadow p-3 mb-5 bg-white rounded">
            <Container>
                <Col className={styles.container}>
                <div className={styles.leftSection}>
                    <Navbar.Brand>{psIcon}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className={styles.navList}>
                            <button className={styles.navButtons}>Gry</button>
                            <button className={styles.navButtons}>Sprzęt</button>
                            <button className={styles.navButtons}>Sklep</button>
                            <button className={styles.navButtons}>Pomoc</button>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <div className={styles.rightSection}>
                    <Nav.Link><button className={styles.navButtons}>{searchIcon}</button></Nav.Link>
                    <Nav.Link><button className={styles.logButton}>Wpisz się</button></Nav.Link>
                </div>
                </Col>
            </Container>
        </Navbar>
    );
};

export default NavBar;