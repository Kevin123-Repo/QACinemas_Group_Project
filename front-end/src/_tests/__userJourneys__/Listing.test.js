import { findByAltText, getByTestId, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListingGallery from '../../Components/Listings/ListingGallery';
import App from '../../App';


 
describe("Did pages render correctly test", () => {
 
    test('Testing carousel anchor tag,', async () => {
        render(<App />);
        // const linkElement = screen.getByRole('link', { name: 'Listings' });
        // linkElement.click();
        // const image = await screen.findByAltText("0", undefined, { timeout: 4000 });
        // expect(image).toBeInTheDocument();
 
    })
});