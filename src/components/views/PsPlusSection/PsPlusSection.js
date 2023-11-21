import Card from '../../common/Card/Card';
import styles from './PsPlusSection.module.scss';

const PsPlusSection = (props) => {
    const abonamentList = props.abonaments;

    return(
        <section className={styles.container}>
            <div className={styles.text}>
                <p className={styles.title}>PORÓWNAJ PLANY ABONAMENTOWE</p>
                <p>Odkryj swoją kolejną nową przygodę z zupełnie nowymi katalogami setek aktualnych i klasycznych gier, ograniczonych czasowo wersji próbnych, wieloosobową grą online, rabatami wyłącznie dla subskrybentów i nie tylko. Do dyspozycji masz trzy nowe opcje abonamentu.</p> 
            </div>
            <div className={styles.cards}>
                {abonamentList.map(item => <Card key={item.id} {...item} />)} 
            </div>
        </section>
    );
};

export default PsPlusSection;