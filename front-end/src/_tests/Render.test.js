import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Homepage from '../../src/Components/Homepage';


describe("Did pages render correctly test", () => {

    test('Homepage rendered correctly', () => {
        render(<Homepage />);
        const infoElement = screen.getByText('Welcome!');
        expect(infoElement).toBeInTheDocument();

    });

});