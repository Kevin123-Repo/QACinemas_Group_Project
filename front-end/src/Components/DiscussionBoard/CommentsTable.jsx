import Comment from './Comment';
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "reactstrap";

const CommentsTable = ({update}) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {


        axios
            .get("http://localhost:8080/discussions/getAll")
            .then((response) => {
                setData(response.data);
                console.log(response);

            })
            .catch((error) => {
                setError(error);
                console.error(error);

            });

    }, [update]);
    if (error) {
        return <h1>{error.message}</h1>
    } else {

        return (
            <>
                <Table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Comment</th>
                            <th>Film</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((comment) => (

                            <Comment key={comment.id} comment={comment} />

                        ))}

                    </tbody>
                </Table>

            </>
        );

    };

}
export default CommentsTable;