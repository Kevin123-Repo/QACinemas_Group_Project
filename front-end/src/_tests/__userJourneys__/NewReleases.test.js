import { findByAltText, getByTestId, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListingGallery from '../../Components/Listings/ListingGallery';
import App from '../../App';


 
describe("User journeys for the New Releases page", () => {
 
    test('Testing carousel anchor tag,', async () => {
        render(<App />);
        const linkElement = screen.getByRole('link', { name: 'New Releases' });
        linkElement.click();
        const image = await screen.findByAltText("0");
        expect(image).toBeInTheDocument();

        const forwardClick = document.querySelector(".carousel-control-next");
        forwardClick.click();

        const image1 = await screen.findByAltText("1");
        expect(image1).toBeInTheDocument();
 
    })


    test('Testing new releases image redirect,', async () => {
        render(<App />);
        const linkElement = screen.getByRole('link', { name: 'New Releases' });
        linkElement.click(); 
        const image = await screen.findByAltText("0");
        expect(image).toBeInTheDocument();

        image.click();

        const movieInfo = await screen.findByText("Title: ", {exact: false});
        expect(movieInfo).toBeInTheDocument();
 
    })
});