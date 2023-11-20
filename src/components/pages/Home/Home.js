import styles from './Home.module.scss';
import NavBar from '../../features/NavBar/NavBar';
import SocialSection from '../../views/Footer/SocialsSection/SocialsSection';
import MainPageCaroussel from '../../views/MainPageCaroussel/MainPageCaroussel';

const Home = () => {
    return(
        <div>
            <NavBar />
            <MainPageCaroussel />
            <SocialSection />
        </div>
    );
};

export default Home;