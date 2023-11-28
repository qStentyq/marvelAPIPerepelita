import './comicsList.scss';
import ErrorMessage from '../errorModal/errorModal';
import Spinner from '../spinner/spinner';
import useMarvelService from '../../services/MarvelService';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ComicsList = () => {

    const [comicsList, setComicsList] = useState([])
    const [offset, setOffset] = useState(200)
    const [newItemLoading, setNewItemLoading] = useState(false)

    const {loading, error, getNewComics} = useMarvelService()
    const [comicsEnded, setcomicsEnded] = useState(false)

    useEffect(() => {
        onLoadMore(offset, true)
        // eslint-disable-next-line
    },[])

    const OnLoadComics = (newComics) => {
        console.log(newComics)
        let ended = false;
        if (newComics.length < 7) {
            ended = true;
        }
        setComicsList(comicsList => [...comicsList, ...newComics])
        setNewItemLoading(false)
        setOffset(offset => offset + 8)
        console.log(offset)
        setcomicsEnded(ended)
    }
    const onLoadMore = (offset, initial) =>
    {
        initial ? setNewItemLoading(false) : setNewItemLoading(true)
       getNewComics(offset)
            .then(OnLoadComics)
       
    }
     function renderItems(arr) {
        const items = arr.map((item,i) => { return(
        <li tabIndex={0}
        key={i} 
        className="comics__item">
                    <Link to={`/comics/${item.id}`}>
                        <img src={item.thumbnail} alt={item.title} className="comics__item-img"/>
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.price}</div>
                    </Link>
        </li>)

    })
        return(
            <ul className="comics__grid">
                {items}
            </ul>
        )
}
    const items = renderItems(comicsList)
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;
    return (
        <div className="comics__list">
            {errorMessage}
            {spinner}
            {items}
            <button className="button button__main button__long"
             disabled = {newItemLoading}
             onClick = {() => onLoadMore(offset, false)}
             style={{'display': comicsEnded ? 'none' : 'block'}}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;