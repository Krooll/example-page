import NavBar from '../../features/NavBar/NavBar';
import SocialSection from '../../views/SocialsSection/SocialsSection';
import HomePageSlider from '../../views/HomePageSlider/HomePageSlider';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages, getAllImages } from '../../../redux/imageRedux';
import { useEffect } from 'react';
import PromoSection from '../../views/PromoSection/PromoSection';

const Home = () => {
    const images = useSelector(getAllImages);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchImages());
    }, [dispatch]);

    return(
        <div>
            <NavBar />
            <HomePageSlider images={images} />
            <PromoSection />
            <SocialSection />
        </div>
    );
};

export default Home;