import axios from "axios";
import { useEffect, useState } from "react";

const CommentsForm = ({ handleUpdate }) => {

    const [username, setUsername] = useState("Anonymous");
    const [comment, setComment] = useState("Comment");
    const [rating, setRating] = useState("");
    const [movieTitle, setMovieTitle] = useState("N/A");
    const [movie, setMovie] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const dataTosend = {
            "username": username,
            "comment": comment,
            "rating": rating,
            "movieTitle": movieTitle
        };

        axios
            .post("http://localhost:8080/discussions/post", dataTosend)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error.message);
            });

        setUsername("Anonymous");
        setComment("Comment");
        setRating("");
        setMovieTitle("N/A");
        handleUpdate();
    }

    useEffect(() => {
        axios
            .get("http://localhost:8080/movies/getAll")
            .then((response) => {
                setMovie(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error.message);
            });
    }, [])

    if (isLoading === false) {
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
                        <option value="N/A"></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <label>Movie</label>
                    <select id="test"
                        type="text"
                        name="movie"
                        value={movieTitle}
                        onChange={(e) => setMovieTitle(e.target.value)}>
                        <option></option>
                        {movie.map((movie) => (
                            <option key={movie.title}>{movie.title}</option>
                        ))}
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </>
        );
    } else {
        return (
            <>
                <h1>Loading</h1>
            </>
        )
    }
}


export default CommentsForm;