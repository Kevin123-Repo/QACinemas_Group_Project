import Place from './Place';
import FrankieAndBennys from '../../Images/FrankieAndBennys.jpg';
import { Table } from "reactstrap";

const PlacesToGoTable = () => {

    return (
        <>
            <Table>
                <tbody>
                    <tr>
                        <td>
                            <Place img={FrankieAndBennys}
                                name='Frankie and Bennys'
                                info="Frankie and Benny's is the perfect way to start and end your day. With a delicious breakfast menu filled with our favourite breakfast and brunch food items to our American and Italian menu. Enjoy our sizzling steaks, speciality pizza, American burgers and hearty pasta dishes - the options are endless! Our lively atmosphere makes it great for families to enjoy a great day out but it's also relaxing enough to enjoy a quite meal with friends."
                                number='0113 203 8888'
                                website='https://www.frankieandbennys.com/' />
                        </td>
                        
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default PlacesToGoTable;