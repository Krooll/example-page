import styles from './OpenNav.module.scss';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const OpenNav = (props) => {
    const filterOptions = props.filter;

    useEffect(() => {
    }, [filterOptions]);

    if (!filterOptions.length) {
        return <div className={styles.loading}>Wczytywanie...</div>;
    }

    return(
        <div className={styles.container}>
           {filterOptions.map(item => 
                <Nav.Link className={styles.link} key={item.id} as={NavLink} to={"/" + item.path}>
                    <button className={styles.button}><img className={styles.icon} src={item.icon} alt='Navbar-links'/> 
                        <p className={styles.text}>{item.text}</p>
                    </button>
                </Nav.Link>
            )}
        </div>
    );
};

export default OpenNav;