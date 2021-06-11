import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from 'axios';

const MovieInfo = () => {

    let { movie } = useParams();

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get(`https://qacinemaproject.nw.r.appspot.com/movies/get/${movie}`)
            .then((res) => {
                const DATA = res.data;
                setData(DATA);
                setIsLoaded(true);
            }).catch((err) => {
                console.log(err.message);
                setIsLoaded(true);
            })
    }, []);
    if (isLoaded) {
        return (
            <div className="movie-container">
                <img className="moviePoster" src={data.imageUrl} alt=""></img>
                <div className="movie-info">
                    <h5> Title: {data.title} </h5>
                    <h5> Director: {data.director} </h5>
                    <h5> Actors </h5>
                    <ul>
                        {data.actors.map((actor, i) => (
                            <li key={i}> {actor} </li>
                        ))}
                    </ul>
                    { 
                        (data.showingTimes.length > 0)?
                        <>
                            <h5> Showing Times </h5>
                            <ul>
                                {
                                    data.showingTimes.map((entry, i) => (
                                        <li key={i}> {`${entry.day}: ${entry.times.toString()}`} </li>
                                    ))
                                }
                            </ul>
                        </> : <br/>
                    }
                </div>
            </div>
        );
    } else {
        return (
            <h1> Loading... </h1>
        );
    }
}

export default MovieInfo;   