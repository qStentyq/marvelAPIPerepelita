import AppHeader from "../appHeader/AppHeader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Mainpage, ComicPage, Page404, SingleComicPage } from "../pages";

const App = () => {
   


    return (
        <Router>
            <div className="app">
            <AppHeader/>
            <main>
                <Routes>
                    <Route path = "/comics" element= {<ComicPage/>}/>
                    <Route path = "/comics/:comicsId" element= {<SingleComicPage/>}/>
                    <Route path = "/" element = {<Mainpage/>}/>
                    <Route path = "*" element = {<Page404/>}/>
                </Routes>
            </main>
        </div>
        </Router>
    )
    }


export default App;