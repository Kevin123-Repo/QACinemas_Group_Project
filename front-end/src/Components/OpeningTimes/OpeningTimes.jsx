import {Container} from 'reactstrap';
import Clock from '../../Images/Clock.png';
const OpeningTimes = () =>{

    return(
        <Container>
        <h1 align='center'><img src = {Clock} height = '55' width = '55' alt = 'Clock'/> Opening Times <img src = {Clock} height = '55' width = '55' alt = 'Clock'/></h1>
        <div>
        <h5 align='center'>Monday: 10:00 - 23:00</h5>
        <h5 align='center'>Tuesday: 10:00 - 23:00</h5>
        <h5 align='center'>Wednesday: 10:00 - 23:00</h5>
        <h5 align='center'>Thursday: 10:00 - 23:00</h5>
        <h5 align='center'>Friday: 10:00 - 00:00</h5>
        <h5 align='center'>Saturday: : 10:00 - 00:00</h5>
        <h5 align='center'>Sunday: 10:00 - 22:00</h5>
      
        </div>
        </Container>
    );

};

export default OpeningTimes;