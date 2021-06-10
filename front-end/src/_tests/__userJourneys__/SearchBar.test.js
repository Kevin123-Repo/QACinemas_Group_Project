import { findByAltText, fireEvent, getByTestId, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListingGallery from '../../Components/Listings/ListingGallery';
import App from '../../App';



describe("User journey for the search bar", () => {

    test('Testing search feature,', async () => {
        render(<App />);

        const linkElement = screen.getByPlaceholderText("Search Term");
        linkElement.click();
        fireEvent.change(linkElement, { target: { value: 'Inception' } })

        const searchButton = screen.getByRole("button", { name: "Submit" });
        searchButton.click();

        waitFor(() => {
            expect(screen.getByText("Inception")).toBeInTheDocument();
        });
    })
});