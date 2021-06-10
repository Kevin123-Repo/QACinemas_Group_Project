import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Classifications from '../../Components/Classifications/Classifications';
 
describe("User journeys for the Discussion page", () => {
 
    test('Testing collapse', async () => {
        render(<Classifications />);
        const IMG = await screen.findByRole("img", {name: "u"});
        IMG.click();
        const TXT = await screen.findByText("four and above", {exact: false});
        expect(TXT).toBeInTheDocument();
    });
});