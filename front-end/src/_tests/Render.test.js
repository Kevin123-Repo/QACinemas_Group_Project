import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../src/App'
import Homepage from '../../src/Components/Homepage';
import ListingGallery from '../Components/Listings/ListingGallery';
import TicketBooking from '../Components/TicketBooking/TicketBooking';
import Classifications from '../Components/Classifications/Classifications';
import Screens from '../Components/Screens/Screens';
import NewReleases from '../Components/Listings/NewReleases';
import About from '../Components/About/About';
import OpeningTimes from '../Components/OpeningTimes/OpeningTimes';
import ContactPage from '../Components/ContactPage/ContactPage';
import GettingThere from '../Components/Getting_There/GettingThere';
import DiscussionBoard from '../Components/DiscussionBoard/DiscussionBoard';


describe("Did pages render correctly test", () => {

    test('Homepage rendered correctly', () => {
        render(<Homepage />);
        const infoElement = screen.getByText('Welcome!');
        expect(infoElement).toBeInTheDocument();

    });

    test('Listings page rendered correctly', () => {
        render(<ListingGallery />);
        waitFor(()=>{
            expect(document.querySelector(".listingImgs")).toBeInTheDocument();
        });
    });

    test('Booking page rendered correctly', () => {
        render(<TicketBooking />);
        waitFor(()=>{
            expect(screen.getByText('Ticket Booking')).toBeInTheDocument();
        });

    });

    test('Classificiation page rendered correctly', () => {
        render(<Classifications />);
        const classificationImage = document.querySelector('#u');
        expect(classificationImage).toBeInTheDocument();

    });

    test('Screens page rendered correctly', () => {
        render(<Screens />);
        waitFor(()=>{
            expect(document.querySelector('.screens-div container')).toBeInTheDocument();
        });

    });

    test('New realases page rendered correctly', () => {
        render(<NewReleases />);
        waitFor(()=>{
            expect(document.querySelector(".listingImgs")).toBeInTheDocument();
        });
    });

    test('About page rendered correctly', () => {
        render(<About />);
        const aboutElement = screen.getByText('About Scrum');
        expect(aboutElement).toBeInTheDocument();

    });

    test('Opening times rendered correctly', () => {
        render(<App />);
        const linkElement = document.querySelector("a[href='/OpeningTimes']");
        linkElement.click();
        waitFor(()=>{
            expect(screen.getByText('Monday')).toBeInTheDocument();
        });
    });

    test('Contact us page rendered correctly', () => {
        render(<ContactPage />);
        const contactLabel = screen.getByLabelText('Name');
        expect(contactLabel).toBeInTheDocument();

    });

    test('Getting there rendered correctly', () => {
        render(<GettingThere />);
        const gettingThereElement = screen.getByText('Parking');
        expect(gettingThereElement).toBeInTheDocument();
    });

    test('Places to go rendered correctly', () => {
        render(<GettingThere />);
        waitFor(()=>{
            expect(screen.getByText('Nandos')).toBeInTheDocument();
        });
    });

    test('Contact us page rendered correctly', () => {
        render(<DiscussionBoard />);
        waitFor(()=>{
            expect(screen.getByLabelText('Rating')).toBeInTheDocument();
        });

    });
});