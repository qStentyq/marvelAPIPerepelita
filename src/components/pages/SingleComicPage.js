import './singleComicPage.scss';
<<<<<<< HEAD
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorModal/errorModal';

const SingleComicPage = () => {

    const {comicsId} = useParams()
    const [comic, setComic] = useState(null)

    const {loading, error, getNewComic, clearError} = useMarvelService();

    useEffect(() => {
   
        updateComic();
        console.log(comic)
        
     },[comicsId])

     const updateComic = () =>
     {
        clearError()
        getNewComic(comicsId)
        .then(onComicUpdate)
          
     }
     const onComicUpdate = (comic) => 
     {
        setComic(comic)
     }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !comic) ? <View comic = {comic}/> : null;

    return (
        <>
        {errorMessage}
        {spinner}
        {content}
        </>
    )
}

const View = ({comic}) => {
    const {title, description, pageCount,thumbnail,language,price} = comic
    return(
        <div className="single-comic">
            <img src={thumbnail} alt={title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount}</p>
                <p className="single-comic__descr">Language: {language}</p>
                <div className="single-comic__price">Price: {price}</div>
            </div>
            <Link to="/comics" className="single-comic__back">Back to all</Link>
        </div>
    )
}
=======
import xMen from '../../resources/img/x-men.png';

const SingleComicPage = () => {
    return (
        <div className="single-comic">
            <img src={xMen} alt="x-men" className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">X-Men: Days of Future Past</h2>
                <p className="single-comic__descr">Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</p>
                <p className="single-comic__descr">144 pages</p>
                <p className="single-comic__descr">Language: en-us</p>
                <div className="single-comic__price">9.99$</div>
            </div>
            <a href="#" className="single-comic__back">Back to all</a>
        </div>
    )
}

>>>>>>> 627c47890f11b206f68879c62042bb51c778ba25
export default SingleComicPage;