import { Container, Row,Col, NavItem, NavLink, Nav } from "react-bootstrap"

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
                        <Nav variant = "pills" defaultActiveKey ="/home" >
                            <Nav.Item>
                                <Nav.Link eventKey = "first">
                                    Tab One
                                </Nav.Link>
                                <Nav.Item>
                                    <Nav.Link eventKey = "second">
                                        Tab Two
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey = "third">
                                        Tab Three
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Projects