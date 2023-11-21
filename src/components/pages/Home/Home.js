import NavBar from '../../features/NavBar/NavBar';
import SocialSection from '../../views/SocialsSection/SocialsSection';
import HomePageSlider from '../../views/HomePageSlider/HomePageSlider';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages, getAllImages } from '../../../redux/imageRedux';
import { useEffect } from 'react';
import PromoSection from '../../views/PromoSection/PromoSection';
import PsPlusSection from '../../views/PsPlusSection/PsPlusSection';
import { fetchAbonament, getAllAbonaments } from '../../../redux/abonamentRedux';

const Home = () => {
    const images = useSelector(getAllImages);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchImages());
    }, [dispatch]);

    const abonaments = useSelector(getAllAbonaments);
    const abonamentDispatch = useDispatch();
    useEffect(() => {
        abonamentDispatch(fetchAbonament());
    }, [abonamentDispatch]);

    return(
        <div>
            <NavBar />
            <HomePageSlider images={images} />
            <PsPlusSection abonaments={abonaments}/>
            <PromoSection images={images} />
            <SocialSection />
        </div>
    );
};

export default Home;