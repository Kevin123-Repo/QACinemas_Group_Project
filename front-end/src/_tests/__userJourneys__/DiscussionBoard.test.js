import { findByAltText, getByTestId, render, screen, waitFor,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListingGallery from '../../Components/Listings/ListingGallery';
import App from '../../App';
import DiscussionBoard from '../../Components/DiscussionBoard/DiscussionBoard';
 
describe("User journeys for the Discussion page", () => {
 
    test('Testing discussion post creation,', async () => {
        render(<DiscussionBoard />);

        const userName = await screen.findByDisplayValue("Anonymous");
        fireEvent.change(userName, { target: { value: 'dsafdsufhdusf' } })
        expect(userName.value).toBe("dsafdsufhdusf");
       
        const userComment = await screen.findByDisplayValue("Comment");
        fireEvent.change(userComment, { target: { value: 'This movie was good!' } })
        expect(userComment.value).toBe("This movie was good!");

        const submitButton = screen.getByRole("button", { name: "Submit" });
        submitButton.click();

        const tdata = await screen.findByRole("cell", { name: "dsafdsufhdusf" });

        expect(tdata).toBeInTheDocument();
    })
});