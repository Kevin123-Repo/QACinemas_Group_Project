import { Collapse, CardFooter, Card, CardTitle, CardText, Row, Col, CardBody } from 'reactstrap';

const ScrumSection = () => {


    return (

        <Card >
            <CardBody>

            </CardBody>

            <CardTitle ><center><b>About Scrum</b></center></CardTitle>

            <Card>
                <CardBody>
                    <p>Founded by Scrum co-creator Ken Schwaber as objective oriented organisation. Through professional training courses,certifications and
                    active learning all based on a competency models people will be handed the tools to enable them to solve complex solutions as a solo entity or in teams.
                    Support will be given irregardless of where an individual is on the journey whether that be at the beginning or someone joining halfway through with more experience.
                    </p>

                    <p>
                        Originally when organisations begun using scrum less than 50% of them were developing with incremntal iteraions which is the core of any Scrum.
                        These were later coined the term 'Flaccid Scrum' where teams were using the vocabulary but not creating a shippable icrement of functionality within a single Sprint.
                        The idea of Scrum is more of a project management skill and therefore the steep learning curve always troubled developers on the Scrum team. While the teachers of scrum
                        did not have a software engineering background they were also not fully qualified to teach this in a development drive aspect.
                    </p>
                    Three initiatives were lauched to solve this issue
                    <ol>
                        <li>Creating Scrum Developer Program</li>
                        A course developed specifically targettiong .NET technology stack. Collaborating with Microsoft gave them access to a base of solid trainers, coaches and a
                        fully integrated technology stack. Lauching alongside Visual Studio in 2010 the next step was to find new partners and publish courses that targetted other technology stacks
                        <li>Formalising the Scrum Body</li>
                        As popularity for Scrum grew so did the confusion and misunderstanding. Therefore Jeff Sutherland and Ken Schwaber produced a body of knowledge know as 'The Scrum Guide'
                        <li>Improving the quality and consistency of training</li>
                        Part of the problem with'Flaccid Scrum' was being due to inconsistent training. There were many differing ideas about the fundamentals, done was defined differently and many where
                        unable to answer questions about development dynaimcs during the Sprint. This final initiative was introduced to bring more transparency as a result bring more consistent results.

                    </ol>
                </CardBody>
                <CardFooter>
                    <center>
                        <a href="https://www.scrum.org/" target="_blank">Scrum.org</a>
                    </center>
                </CardFooter>
            </Card>


        </Card>

    )

}
export default ScrumSection;