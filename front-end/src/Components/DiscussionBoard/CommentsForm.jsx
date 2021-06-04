import axios from "axios";
import { useEffect, useState } from "react";

const CommentsForm = ({ handleUpdate }) => {

    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("1");
    const [movieTitle, setMovieTitle] = useState("");
    const [movie, setMovie] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(movieTitle==="" || "Select a movie"){
            return;
        }
        const dataTosend = {
            "username": username,
            "comment": comment,
            "rating": rating,
            "movieTitle": movieTitle
        };
        console.log(dataTosend);
        axios
            .post("http://localhost:8080/discussions/post", dataTosend)
            .then((response) => {
                console.log(response);

            })
            .catch((error) => {
                console.error(error);

            });
        setUsername("");
        setComment("");
        setRating("1");
        setMovieTitle("");
        handleUpdate();
    }

    useEffect(() => {
        axios
            .get("http://localhost:8080/movies/getAll")
            .then((response) => {
                console.log(response);
                setMovie(response.data);
                setIsLoading(false);

            })
            .catch((error) => {
                console.error(error);

            });
    }, [])

if(isLoading===false){
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Comment</label>
                <input
                    id="comment"
                    type="text"
                    name="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <label>Rating</label>
                <select id="rating"
                    type="number"
                    name="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <label>Test</label>
                </select>
                <label>Movie</label>
                <select id="test"
                    type="text"
                    name="test"
                    value={movieTitle}
                    onChange={(e) => setMovieTitle(e.target.value)}>
                    <option selected>Select a movie</option>
                    {movie.map((movie) => (
                        <option>{movie.title}</option>
                    ))}
                </select>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}else{
    return(
        <>
        <h1>Loading</h1>
        </>
    )
}
}


export default CommentsForm;