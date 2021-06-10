import { findByAltText, fireEvent, getByTestId, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListingGallery from '../../Components/Listings/ListingGallery';
import App from '../../App';



describe("User journey for the search bar", () => {

    test('Testing search feature,', async () => {
        render(<App />);

        const linkElement = screen.getByPlaceholderText("Search Term");
        fireEvent.change(linkElement, { target: { value: 'Inception' } })
        expect(linkElement.value).toBe("Inception");
        
        // window.location.href="http://localhost:3000/search/Inception";


        // const result = await screen.findByRole("link",{name:"Inception"});
        // expect(result).toBeInTheDocument();
        
        const newName = screen.getByRole('link', { name: 'Listings' });
        newName.click();

        console.log(document.URL);
        
        
        
        // const searchButton = await screen.findByRole("link", { name: "Submit" });
        // searchButton.click()
        
        // const heading = screen.findByRole("heading",{name: "Welcome to QA Cinemas! Here you can browse all of our latest films."} )

        // expect(heading).not.toBeInTheDocument();

        
    })
});