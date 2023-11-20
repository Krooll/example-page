import styles from './Home.module.scss';
import NavBar from '../../features/NavBar/NavBar';
import SocialSection from '../../views/SocialsSection/SocialsSection';
import HomePageSlider from '../../views/HomePageSlider/HomePageSlider';

const Home = () => {
   
    return(
        <div>
            <NavBar />
            <HomePageSlider />
            <SocialSection />
        </div>
    );
};

export default Home;