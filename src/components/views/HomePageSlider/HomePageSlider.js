import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllImages,fetchImages } from '../../../redux/imageRedux';
import styles from './HomePageSlider.module.scss';

const HomePageSlider = () => {
    const imgList = useSelector(getAllImages);
    console.log('images', imgList);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchImages());
    }, [dispatch]);
 
    return (
        <div>
            1
        </div>
    );
};

export default HomePageSlider;