import Person from './Person'
import { Table, } from "reactstrap";

const AboutTable = () => {

    return (
        <>
            <table className="about-table">
                <tbody>
                    <tr>
                        <td>
                            <Person
                                //img={ }
                                name='Anoush Lowton'
                                email='ALowton@QA.com'
                                github='https://github.com/ALowtonQA'
                            />
                        </td>
                        <td>
                            <Person
                                //img={ }
                                name='George Ryalls'
                                email='gryalls@qa.com'
                                github='https://github.com/GeorgeRQA'
                            />
                        </td>


                        <td>
                            <Person
                                //img={ }
                                name='Jhon Urrego'
                                email='JUrregoAgudelo@qa.com'
                                github='https://github.com/JhonQA'
                            />
                        </td>
                        <td>
                            <Person
                                // img={ }
                                name='Kevin Tse'
                                email='KTse@qa.com'
                                github='https://github.com/Kevin123-QA'
                            />
                        </td>


                        <td>
                            <Person
                                // img={ }
                                name='Raphael Fywell'
                                email='RFywell@qa.com'
                                github='https://github.com/raphyfqa'
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default AboutTable;