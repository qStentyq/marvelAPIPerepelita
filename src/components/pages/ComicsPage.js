import Banner from "../banner/Banner";
import ComicsList from '../comicsList/ComicsList'
import { Helmet } from "react-helmet";


const ComicPage = () => {


    return(
        <>
            <Helmet>
                <meta
                name="description"
                content='Information about many comics'
                />
                <title>Comics pager</title>
            </Helmet>
            <Banner/>
            <ComicsList/>
        </>
    )
}

export default ComicPage