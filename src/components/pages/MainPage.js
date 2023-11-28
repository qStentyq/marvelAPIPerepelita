import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import CharSearchForm from "../charSearchForm/charSearchForm";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import decoration from '../../resources/img/vision.png';
import { useState } from "react";

import { Helmet } from "react-helmet";

const Mainpage = () => {

    const [selectedChar, setSelectedChar] = useState(null)

   const onCharSelected = (id) =>
    {
        setSelectedChar(id)
    }

    return (
        <>
            <Helmet>
                <meta
                name="description"
                content='Main page of API marvel app'
                />
                <title>Information Marvel Portal</title>
            </Helmet>
            <ErrorBoundary>
                <RandomChar/>
            </ErrorBoundary>
            <div className="char__content">
                <ErrorBoundary>
                    <CharList onCharSelected={onCharSelected}/>
                </ErrorBoundary>
                <div>
                    <ErrorBoundary>
                        <CharInfo charId = {selectedChar}/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <CharSearchForm/>
                    </ErrorBoundary>
                </div>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default Mainpage
