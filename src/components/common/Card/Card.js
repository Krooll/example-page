import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Card.module.scss';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {
    /*FontAwesome icons*/
    const check = <FontAwesomeIcon icon={faCheck} />
    return(
        <div className={styles.card}>
            <div className={styles.titleSection}>
                <div className={styles.title}>
                    {props.title}
                </div>
                <div className={styles.description}>
                    {props.description}
                </div>
            </div>
            <div className={styles.list}>
                {props.list.map(item => 
                    <li className={styles.listItem} key={item.listId}>{item.title} {check}</li>
                )}
            </div>
        </div>
    );
};

export default Card;