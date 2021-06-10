import './App.css';
import Homepage from './Components/Homepage';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import NavBar from './Components/Header_Footer/NavBar';
import FooterBar from './Components/Header_Footer/FooterBar';
import OpeningTimes from './Components/OpeningTimes/OpeningTimes'
import GettingThere from './Components/Getting_There/GettingThere'
import Screens from './Components/Screens/Screens';
import PlacesToGo from './Components/PlacesToGo/PlacesToGo';
import Classifications from './Components/Classifications/Classifications';
import About from './Components/About/About';
import ContactPage from './Components/ContactPage/ContactPage';
import TicketBooking from './Components/TicketBooking/TicketBooking';
import ListingGallery from './Components/Listings/ListingGallery';
import MovieInfo from './Components/Listings/MovieInfo';
import NewReleases from './Components/Listings/NewReleases';
import DiscussionBoard from './Components/DiscussionBoard/DiscussionBoard';
import SearchLinksPage from './Components/Searchbar/SearchLinksPage';
import Payments from './Components/Payments/Payments';
import OrderSummary from './Components/Payments/OrderSummary';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <div className="container-fluid main-content">
            <Route path="/OpeningTimes">
              <OpeningTimes />
            </Route>
            <Route path="/GettingThere">
              <GettingThere />
            </Route>
            <Route path="/Classifications">
              <Classifications />
            </Route>
            <Route path="/PlacesToGo">
              <PlacesToGo />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/ContactPage">
              <ContactPage />
            </Route>
            <Route path="/Screens">
              <Screens />
            </Route>
            <Route path="/Listings">
              <ListingGallery />
            </Route>
            <Route path="/NewReleases">
              <NewReleases />
            </Route>
            <Route path="/movies/:movie">
              <MovieInfo />
            </Route>
            <Route path="/Discussion">
              <DiscussionBoard />
            </Route>
            <Route path="/Payments" render={(props) => <Payments {...props} />} />
            <Route path="/TicketBooking">
                <TicketBooking />
            </Route>
            <Route path="/search/:query">
              <SearchLinksPage />
            </Route>
            <Route path="/OrderSummary" render={(props) => <OrderSummary {...props}/>}/>
          </div>
        </Switch>
          <FooterBar />
      </Router> 
    </>
  );
}

export default App;
