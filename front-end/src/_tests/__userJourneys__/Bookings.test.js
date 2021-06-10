import { fireEvent, render, screen, } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../../App';


test('Test Booking form validation on empty form', async () => {
    render(<App />);
    const linkElement = screen.getByRole('link', { name: 'Bookings' });
    linkElement.click();
    const infoElement = await screen.findByPlaceholderText('Enter your name');
    expect(infoElement).toBeInTheDocument();
    const button = screen.getByRole('button', { name: 'Send' });
    button.click();
    expect(infoElement).toBeInTheDocument();

});


// test('Testing successful Booking page journey', async () => {
//     render(<App />);

//     const linkElement = screen.getByRole('link', { name: 'Bookings' });
//     linkElement.click();
//     const infoElement = await screen.findByPlaceholderText('Enter your name');
//     infoElement.click();
//     fireEvent.change(infoElement, { target: { value: 'Qwerty' } });

//     const adultElement = screen.getByRole('', {});
//     const seatElement = screen.getByRole('', {});

//     fireEvent.change(nameElement, { target: { value: 'Qwerty' } });
//     fireEvent.change(adultElement, { target: { value: 2 } });
//     fireEvent.change(seatElement, { target: { value: 2 } });
// })
