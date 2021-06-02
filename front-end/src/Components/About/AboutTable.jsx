import Person from './Person'
import { Table, } from "reactstrap";

const AboutTable = () => {

    return (
        <>
            <Table bordered>
                <tbody>
                    <tr>
                        <td>
                            <Person
                                //img={ }
                                name='Anoush Lowton'
                                email='email'
                                github=''
                            />
                        </td>
                        <td>
                            <Person
                                //img={ }
                                name='George Ryalls'
                                email='email'
                                github=''
                            />
                        </td>


                        <td>
                            <Person
                                //img={ }
                                name='Jhon Fred Agudelo'
                                email='email'
                                github=''
                            />
                        </td>
                        <td>
                            <Person
                                // img={ }
                                name='Kevin Tse'
                                email='email'
                                github=''
                            />
                        </td>


                        <td>
                            <Person
                                // img={ }
                                name='Raphael Fywell'
                                email='email'
                                github=''
                            />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default AboutTable;