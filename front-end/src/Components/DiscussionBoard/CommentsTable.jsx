import Comment from './Comment';
import { Table } from "reactstrap";

const CommentsTable = ({data}) => {
    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th id="username-col">Username</th>
                        <th id="comment-col">Comment</th>
                        <th id="film-col">Film</th>
                        <th id="rating-col">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((comment,index) => (
                        <Comment key={index} comment={comment} />
                    ))}
                </tbody>
            </Table>
        </>
    );
}
export default CommentsTable;