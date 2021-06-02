import cinemaImage from '../Images/Homepage-Cinema.jpg';
import { Col, Row } from "reactstrap";

const Homepage = () => {

    return(
        <div>
            <Row>
                <Col lg="1"></Col>
                <Col lg="5">
                    
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore impedit cumque inventore cupiditate dolores? Quis et neque ipsam architecto totam recusandae possimus laboriosam dolores iste porro exercitationem, tenetur corrupti? Ipsam?
                    
                </Col>

                <Col lg="5">
                    <img src={cinemaImage} alt="cinema screen"/>
                </Col>
                <Col lg="1"></Col>
            </Row>
            
        </div>
    );
}

export default Homepage;