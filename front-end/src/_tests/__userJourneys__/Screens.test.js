import { findByAltText, getByTestId, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListingGallery from '../../Components/Listings/ListingGallery';
import App from '../../App';


 
describe("User journey for the Screen page", () => {
 
    test('Testing carousel anchor tag,', async () => {
        render(<App />);
        const linkElement = screen.getByRole('link', { name: 'Screens' });
        linkElement.click();
        const image = await screen.findByAltText("Regular Screen");
        expect(image).toBeInTheDocument();

        const forwardClick = document.querySelector(".carousel-control-next");
        forwardClick.click();

        const image1 = await screen.findByAltText("Regular Screen");
        expect(image1).toBeInTheDocument();
 
    })


  
});