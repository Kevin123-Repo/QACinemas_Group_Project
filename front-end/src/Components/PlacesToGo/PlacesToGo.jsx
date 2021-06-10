import {Container} from 'reactstrap';
import PlacesToGoTable from './PlacesToGoTable';

const PlacesToGo = () => {
    return(
        <Container className="places-div">
            <h1 align='center'>Places to go</h1>
            <PlacesToGoTable/>
        </Container>
    );
}

export default PlacesToGo;