import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './HomePageSlider.module.scss';

const HomePageSlider = () => {
    const dispatch = useDispatch();
    const images = useSelector();
    console.log('images', images)

    useEffect(() => {
        dispatch(fetchPosts());
        setLoading(false);
    }, [dispatch]);
 
    return (
        <div>
            1
        </div>
    );
};

export default HomePageSlider;