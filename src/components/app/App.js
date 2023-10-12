import AppHeader from "../appHeader/AppHeader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import {lazy, Suspense} from 'react'


const Page404 = lazy(() => import('../pages/404'))
const MainPage = lazy(() => import('../pages/MainPage'))
const ComicPage = lazy(() => import('../pages/ComicsPage'))
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'))

 
=======
import { Mainpage, ComicPage, Page404, SingleComicPage } from "../pages";

>>>>>>> 627c47890f11b206f68879c62042bb51c778ba25
const App = () => {
   


    return (
        <Router>
            <div className="app">
            <AppHeader/>
            <main>
<<<<<<< HEAD
                <Suspense fallback = {<span>Loading...</span>}>
                    <Routes>
                        <Route path = "/comics" element= {<ComicPage/>}/>
                        <Route path = "/comics/:comicsId" element= {<SingleComicPage/>}/>
                        <Route path = "/" element = {<MainPage/>}/>
                        <Route path = "*" element = {<Page404/>}/>
                    </Routes>
                </Suspense>
=======
                <Routes>
                    <Route path = "/comics" element= {<ComicPage/>}/>
                    <Route path = "/comics/:comicsId" element= {<SingleComicPage/>}/>
                    <Route path = "/" element = {<Mainpage/>}/>
                    <Route path = "*" element = {<Page404/>}/>
                </Routes>
>>>>>>> 627c47890f11b206f68879c62042bb51c778ba25
            </main>
        </div>
        </Router>
    )
    }


export default App;