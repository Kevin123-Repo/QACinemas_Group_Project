import { Container } from 'reactstrap';
import AboutTable from './AboutTable';
import ScrumSection from './ScrumSection';

const About = () => {
    return (
        <Container className="about-div">
            <AboutTable />
            <ScrumSection />
        </Container>
    );
}
export default About;