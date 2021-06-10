import { findByAltText, getByTestId, render, screen, waitFor,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListingGallery from '../../Components/Listings/ListingGallery';
import App from '../../App';


 
describe("User journeys for the Discussion page", () => {
 
    test('Testing discussion post creation,', async () => {
        render(<App />);
        const linkElement = screen.getByRole('link', { name: 'Discussion' });
        linkElement.click();

        const userName = await screen.findByDisplayValue("Anonymous");
        userName.click();
        fireEvent.change(userName, { target: { value: 'q/qwsfawwqe12*/' } })
       
        const userComment = await screen.findByDisplayValue("Comment");
        userComment.click();
        fireEvent.change(userComment, { target: { value: 'This movie was good!' } })

        const submitButton = screen.getByRole("button", { name: "Enter!" });
        submitButton.click();

        waitFor(() => {
            expect(screen.getByText("q/qwsfawwqe12*/")).toBeInTheDocument();
        });
 
    })


});