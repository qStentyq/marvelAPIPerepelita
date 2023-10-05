import './charInfo.scss';
import { useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorModal/errorModal';
import Skeleton from '../skeleton/Skeleton'


const CharInfo = ({charId}) => {

  
    const [char, setChar] = useState(null)
 
     const {loading, error, getCharacter, clearError} = useMarvelService();

     useEffect(() => {
   
        updateChar();
        
     },[charId])

     const updateChar = () =>
     {
        if (!charId)
        {
            return;
        }
        clearError()
        getCharacter(charId)
        .then(setChar)
          
     }
     

        const skeleton = char || loading || error ? null : <Skeleton/>
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error || !char) ? <View char = {char}/> : null;

        return (
            <div className="char__info">
                {skeleton}
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage,wiki, comics} = char;
    const notAvaible = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
    let imgStyle = {'object-fit': 'cover'}
    if(notAvaible === thumbnail) {
        imgStyle = {'object-fit': 'contain'}
    }
    let additional = comics.length === 0 ? 'По этому персонажу в данный момент нет доступных комиксов' : null;
    return (
        <>
        <div className="char__basics">
                    <img src={thumbnail} alt={name} style ={imgStyle}/>
                    <div>
                        <div className="char__info-name">{name}</div>
                        <div className="char__btns">
                            <a href={homepage} className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                            <a href={wiki} className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="char__descr">
                    {description}
                </div>
                <div className="char__comics">Comics:</div>
                <ul className="char__comics-list">
                    {additional}
                    {
                        comics.map((item, i) => {
                            if(i > 9)
                            {
                                return null;
                            }
                            return(
                                <li key = {i} className="char__comics-item">
                                {item.name}
                                </li>
                            )
                        })
                    }
              
                   
                </ul>
        </>
    )
}
export default CharInfo;