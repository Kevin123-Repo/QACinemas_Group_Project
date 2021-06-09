import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Homepage from '../../src/Components/Homepage';


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


});