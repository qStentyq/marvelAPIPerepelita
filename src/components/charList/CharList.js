import './charList.scss';
import ErrorMessage from '../errorModal/errorModal';
import Spinner from '../spinner/spinner';
import React, { useState, useEffect, useRef } from 'react';
import useMarvelService from '../../services/MarvelService';
import PropTypes from 'prop-types';



const CharList = (props) =>  {
    
    const[chars, setChars] = useState([])
    const[offset, setOffset] = useState(0)
    const[newItemLoading, setNewItemLoading] = useState(false)
    const [charEnded, setCharEnded] = useState(false)

    const {loading, error, getAllCharacters} = useMarvelService();


    useEffect(() => {
        getAllCharacters(offset)
        .then(onRandomHeroList)
       
    },[])



 
    const onRandomHeroList = (newChar) =>
    {
        let ended = false;
        if (newChar.length < 8) {
            ended = true;
        }
        setChars(chars => [...chars, ...newChar])
        setNewItemLoading(false)
        setCharEnded(ended)
    }
    const onLoadMore = (offset, initial) =>
    {
        initial ? setNewItemLoading(false) : setNewItemLoading(true)
       getAllCharacters(offset+9)
            .then(onRandomHeroList)
        setOffset(offset => offset + 9)
        console.log(offset)
    }

    const itemRefs = useRef([]);
    const onFocusHero = (id) => {

        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected')
        itemRefs.current[id].focus()
    }
    function renderItems(arr) {
        const items =  arr.map((item, i) => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }
            
            return (
                <li 
                    className="char__item"
                    tabIndex={0}
                    ref={el => itemRefs.current[i] = el}
                    key={item.id}
                    onClick={() => {
                        props.onCharSelected(item.id);
                        onFocusHero(i);
                    }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            props.onCharSelected(item.id);
                            onFocusHero(i);
                        }
                    }}>
                        <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                        <div className="char__name">{item.name}</div>
                </li>
            )
        });
        return (
            <ul className="char__grid">
                {items}
            </ul>
        )
    }
    
        const items = renderItems(chars);

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading && !newItemLoading ? <Spinner/> : null;


        
        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {items}
             
                <button className="button button__main button__long"
                disabled = {newItemLoading}
                onClick = {() => onLoadMore(offset, true)}
                style={{'display': charEnded ? 'none' : 'block'}}>
                    <div className="inner">load more</div>
                </button>
            
            </div>
        )
    
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}
export default CharList;