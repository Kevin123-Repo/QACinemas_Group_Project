import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Homepage from '../../src/Components/Homepage';
import renderer from 'react-test-renderer';

describe("Snapshot Tests", () => {

  test('Homepage matches snapshot', () => {
    const tree = renderer.create(<Homepage />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});



