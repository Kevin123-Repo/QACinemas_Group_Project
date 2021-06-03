import Comment from './Comment';
import axios from "axios";
import { useEffect, useState } from "react";
import {Table} from "reactstrap";

const CommentsTable = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [update, setUpdate] = useState(false);


    useEffect(() => {


        axios
            .get("http://localhost:3000/discussions/getAll")
            .then((response) => {  
                setData(response.data);
                console.log(response);

            })
            .catch((error) => {
                setError(error);
                console.error(error);

            });
        
    }, []);
    if (error) {
        return <h1>{error.message}</h1>
    } else {

        return (
            <>
                <Table>
                <tbody>
                    {data.map((comment) => (
                       
                            <Comment key={comment.id} comment={comment} setUpdate={setUpdate} />
                        
                    ))}
                    
                </tbody>
                </Table>
                
            </>
        );

    };

}
export default CommentsTable;   