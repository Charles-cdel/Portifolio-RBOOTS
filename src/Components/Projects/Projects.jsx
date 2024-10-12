import { Container, Row,Col } from "react-bootstrap"

function Projects (){

    const projects = [
        
        
            {
                title: "",
                description: "",
                imgUrl: ""
            },

            {

            }
        
        

    ]
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>
                        Projects</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit modi, earum ut inventore, sit sed harum sunt nostrum expedita soluta ad consectetur doloribus eum mollitia ex, possimus dolore doloremque corrupti.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Projects