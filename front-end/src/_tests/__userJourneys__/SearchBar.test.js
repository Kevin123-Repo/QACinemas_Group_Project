import { fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../App';

describe("User journey for the search bar", () => {

    test('Testing search feature,', async () => {
        render(<App />);

        const linkElement = screen.getByPlaceholderText("Search Term");
        fireEvent.change(linkElement, { target: { value: 'Inception' } })
        expect(linkElement.value).toBe("Inception");

        const searchLink = await screen.findByLabelText("search-link");
        searchLink.click();

        const searchBtn = await screen.findByLabelText("search-btn");
        searchBtn.click();
    })
});