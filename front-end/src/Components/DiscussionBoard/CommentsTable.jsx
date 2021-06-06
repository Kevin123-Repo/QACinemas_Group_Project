import Comment from './Comment';
import { Table } from "reactstrap";

const CommentsTable = ({data}) => {
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
                    {data.map((comment,index) => (
                        <Comment key={index} comment={comment} />
                    ))}
                </tbody>
            </Table>
        </>
    );
}
export default CommentsTable;