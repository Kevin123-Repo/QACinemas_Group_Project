import Place from './Place';
import FrankieAndBennys from '../../Images/FrankieAndBennys.jpg';
import Nandos from '../../Images/Nandos.jpg';
import HollywoodBowl from '../../Images/HollywoodBowl.jpg';
import LaserZone from '../../Images/LaserZone.jpg';
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
                        <td>
                            <Place img={Nandos}
                                name='Nandos'
                                info="We're the home of the legendary Portuguese, flame grilled PERI-PERI chicken. You're guaranteed great food with excellent value for money, served in a warm, fun and vibrant atmosphere. Your senses will be fired up by the addictive flavour of our delicious chicken, grilled to perfection and served with pride and passion."
                                number='0113 279 6309'
                                website='https://www.nandos.co.uk/' />
                        </td>  
                    </tr>
                    <tr>
                        <td>
                            <Place img={HollywoodBowl}
                                name='Hollywood Bowl'
                                info="At Hollywood Bowl we have brilliant entertainment packages for all the family – including kids big and small! We're not just great for families: let out your competitive side against friends or colleagues. You can find everything you need for the perfect game including our fully licenced bar and fantastic deals on food and drink in our American inpired diner. With 32 lanes to bowl along, we bring the fun and entertainment. "
                                number='0844 826 1466'
                                website='https://www.hollywoodbowl.co.uk/' />
                        </td>
                        <td>
                            <Place img={LaserZone}
                                name='LaserZone'
                                info="LaserZone is out of this world! Beyond the airlock lies a 4000sqft galactic labyrinth filled with swirling smoke, strange sounds, flashing lights...and enemies! Explore our multi-level, fully supervised arena, armed with state of the art laser packs and phasors. Score points by zapping your opponents and destroying their bases."
                                number='0113 279 0000'
                                website='https://www.laserzone.co.uk/' />
                        </td>  
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default PlacesToGoTable;