import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const CommentsForm = ({ handleUpdate }) => {

    const [username, setUsername] = useState("Anonymous");
    const [comment, setComment] = useState("Comment");
    const [rating, setRating] = useState("");
    const [movieTitle, setMovieTitle] = useState("N/A");
    const [movie, setMovie] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const validateForm = () => {

        if (username === "" || comment === "") {
            alert("Please enter a username and comment");
            return false;
        }

        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    if(validateForm()){
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
                <Form className="discussion-form" onSubmit={handleSubmit}>
                    <FormGroup row>
                        <Label for="username" sm={1}>Username</Label>
                        <Col sm={10}>
                            <Input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </Col>
                    </FormGroup>
                    <br />
                    <FormGroup row>
                        <Label for="comment" sm={1}>Comment</Label>
                        <Col sm={10}>
                            <Input type="textarea" name="comment" id="comment" value={comment} onChange={(e) => setComment(e.target.value)} resize="none" />
                            <FormText color="muted">
                                Max 280 characters
                            </FormText>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="movie" sm={1}>Movie</Label>
                        <Col sm={10}>
                            <select class="form-select" name="movie" aria-label="movie"  value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)}>
                            <option></option>
                                {movie.map((movie) => (
                                    <option key={movie.title}>{movie.title}</option>
                                ))}
                            </select>
                            <FormText color="muted">
                                Not required
                            </FormText>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="rating" sm={1}>Rating</Label>
                        <Col sm={10}>
                           <select class="form-select" name="rating" aria-label="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                                <option></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <FormText color="muted">
                                Not required
                            </FormText>
                        </Col>
                    </FormGroup>

                    <Button>Submit</Button>

                </Form>
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