import { useParams } from "react-router";
import {Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

const SearchLinksPage = () => {

    let { query } = useParams();
    // let link = `/movies/${query}`;

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/movies/find/${query}`)
            .then((res) => {
                const DATA = res.data;
                setData(DATA);
            }).catch((err) => {
                console.log(err.message);
            })
    }, []);

    console.log(data);
    
    // Type in film title exactly to return a working link
    const movieLinks = data.map(movie => {
        return(
        
            <Link to={`../movies/${movie.title}`}><h1>{movie.title}</h1></Link>
        )
        // <Link to={link}><h1>{query}</h1></Link>
        });
        
    return(
        movieLinks
    )
}

export default SearchLinksPage;