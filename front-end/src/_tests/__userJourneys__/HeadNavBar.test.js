import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../App.js'

test('Header navigations works', async () => {

    render(<App />);
    const linkElement = screen.getByRole('link', { name: 'Listings' });
    linkElement.click();
    await expect(screen.findByAltText('0', undefined, { timeout: 4000 }));
    const linkElement2 = screen.getByRole('link', { name: 'Classifications' });
    linkElement2.click();
    const classificationImage = document.querySelector('#u');
    await expect(classificationImage).toBeInTheDocument();


});