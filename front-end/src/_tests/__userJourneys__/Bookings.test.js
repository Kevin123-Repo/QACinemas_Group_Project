import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TicketBooking from '../../Components/TicketBooking/TicketBooking';
import App from '../../App';

describe("User journeys for the Bookings page", () => {

    test('Test Booking form validation on empty form', async () => {
        render(<TicketBooking />);
        const jsdomAlert = window.alert;
        window.alert = () => {};
        const infoElement = await screen.findByPlaceholderText('Enter your name');
        expect(infoElement).toBeInTheDocument();
        const BTN = await screen.findByRole('button', { name: 'Send' });
        BTN.click();
        expect(infoElement).toBeInTheDocument();
        window.alert = jsdomAlert;
    });

    test('Testing successful Booking page journey', async () => {
        render(<App />);
        const linkElement = screen.getByRole('link', { name: 'Bookings' });
        linkElement.click();

        // Find and set the name input
        const infoElement = await screen.findByPlaceholderText('Enter your name');
        fireEvent.change(infoElement, { target: { value: 'Qwerty' } });
        expect(infoElement.value).toBe("Qwerty");
        
        // Find and click the number of adults
        const adultSelection = await screen.findByLabelText("adult1");
        adultSelection.click();

        // Find and click the number of adults
        const seatSelection = await screen.findByLabelText("seat1");
        seatSelection.click();

        // Find and click the movie
        const movieSelection = await screen.findByLabelText("movie0");
        movieSelection.click();

        // Find and click the time
        const timeSelection = await screen.findByLabelText("time0");
        timeSelection.click();

        // Find and click the Submit button
        const BTN = await screen.findByRole('button', { name: 'Send' });
        BTN.click();

        expect(adultSelection).not.toBeInTheDocument();
    })
});
