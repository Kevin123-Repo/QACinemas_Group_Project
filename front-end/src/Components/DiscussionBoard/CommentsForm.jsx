import axios from "axios";
import { useState } from "react";

const CommentsForm = () =>{

    const [username,setUsername] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");
    const [movieTitle, setMovieTitle] = useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();
        const dataTosend = {
            "username":username,
            "comment":comment,
            "rating":rating,
            "movieTitle":movieTitle
        };
        console.log(dataTosend);
        axios
            .post("http://localhost:3000/discussions/post", dataTosend)
            .then((response) => {
                console.log(response);

            })
            .catch((error) => {
                console.error(error);

            });
        setUsername("");
        setComment("");
        setRating("");
        setMovieTitle("");
    }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
            id="username" 
            type="text" 
            name="username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
        />
        <label>Comment</label>
        <input 
            id="comment" 
            type="text" 
            name="comment"
            value={comment}
            onChange={(e)=>setComment(e.target.value)}
        />
        <label>Rating</label>
        <input 
            id="rating" 
            type="number" 
            name="rating"
            value={rating}
            onChange={(e)=>setRating(e.target.value)}
        />
        <label>Movie Title</label>
        <input 
            id="movieTitle" 
            type="text" 
            name="movieTitle"
            value={movieTitle}
            onChange={(e)=>setMovieTitle(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      </>
  );
}


export default CommentsForm;