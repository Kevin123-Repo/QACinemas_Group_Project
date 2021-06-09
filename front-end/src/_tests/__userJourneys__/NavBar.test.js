import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../App.js'



test('Footer navigations works', () => {

    render(<App />);
    const linkElement = screen.getByRole('link', { name: 'About' });
    expect(linkElement).toHaveAttribute('href', '/About');
    linkElement.click();
    const infoElement = screen.getByText('Anoush Lowton');
    expect(infoElement).toBeInTheDocument();
    const linkElement2 = screen.getByRole('link', { name: 'Contact Us' });
    expect(linkElement2).toHaveAttribute('href', '/ContactPage');
    linkElement2.click();
    const infoElement2 = screen.getByText('Learning Center');
    expect(infoElement2).toBeInTheDocument();

});