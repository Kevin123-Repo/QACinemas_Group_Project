import { CardElement, CardNumberElement, CardExpiryElement, CardCvcElement} from '@stripe/react-stripe-js';
import { Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useState } from 'react';
import "./Styles.css";

const countries = 
[
  "US","AT","AR","AU","BE","BG","BO","CA","CH","CR","CY","CZ","DE","DK","DO","EE","ES",
  "FI","FR","GB","GR","HK","HR","HU","ID","IE","IL","IS","IT","LI","LT","LU","LV","MT",
  "MX","NL","NO","NZ","PE","PL","PT","RO","SE","SG","SI","SK","TH","TT","UY"
];

const CardSection = (props) => {

  const { 
    name, city, setCity, country, setCountry,
    line1, setLine1, line2, setLine2, address_zip,
    setAddress_zip, email, setEmail
  } = props;
  
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
        <label htmlFor="cardName">Card Holder's Name</label>
        <Input type="text" placeholder={name} value={name} readOnly/>

        <label htmlFor="cardName">Address Line 1</label>
        <Input type="text" placeholder={"Line 1"} value={line1} onChange={(e) => setLine1(e.target.value)}/>

        <label htmlFor="cardName">Address Line 2</label>
        <Input type="text" placeholder={"Line 2"} value={line2} onChange={(e) => setLine2(e.target.value)}/>

        <label htmlFor="cardName">City</label>
        <Input type="text" placeholder={"City"} value={city} onChange={(e) => setCity(e.target.value)}/>

        <label htmlFor="cardName">Country</label>
        <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(prevState => !prevState)} size="sm" >
          <DropdownToggle caret className="country-dropdown">
            {country}
          </DropdownToggle>
          <DropdownMenu className="country-list" flip={false}>
            {
              countries.map((country, i) => (
                <DropdownItem key={i} value={country} onClick={(e) => setCountry(e.target.value)}>{country}</DropdownItem>
              ))
            }
          </DropdownMenu>
        </Dropdown>

        <label htmlFor="cardName">Postal Code</label>
        <Input type="text" placeholder={"Postal Code"} value={address_zip} onChange={(e) => setAddress_zip(e.target.value)}/>

        <label htmlFor="cardName">Email Address</label>
        <Input type="text" placeholder={"Email"} value={email} onChange={(e) => setEmail(e.target.value)}/>

        <label htmlFor="cardNumber">Card Number</label>
        <CardNumberElement/>

        <label htmlFor="cardExpiry">Card Expiry</label>
        <CardExpiryElement/>

        <label htmlFor="cardCVC">Card CVC</label>
        <CardCvcElement/>
    </>
  );
}

export default CardSection;