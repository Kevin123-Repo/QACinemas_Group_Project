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
import PlacesToGo from '../Components/PlacesToGo/PlacesToGo';
import { BrowserRouter } from 'react-router-dom';

describe("Did pages render correctly test", () => {

    test('Homepage rendered correctly', () => {
        render(<Homepage />);
        const infoElement = screen.getByText('Welcome to QA Cinemas! Here you can browse all of our latest films.');
        expect(infoElement).toBeInTheDocument();

    });

    test('Listings page rendered correctly', async () => {
        render(<BrowserRouter> <ListingGallery /> </BrowserRouter>);
        const IMG = await screen.findByAltText("0");
        expect(IMG).toBeInTheDocument();
    });

    test('Booking page rendered correctly', async () => {
        render(<TicketBooking />);
        const txt = await screen.findByText('Ticket Booking');
        expect(txt).toBeInTheDocument();
    });

    test('Classificiation page rendered correctly', () => {
        render(<Classifications />);
        const classificationImage = document.querySelector('#u');
        expect(classificationImage).toBeInTheDocument();
    });

    test('Screens page rendered correctly', async () => {
        render(<Screens />);
        const IMG = await screen.findByAltText("Regular Screen");
        expect(IMG).toBeInTheDocument();
    });

    test('New realases page rendered correctly', async () => {
        render(<BrowserRouter> <NewReleases /> </BrowserRouter>);
        const IMG = await screen.findByAltText("0");
        expect(IMG).toBeInTheDocument();
    });

    test('About page rendered correctly', () => {
        render(<About />);
        const aboutElement = screen.getByText('About Scrum');
        expect(aboutElement).toBeInTheDocument();
    });

    test('Opening times rendered correctly', async () => {
        render(<BrowserRouter> <OpeningTimes /> </BrowserRouter>);
        const TXT = await screen.findByText('Monday', { exact: false });
        expect(TXT).toBeInTheDocument();
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
        render(<PlacesToGo />);
        const TXT = screen.getByText('Nandos');
        expect(TXT).toBeInTheDocument();
    });

    test('Discussion board rendered correctly', async() => {
        render(<DiscussionBoard />);
        const INPUT = await screen.findByRole("textbox", { name : "Comment" });
        expect(INPUT).toBeInTheDocument();
    });
});