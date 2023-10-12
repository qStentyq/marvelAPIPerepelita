import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import decoration from '../../resources/img/vision.png';
import { useState } from "react";

<<<<<<< HEAD
const MainPage = () => {
=======
const Mainpage = () => {
>>>>>>> 627c47890f11b206f68879c62042bb51c778ba25

    const [selectedChar, setSelectedChar] = useState(null)

   const onCharSelected = (id) =>
    {
        setSelectedChar(id)
    }

    return (
        <>
            <ErrorBoundary>
                <RandomChar/>
            </ErrorBoundary>
            <div className="char__content">
                <CharList onCharSelected = {onCharSelected}/>
                <ErrorBoundary>
                    <CharInfo charId = {selectedChar}/>
                </ErrorBoundary>     
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

<<<<<<< HEAD
export default MainPage
=======
export default Mainpage
>>>>>>> 627c47890f11b206f68879c62042bb51c778ba25
