import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Homepage from '../../src/Components/Homepage';
import About from '../../src/Components/About/About';
import Classifications from '../../src/Components/Classifications/Classifications';
import ContactPage from '../../src/Components/ContactPage/ContactPage';
import DiscussionBoard from '../../src/Components/DiscussionBoard/DiscussionBoard';
import GettingThere from '../../src/Components/Getting_There/GettingThere';
import ListingGallery from '../../src/Components/Listings/ListingGallery';
import NewReleases from '../../src/Components/Listings/NewReleases';
import OpeningTimes from '../../src/Components/OpeningTimes/OpeningTimes';
import PlacesToGo from '../../src/Components/PlacesToGo/PlacesToGo';
import Screens from '../../src/Components/Screens/Screens';
import TicketBooking from '../../src/Components/TicketBooking/TicketBooking';
import renderer from 'react-test-renderer';

describe("Snapshot Tests", () => {

  test('Homepage matches snapshot', () => {
    const tree = renderer.create(<Homepage />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('About matches snapshot', () => {
    const tree = renderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('Classifications matches snapshot', () => {
    const tree = renderer.create(<Classifications />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Contact Page matches snapshot', () => {
    const tree = renderer.create(<ContactPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Discussion Board matches snapshot', () => {
    const tree = renderer.create(<DiscussionBoard />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Getting There matches snapshot', () => {
    const tree = renderer.create(<GettingThere />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Listing Gallery matches snapshot', () => {
    const tree = renderer.create(<ListingGallery />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('New Releases matches snapshot', () => {
    const tree = renderer.create(<NewReleases />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Opening Times matches snapshot', () => {
    const tree = renderer.create(<OpeningTimes />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Places To Go matches snapshot', () => {
    const tree = renderer.create(<PlacesToGo />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Screens matches snapshot', () => {
    const tree = renderer.create(<Screens />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Ticket Booking matches snapshot', () => {
    const tree = renderer.create(<TicketBooking />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});



