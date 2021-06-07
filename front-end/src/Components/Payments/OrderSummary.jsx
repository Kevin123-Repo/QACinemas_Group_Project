import { Table } from "reactstrap";

const OrderSummary = (props) => {

    const formatBooking = ({movieTitle, time, date, adults, child, concession, numberOfSeats, Price}) => {
        return {
            Movie: movieTitle, 
            Time: time, 
            Date: date.toDateString(), 
            Adults: adults, 
            Children: child, 
            Concession: concession, 
            Seats: numberOfSeats, 
            Price
        };
    }
    const bookingInfo = formatBooking(props.location.state);
    console.log(bookingInfo);
    return (
        <div className="order-summary-div">
            <div id="summary-title">
                <h2>ORDER SUMMARY</h2>
            </div>
            <Table>
                <tbody>
                    {
                        Object.keys(bookingInfo).map((key, i) => (
                            <tr key={i}>
                                <td id={"summary-prop"}>{key}</td>
                                <td id={"summary-val"}>{bookingInfo[key]}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default OrderSummary;