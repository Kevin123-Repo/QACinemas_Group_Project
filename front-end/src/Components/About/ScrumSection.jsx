import { CardFooter, Card, CardTitle, CardBody } from 'reactstrap';

const ScrumSection = () => {


    return (

        <Card id="scrum-info-div">
            <CardBody>

            </CardBody >

            <CardTitle ><center><b>About Scrum</b></center></CardTitle>

            <Card>
                <CardBody>
                    <p>Scrum is a project management idea withihn the agile process used during the product development. It can be utilised in any projects that have multiple deadlines, complex requirements
                    and a degree of uniqueness. Inside scrums each series of iteraion known as sprints are your typical stages of progress. sprints can last however long you want although the most common length
                    for sprints are between two and four weeks.
                    </p>

                    <p> Scrums functions best when the team is self organising and cross functional. This means that there is no leader that assigns a person to a task or tells someone how to solve a problem.
                    Cross functional means that everyone inside takes a feature from an idea to implementation. Within the agile process you have a product owner who represents the customer/business
                    and guides the team to building the product they want. A scrum master is also present to help manage the whole process of using scrum to ensure its performing at the most efficient levels.
                      </p>

                    <p>
                        The primary purpose of scrum development is to ensure that at the end of each sprint you have a product that is in a publishable state. Through using product backlogs a list of to-do's
                        can be listed and prioritised so everyone on the team knows what the most important features are and they can begin work on that first. From this product backlog a sprint backlog can be formed.
                        A product backlog can be thought of as all the things that needs to be completed for this project to be consider complete whereas a sprint backlog is a list of things to complete for the upcoming sprint.
                      </p>

                </CardBody>
                <CardFooter>
                    <center>
                        <a href="https://www.scrum.org/" target="_blank">Scrum.org</a>
                    </center>
                </CardFooter>
            </Card>


        </Card >

    )

}
export default ScrumSection;