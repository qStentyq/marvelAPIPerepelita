
import { useHttp } from "../hooks/http.hook";
const useMarvelService = () =>{

    const {loading, request, error, clearError} = useHttp()
    const _apikey = 'apikey=fdd12521ddeaa43bedac19c6a3422b87';
    const _apibase = 'https://gateway.marvel.com:443/v1/public';
    const _baseOffset = 0;

    
    const getNewComics = async (_offset = 2) => {
        const res = await request(`${_apibase}/comics?format=comic&formatType=comic&orderBy=issueNumber&limit=8&offset=${_offset}&${_apikey}`)
<<<<<<< HEAD
        // console.log(res)
=======
        console.log(res)
>>>>>>> 627c47890f11b206f68879c62042bb51c778ba25
        return res.data.results.map(_transformComic)

    }
    const getNewComic = async (id) => {
<<<<<<< HEAD
		const res = await request(`${_apibase}/comics/${id}?${_apikey}`);
=======
		const res = await request(`${_apibase}comics/${id}?${_apikey}`);
>>>>>>> 627c47890f11b206f68879c62042bb51c778ba25
		return _transformComic(res.data.results[0]);
	};
    const getAllCharacters = async (offset = _baseOffset) =>
    {
        const res = await request(`${_apibase}/characters?limit=9&offset=${offset}&${_apikey}`);
<<<<<<< HEAD
        // console.log(res)
=======
        console.log(res)
>>>>>>> 627c47890f11b206f68879c62042bb51c778ba25
        return res.data.results.map(_transformCharacter);
    }

   const  getCharacter = async (id) =>
    {
        const res = await request(`${_apibase}/characters/${id}?${_apikey}`);
<<<<<<< HEAD
        // console.log(res)
=======
>>>>>>> 627c47890f11b206f68879c62042bb51c778ba25
        return _transformCharacter(res.data.results[0]);
    }

    const _transformCharacter = (char) => {
        let descr = char.description;
        if(descr.length === 0)
        {
            descr = 'О данном персонаже недостаточно информации'
        }
        if(descr.length > 200)
        {
            descr = descr.slice(0,200) + '...'
        }
        return{
            id: char.id,
            name: char.name,
            description: descr,
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }
    const _transformComic = (comic) => {
        let descr = comic.description;
        let prices = comic.prices[0].price + '$'
        if(prices.slice(0,1) === '0') {
            prices = 'NOT AVAIBLE'
        }
        return{
            id: comic.id,
            title: comic.title,
            description: descr ? `${descr}` : 'No description',
            pageCount: comic.pageCount
				? `${comic.pageCount} p.`
				: "No information about the number of pages",
            thumbnail: comic.thumbnail.path + '.' + comic.thumbnail.extension,
            language: comic.textObjects[0]?.language || "en-us",
            price: prices,
            url: comic.urls[0].url,
        }
}
    return {loading, error, getAllCharacters, getCharacter, clearError, getNewComics,getNewComic}
}

export default useMarvelService;