import { findByAltText, getByTestId, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Classifications from '../../Components/Classifications/Classifications';

test('User journey for classification,',async () => {
        render(<Classifications />);
        const classificationImage =  document.querySelector('#u');
        classificationImage.click();
      
        await expect(document.querySelector('.collapse show')).toBeInTheDocument();
       
});