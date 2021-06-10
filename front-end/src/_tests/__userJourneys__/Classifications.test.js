import { findByAltText, getByTestId, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Classifications from '../../Components/Classifications/Classifications';

test('User journey for classification,', () => {
        render(<Classifications />);
        const classificationImage = document.querySelector('#u');
        classificationImage.click();
        waitFor(()=>{
            expect(document.querySelector('.collapse show')).toBeInTheDocument();
        });
});