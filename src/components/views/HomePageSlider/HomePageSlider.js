import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchImages, getAllImages } from '../../../redux/imagesRedux';
import styles from './HomePageSlider.module.scss';

const HomePageSlider = () => {
    const imageList = useSelector(getAllImages);
    console.log('images', imageList);

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