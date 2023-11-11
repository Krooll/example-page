import styles from './OpenNav.module.scss';
import { useEffect } from 'react';

const OpenNav = (props) => {
    const filterOptions = props.filter;
    console.log('filterOptions', filterOptions);

    useEffect(() => {
    }, [filterOptions]);

    if (!filterOptions.length) {
        return <div className={styles.loading}>Loading...</div>;
    }

    return(
        <div className={styles.container}>
           {filterOptions.map(item => 
           <button key={item.id}>{item.text} {item.icon}</button>)}
        </div>
    );
};

export default OpenNav;